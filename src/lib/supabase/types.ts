export type EventCategory =
  | "general"
  | "outreach"
  | "scholarship"
  | "health"
  | "mentorship";

export type DonationStatus = "pending" | "confirmed" | "failed";

export interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  location: string | null;
  category: EventCategory;
  flyer_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Flyer {
  id: string;
  title: string;
  image_url: string;
  event_id: string | null;
  is_published: boolean;
  uploaded_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  cover_image: string | null;
  author: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Donation {
  id: string;
  donor_name: string;
  donor_email: string | null;
  amount: number;
  currency: string;
  purpose: string | null;
  payment_method: string | null;
  payment_ref: string | null;
  status: DonationStatus;
  notes: string | null;
  donated_at: string;
}

// Form input types (used when creating/editing)
export type EventInput = Omit<Event, "id" | "created_at" | "updated_at">;
export type FlyerInput = Omit<Flyer, "id" | "uploaded_at">;
export type PostInput = Omit<Post, "id" | "created_at" | "updated_at">;
export type DonationInput = Omit<Donation, "id" | "donated_at">;
