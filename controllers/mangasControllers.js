const api = require('./Api');

const home = (_, res) => {
  res.json({
    message: 'OK'
  });
};

const getManga = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getMangaInfo(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getArtist = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getArtist(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getAuthor = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getAuthor(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getChapters = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getChapters(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getDemography = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getDemography(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getFormat = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getFormat(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getGenres = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getGenres(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getStatus = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      messsage: 'ID must be a number'
    });
    return;
  }
  api
    .getStatus(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getName = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    res.status(400);
    res.json({
      message: 'ID must be a number'
    });
    return;
  }
  api
    .getName(id)
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getReleases = (_, res) => {
  api
    .getReleases()
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
};

const getByName = (req, res) => {
  const name = req.params.name;
  const maxResults = req.query.max;
  if (!name) {
    res.status(400);
    res.json({
      message: 'Name is required'
    });
    return;
  }

  api
    .getByName(name, { maxResults: maxResults })
    .then((response) => {
      res.json(response);
    })
    .catch((response) => {
      res.json(response);
    });
}

module.exports = {
  home,
  getArtist,
  getAuthor,
  getChapters,
  getDemography,
  getFormat,
  getGenres,
  getManga,
  getStatus,
  getName,
  getReleases,
  getByName
};
