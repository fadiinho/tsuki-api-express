const TsukiApi = require('tsuki-api').default;

const api = new TsukiApi({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

(async () => {
  await api.init();
})();

module.exports = api;
