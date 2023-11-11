import { cookies } from 'next/headers';

import { InitialStoreState } from 'store';
import { createSupabaseServerClient } from 'utils/supabase';

async function getInitialData(): Promise<InitialStoreState> {
  const supabase = createSupabaseServerClient({ cookies: cookies() });

  const { data: userSession, error } = await supabase.auth.getSession();

  const initialState: InitialStoreState = {};

  if (userSession) {
    initialState.auth = {
      user: userSession.session.user,
      session: userSession.session,
    };
  }

  return initialState;
}
export default getInitialData;
