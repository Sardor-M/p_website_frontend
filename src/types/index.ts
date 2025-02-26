export type AppProps = {
  onToggleTheme: () => void;
  theme: 'light' | 'dark';
};

export type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export type FetchOptions<TBody = unknown> = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: HeadersInit;
  body?: TBody;
}
