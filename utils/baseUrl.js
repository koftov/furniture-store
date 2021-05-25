const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://bike-store.vercel.app'
    : 'http://localhost:3000';

export default baseUrl;
