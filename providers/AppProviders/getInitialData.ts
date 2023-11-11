import { cookies } from 'next/headers';

import { InitialStoreState } from 'store';
import { createSupabaseServerClient } from 'utils/supabase';

async function getInitialData(): Promise<InitialStoreState> {
  const cookieStore = cookies();

  const supabase = createSupabaseServerClient({ cookies: cookieStore });

  const { data: userSession } = await supabase.auth.getSession();

  const initialState: InitialStoreState = {};

  if (userSession?.session) {
    initialState.auth = {
      user: userSession.session.user,
      session: userSession.session,
    };
  }

  return initialState;
}
export default getInitialData;
