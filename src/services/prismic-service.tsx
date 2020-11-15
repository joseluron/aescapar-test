import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://aescapar.cdn.prismic.io/api/v2';
const accessToken = '';

const Client = Prismic.client(apiEndpoint, { accessToken });

export default Client;