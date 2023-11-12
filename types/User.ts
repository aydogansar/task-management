import { Session } from '@supabase/supabase-js';

export type User = Session['user'];
export type UserSession = {
  session: Session;
  user: User;
};
