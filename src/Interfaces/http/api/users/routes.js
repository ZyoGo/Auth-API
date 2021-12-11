const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserhandler,
  },
];

module.exports = routes;
