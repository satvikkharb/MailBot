import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions matching the database schema
export type EmailStatus = "pending" | "approved" | "sent" | "ignored";

export interface Email {
  id: string;
  gmail_message_id: string;
  sender: string;
  subject: string;
  body: string;
  received_at: string;
  status: EmailStatus;
  created_at: string;
}

export interface Draft {
  id: string;
  email_id: string;
  ai_draft: string;
  final_reply: string | null;
  model_used: string;
  created_at: string;
  sent_at: string | null;
}

export interface Feedback {
  id: string;
  draft_id: string;
  star_rating: number;
  text_feedback: string | null;
  created_at: string;
}

export interface KnowledgeBase {
  id: string;
  content: string;
  source: string;
  metadata: Record<string, unknown>;
  created_at: string;
}
