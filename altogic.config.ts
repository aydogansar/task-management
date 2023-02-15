import { createClient } from 'altogic';

const envUrl = process.env.BASE_URL as string;
const clientKey = process.env.CLIENT_KEY as string;

const altogic = createClient(envUrl, clientKey, {
  signInRedirect: '/',
});

export default altogic;
