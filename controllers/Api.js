const TsukiApi = require('tsuki-api').default;

const api = new TsukiApi();

(async () => {
  await api.init();
})();

module.exports = api;
