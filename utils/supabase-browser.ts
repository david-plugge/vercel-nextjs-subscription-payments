import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from 'types_db';

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
