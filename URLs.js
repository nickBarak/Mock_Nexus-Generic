export const client = (process.NODE_ENV === 'production')
    ? 'https://www.mocknexus.com'
    : 'http://localhost:3000';

export default { client }