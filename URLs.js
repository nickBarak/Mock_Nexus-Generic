export const client = (process.env.NODE_ENV === 'production')
    ? 'https://www.mocknexus.com'
    : 'http://localhost:3000';

export default { client }