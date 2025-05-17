
export const buildUrl = (
  url: string,
  queryParams?: Record<string, string | number | boolean>
) => {
  if (!queryParams) return url;
  const params = new URLSearchParams();
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  });
  return `${url}?${params.toString()}`;
};


