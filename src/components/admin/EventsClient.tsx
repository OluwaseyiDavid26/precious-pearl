"use client";

import { useState, useRef, useTransition } from "react";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  deleteEventImage,
  togglePublish,
} from "@/app/admin/events/action";
import { EventCategory } from "@/lib/types";

interface EventImage {
  id: string;
  image_url: string;
  sort_order: number;
}

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  location: string | null;
  category: EventCategory;
  is_published: boolean;
  created_at: string;
  event_images: EventImage[];
}

interface EventsClientProps {
  initialEvents: Event[];
}

const CATEGORIES: { value: EventCategory; label: string }[] = [
  { value: "general", label: "General" },
  { value: "outreach", label: "Outreach" },
  { value: "scholarship", label: "Scholarship" },
  { value: "health", label: "Health" },
  { value: "mentorship", label: "Mentorship" },
];

const CATEGORY_COLORS: Record<EventCategory, string> = {
  general: "bg-gray-100 text-gray-600",
  outreach: "bg-blue-100 text-blue-700",
  scholarship: "bg-yellow-100 text-yellow-700",
  health: "bg-green-100 text-green-700",
  mentorship: "bg-purple-100 text-purple-700",
};

export default function EventsClient({ initialEvents }: EventsClientProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [isPending, startTransition] = useTransition();

  function showToast(msg: string, type: "success" | "error" = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }

  function handleEdit(event: Event) {
    setEditingEvent(event);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancel() {
    setShowForm(false);
    setEditingEvent(null);
  }

  async function confirmDelete() {
    if (!deletingId) return;
    startTransition(async () => {
      const result = await deleteEvent(deletingId);
      if ("error" in result) {
        showToast(result.error, "error");
      } else {
        setEvents((prev) => prev.filter((e) => e.id !== deletingId));
        showToast("Event deleted successfully.");
      }
      setDeletingId(null);
    });
  }

  async function handleTogglePublish(event: Event) {
    startTransition(async () => {
      const result = await togglePublish(event.id, event.is_published);
      if ("error" in result) {
        showToast(result.error, "error");
      } else {
        setEvents((prev) =>
          prev.map((e) => e.id === event.id ? { ...e, is_published: !e.is_published } : e)
        );
        showToast(event.is_published ? "Event unpublished." : "Event published!");
      }
    });
  }

  function handleFormSuccess() {
    setShowForm(false);
    setEditingEvent(null);
    showToast(editingEvent ? "Event updated successfully!" : "Event created successfully!");
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-[#F4F6FB]">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold ${toast.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}>
          {toast.type === "success" ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          )}
          {toast.msg}
        </div>
      )}

      {/* Delete Modal */}
      {deletingId && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-[#0D1B5E] text-center mb-1">Delete Event?</h3>
            <p className="text-gray-400 text-sm text-center mb-6">This will permanently delete the event and all its images. This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeletingId(null)} className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 transition-colors">Cancel</button>
              <button onClick={confirmDelete} disabled={isPending} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors disabled:opacity-60">
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="bg-[#0D1B5E] border-b-4 border-[#F5C400]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <a href="/admin" className="text-white/40 hover:text-[#F5C400] text-xs font-semibold uppercase tracking-widest transition-colors">Dashboard</a>
              <span className="text-white/20 text-xs">/</span>
              <span className="text-[#F5C400] text-xs font-semibold uppercase tracking-widest">Events</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Events</h1>
            <p className="text-white/50 text-sm mt-0.5">{events.length} event{events.length !== 1 ? "s" : ""} total</p>
          </div>
          {!showForm && (
            <button
              onClick={() => { setEditingEvent(null); setShowForm(true); }}
              className="flex items-center gap-2 bg-[#F5C400] hover:bg-yellow-400 text-[#0D1B5E] font-black text-sm px-5 py-3 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              New Event
            </button>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Form */}
        {showForm && (
          <EventForm event={editingEvent} onSuccess={handleFormSuccess} onCancel={handleCancel} />
        )}

        {/* Empty state */}
        {events.length === 0 && !showForm ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-20 h-20 rounded-3xl bg-[#0D1B5E]/5 flex items-center justify-center mb-5">
              <svg className="w-10 h-10 text-[#0D1B5E]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-[#0D1B5E] mb-2">No Events Yet</h3>
            <p className="text-gray-400 text-sm mb-6">Create your first event to get started</p>
            <button onClick={() => setShowForm(true)} className="bg-[#F5C400] hover:bg-yellow-400 text-[#0D1B5E] font-black text-sm px-6 py-3 rounded-xl transition-all">
              + Create First Event
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onEdit={handleEdit}
                onDelete={(id) => setDeletingId(id)}
                onTogglePublish={handleTogglePublish}
                isPending={isPending}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── EVENT FORM ────────────────────────────────────────────────────────────────
function EventForm({ event, onSuccess, onCancel }: { event: Event | null; onSuccess: () => void; onCancel: () => void }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isPublished, setIsPublished] = useState(event?.is_published ?? false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const filesRef = useRef<File[]>([]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    filesRef.current = [...filesRef.current, ...files];
    setPreviews((prev) => [...prev, ...files.map((f) => URL.createObjectURL(f))]);
  }

  function removePreview(index: number) {
    filesRef.current = filesRef.current.filter((_, i) => i !== index);
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    filesRef.current.forEach((file) => formData.append("images", file));
    formData.set("is_published", isPublished.toString());

    startTransition(async () => {
      if (event) {
        formData.set("id", event.id);
        const result = await updateEvent(formData);
        if ("error" in result) { setError(result.error); return; }
      } else {
        const result = await createEvent(formData);
        if ("error" in result) { setError(result.error); return; }
      }
      onSuccess();
    });
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-[#0D1B5E]/10 shadow-xl mb-10 overflow-hidden">
      <div className="bg-[#0D1B5E] px-7 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#F5C400] flex items-center justify-center">
            <svg className="w-4 h-4 text-[#0D1B5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={event ? "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" : "M12 4v16m8-8H4"} />
            </svg>
          </div>
          <h2 className="text-white font-black text-lg">{event ? "Edit Event" : "Create New Event"}</h2>
        </div>
        <button onClick={onCancel} className="text-white/40 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-7 flex flex-col gap-6">
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            {error}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#0D1B5E]">Event Title <span className="text-red-400">*</span></label>
          <input name="title" type="text" required defaultValue={event?.title ?? ""} placeholder="e.g. CSR – Community Outreach (Oct. 2025, Lagos)" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0D1B5E] focus:outline-none text-sm text-gray-800 placeholder:text-gray-300 transition-colors" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-[#0D1B5E]">Event Date</label>
            <input name="event_date" type="date" defaultValue={event?.event_date?.split("T")[0] ?? ""} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0D1B5E] focus:outline-none text-sm text-gray-700 transition-colors" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-[#0D1B5E]">Location</label>
            <input name="location" type="text" defaultValue={event?.location ?? ""} placeholder="e.g. Abuja, Nigeria" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0D1B5E] focus:outline-none text-sm text-gray-800 placeholder:text-gray-300 transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#0D1B5E]">Category</label>
          <select name="category" defaultValue={event?.category ?? "general"} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0D1B5E] focus:outline-none text-sm text-gray-800 transition-colors bg-white">
            {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#0D1B5E]">Description</label>
          <textarea name="description" rows={3} defaultValue={event?.description ?? ""} placeholder="Brief summary of the event..." className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0D1B5E] focus:outline-none text-sm text-gray-800 placeholder:text-gray-300 transition-colors resize-none" />
        </div>

        {event && event.event_images.length > 0 && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-[#0D1B5E]">Current Images</label>
            <div className="flex flex-wrap gap-3">
              {event.event_images.map((img) => <ExistingImageThumb key={img.id} img={img} />)}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#0D1B5E]">{event ? "Add More Images" : "Upload Images"}</label>
          <div className="border-2 border-dashed border-[#0D1B5E]/20 hover:border-[#F5C400] rounded-2xl p-8 text-center cursor-pointer transition-colors group" onClick={() => fileInputRef.current?.click()}>
            <div className="w-12 h-12 rounded-2xl bg-[#0D1B5E]/5 group-hover:bg-[#F5C400]/10 flex items-center justify-center mx-auto mb-3 transition-colors">
              <svg className="w-6 h-6 text-[#0D1B5E]/40 group-hover:text-[#F5C400] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-500 group-hover:text-[#0D1B5E] transition-colors">Drop images here or click to browse</p>
            <p className="text-xs text-gray-300 mt-1">JPG, PNG, GIF, WebP · Max 10MB per file</p>
            <input ref={fileInputRef} type="file" name="images" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
          </div>
          {previews.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2">
              {previews.map((src, i) => (
                <div key={i} className="relative group">
                  <img src={src} alt="" className="w-20 h-20 object-cover rounded-xl border-2 border-gray-100" />
                  <button type="button" onClick={() => removePreview(i)} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 border-2 border-gray-100">
          <div>
            <p className="text-sm font-bold text-[#0D1B5E]">Publish Event</p>
            <p className="text-xs text-gray-400 mt-0.5">Make this event visible on the public site</p>
          </div>
          <button type="button" onClick={() => setIsPublished((prev) => !prev)} className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${isPublished ? "bg-emerald-500" : "bg-gray-200"}`}>
            <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-200 ${isPublished ? "left-6" : "left-0.5"}`} />
          </button>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="button" onClick={onCancel} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold text-sm hover:border-gray-300 transition-colors">Cancel</button>
          <button type="submit" disabled={isPending} className="flex-1 py-3 rounded-xl bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 text-white font-black text-sm transition-colors flex items-center justify-center gap-2 shadow-md">
            {isPending ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>
                {event ? "Saving..." : "Creating..."}
              </>
            ) : event ? "Save Changes" : "Create Event"}
          </button>
        </div>
      </form>
    </div>
  );
}

// ── EXISTING IMAGE THUMB ──────────────────────────────────────────────────────
function ExistingImageThumb({ img }: { img: EventImage }) {
  const [deleted, setDeleted] = useState(false);
  const [isPending, startTransition] = useTransition();
  if (deleted) return null;
  return (
    <div className="relative group">
      <img src={img.image_url} alt="" className="w-20 h-20 object-cover rounded-xl border-2 border-gray-100" />
      <button type="button" disabled={isPending} onClick={() => startTransition(async () => { const r = await deleteEventImage(img.id, img.image_url); if (!("error" in r)) setDeleted(true); })} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
        {isPending ? <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg> : <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>}
      </button>
    </div>
  );
}

// ── EVENT CARD ────────────────────────────────────────────────────────────────
function EventCard({ event, onEdit, onDelete, onTogglePublish, isPending }: { event: Event; onEdit: (e: Event) => void; onDelete: (id: string) => void; onTogglePublish: (e: Event) => void; isPending: boolean }) {
  const images = event.event_images ?? [];
  const firstImage = images[0]?.image_url;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative h-44 bg-[#0D1B5E]/5 overflow-hidden">
        {firstImage ? (
          <img src={firstImage} alt={event.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-10 h-10 text-[#0D1B5E]/10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        )}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-semibold backdrop-blur-sm">+{images.length - 1} more</div>
        )}
        <div className={`absolute top-2 left-2 text-xs px-2.5 py-1 rounded-lg font-bold ${event.is_published ? "bg-emerald-500 text-white" : "bg-gray-800/60 text-white/80"}`}>
          {event.is_published ? "Published" : "Draft"}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-lg mb-2 ${CATEGORY_COLORS[event.category]}`}>
          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
        </span>
        <h3 className="font-black text-[#0D1B5E] text-sm leading-snug mb-2 line-clamp-2">{event.title}</h3>
        <div className="flex flex-col gap-1 mb-4">
          {event.event_date && (
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {new Date(event.event_date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {event.location}
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-auto">
          <button onClick={() => onTogglePublish(event)} disabled={isPending} className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${event.is_published ? "bg-gray-100 hover:bg-gray-200 text-gray-600" : "bg-emerald-50 hover:bg-emerald-100 text-emerald-700"}`}>
            {event.is_published ? "Unpublish" : "Publish"}
          </button>
          <button onClick={() => onEdit(event)} className="px-3 py-2 rounded-xl bg-[#0D1B5E]/5 hover:bg-[#0D1B5E]/10 text-[#0D1B5E] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          </button>
          <button onClick={() => onDelete(event.id)} className="px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
