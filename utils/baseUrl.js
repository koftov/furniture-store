const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://koftovstore.herokuapp.com/'
    : 'http://localhost:3000';

export default baseUrl;
