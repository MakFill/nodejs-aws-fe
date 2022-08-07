const _BFF_LINK = 'http://makfill-bff-service-production.eu-west-1.elasticbeanstalk.com';
const BFF_PROXY = 'https://q39ql4j5dd.execute-api.eu-west-1.amazonaws.com/dev';

const API_PATHS = {
  product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  import: 'https://tg1u57frh7.execute-api.eu-west-1.amazonaws.com/dev',
  bff: `${BFF_PROXY}/product`,
  cart: `${BFF_PROXY}/cart`,
};

export default API_PATHS;
