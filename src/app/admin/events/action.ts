"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { EventCategory } from "@/lib/types";

export async function createEvent(formData: FormData): Promise<{ error: string } | { success: true; id: string }> {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string | null;
  const event_date = formData.get("event_date") as string | null;
  const location = formData.get("location") as string | null;
  const category = (formData.get("category") as EventCategory) ?? "general";
  const is_published = formData.get("is_published") === "true";
  const images = formData.getAll("images") as File[];

  if (!title?.trim()) return { error: "Event title is required." };

  const { data: event, error: insertError } = await supabase
    .from("events")
    .insert({ title, description, event_date: event_date || null, location, category, is_published })
    .select("id")
    .single();

  if (insertError || !event) return { error: insertError?.message ?? "Failed to create event." };

  const imageUrls: string[] = [];

  for (const image of images) {
    if (!image || image.size === 0) continue;
    const ext = image.name.split(".").pop();
    const path = `events/${event.id}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("event-images")
      .upload(path, image, { contentType: image.type, upsert: false });
    if (uploadError) continue;
    const { data: urlData } = supabase.storage.from("event-images").getPublicUrl(path);
    if (urlData?.publicUrl) imageUrls.push(urlData.publicUrl);
  }

  if (imageUrls.length > 0) {
    const rows = imageUrls.map((url, i) => ({ event_id: event.id, image_url: url, sort_order: i }));
    await supabase.from("event_images").insert(rows);
  }

  revalidatePath("/admin/events");
  revalidatePath("/admin");
  return { success: true, id: event.id };
}

export async function updateEvent(formData: FormData): Promise<{ error: string } | { success: true }> {
  const supabase = await createClient();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string | null;
  const event_date = formData.get("event_date") as string | null;
  const location = formData.get("location") as string | null;
  const category = (formData.get("category") as EventCategory) ?? "general";
  const is_published = formData.get("is_published") === "true";
  const newImages = formData.getAll("images") as File[];

  if (!id) return { error: "Event ID missing." };
  if (!title?.trim()) return { error: "Event title is required." };

  const { error: updateError } = await supabase
    .from("events")
    .update({ title, description, event_date: event_date || null, location, category, is_published, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (updateError) return { error: updateError.message };

  for (const image of newImages) {
    if (!image || image.size === 0) continue;
    const ext = image.name.split(".").pop();
    const path = `events/${id}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("event-images")
      .upload(path, image, { contentType: image.type, upsert: false });
    if (uploadError) continue;
    const { data: urlData } = supabase.storage.from("event-images").getPublicUrl(path);
    if (urlData?.publicUrl) {
      const { count } = await supabase
        .from("event_images")
        .select("*", { count: "exact", head: true })
        .eq("event_id", id);
      await supabase.from("event_images").insert({ event_id: id, image_url: urlData.publicUrl, sort_order: count ?? 0 });
    }
  }

  revalidatePath("/admin/events");
  revalidatePath("/admin");
  return { success: true };
}

export async function deleteEvent(id: string): Promise<{ error: string } | { success: true }> {
  const supabase = await createClient();

  const { data: images } = await supabase.from("event_images").select("image_url").eq("event_id", id);

  if (images && images.length > 0) {
    const paths = images
      .map((img) => { try { const url = new URL(img.image_url); return url.pathname.split("/event-images/")[1]; } catch { return null; } })
      .filter(Boolean) as string[];
    if (paths.length > 0) await supabase.storage.from("event-images").remove(paths);
  }

  await supabase.from("event_images").delete().eq("event_id", id);
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/events");
  revalidatePath("/admin");
  return { success: true };
}

export async function deleteEventImage(imageId: string, imageUrl: string): Promise<{ error: string } | { success: true }> {
  const supabase = await createClient();
  try {
    const url = new URL(imageUrl);
    const path = url.pathname.split("/event-images/")[1];
    if (path) await supabase.storage.from("event-images").remove([path]);
  } catch {}
  const { error } = await supabase.from("event_images").delete().eq("id", imageId);
  if (error) return { error: error.message };
  revalidatePath("/admin/events");
  return { success: true };
}

export async function togglePublish(id: string, current: boolean): Promise<{ error: string } | { success: true }> {
  const supabase = await createClient();
  const { error } = await supabase
    .from("events")
    .update({ is_published: !current, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/events");
  revalidatePath("/admin");
  return { success: true };
}
