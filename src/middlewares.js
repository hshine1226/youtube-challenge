export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Junhyuk Movies";
  next();
};
