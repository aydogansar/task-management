import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { createServerClient, CookieOptions } from '@supabase/ssr';

export const runtime = 'edge';

export async function POST(request: Request) {
  const body = await request.json();

  const cookieStore = cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          console.log(error);
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.delete({ name, ...options });
        } catch (error) {
          console.log(error);
        }
      },
    },
  });

  const { error, data } = await supabase.auth.signUp(body);

  if (error) {
    return NextResponse.json({ error }, { status: error.status });
  }

  return NextResponse.json({ data }, { status: 200 });
}
