exports.pageNotFound = (req, res, next) => {
  res.status(404).send("<h2>Error 404. Page not found!</h2>");
};
