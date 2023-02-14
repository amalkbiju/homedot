import ApiContants from '../contants/ApiContants';

const getFlagIcon = (
  code = 'IN',
  style = ApiContants.COUNTRY_FLAG.STYLE.FLAT,
  size = ApiContants.COUNTRY_FLAG.SIZE[64],
) => `${ApiContants.COUNTRY_FLAG.BASE_URL}/png/${code}/`;

export default {getFlagIcon};
