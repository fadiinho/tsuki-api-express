const { Router } = require('express');

const router = Router();
const {
  home,
  getManga,
  getArtist,
  getAuthor,
  getChapters,
  getDemography,
  getFormat,
  getGenres,
  getStatus,
  getName,
  getReleases,
  getByName
} = require('../controllers/mangasControllers');

router.get('/', home);
router.get('/getManga/:id', getManga);
router.get('/getArtist/:id', getArtist);
router.get('/getAuthor/:id', getAuthor);
router.get('/getChapters/:id', getChapters);
router.get('/getDemography/:id', getDemography);
router.get('/getFormat/:id', getFormat);
router.get('/getGenres/:id', getGenres);
router.get('/getStatus/:id', getStatus);
router.get('/getName/:id', getName);
router.get('/getReleases', getReleases);
router.get('/getByName/:name', getByName);

module.exports = router;
