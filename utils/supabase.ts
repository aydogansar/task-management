import { createBrowserClient, createServerClient } from '@supabase/ssr';

export function createSupabaseClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
}

interface CreateSupabaseServerClientProps {
  cookies: {
    get?: (name: string) => {
      value?: string;
    };
  };
}

export function createSupabaseServerClient({ cookies }: CreateSupabaseServerClientProps) {
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookies.get(name)?.value;
      },
    },
  });
}
