import { cookies } from 'next/headers';

import { ACCESS_TOKEN_KEY } from 'constant';

const BASE_URL = `${process.env.NEXT_PUBLIC_REST_API}`;

/**
 * Fetch
 */
async function customFetch(endpoint: string, options: RequestInit = {}) {
  const headers = new Headers(options?.headers);

  const accessToken = cookies().get(ACCESS_TOKEN_KEY).value;

  headers.set('Authorization', `Bearer ${accessToken}`);
  headers.set('apikey', `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`);

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  return data;
}

interface EndpointSchema<P> {
  url: string | ((params?: P) => string);
  method?: RequestInit['method'];
  headers?: RequestInit['headers'];
}

interface BaseServicesOptions {
  /**
   * should be send if all services have the same prefix
   *
   * @example `/auth` --> `/auth/{service-url}`
   *
   */
  prefix?: string;
}

function createBuilder(baseOptions: BaseServicesOptions = {}) {
  return function <R, P>(schema: EndpointSchema<P>): (params: P, options?: RequestInit) => Promise<R> {
    return async function service(params?: P, options: RequestInit = {}) {
      let url = '';

      if (typeof schema.url === 'string') {
        url = schema.url;
      }

      if (typeof schema.url === 'function') {
        url = schema.url(params);
      }

      const endpoint = `${baseOptions.prefix || ''}${url}`;

      return await customFetch(endpoint, {
        ...options,
        method: schema.method || 'GET',
        headers: schema.headers || options.headers,
      });
    };
  };
}

type CreateServicesCallback = (
  callback: <R, P>(schema: EndpointSchema<P>) => (params: P, options?: RequestInit) => Promise<R>
) => Record<PropertyKey, ReturnType<typeof callback>>;

export function createServices<T extends CreateServicesCallback>(getServices: T, options: BaseServicesOptions = {}) {
  const builder = createBuilder(options);

  const services = getServices(builder) as ReturnType<T>;

  return services;
}
