export default function () {
  const config = useRuntimeConfig();
  return process.server && { baseURL: config.public.baseAPI };
}
