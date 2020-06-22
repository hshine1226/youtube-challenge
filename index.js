import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import coursesRouter from "./routers/coursesRouter";

const app = express();

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

// Middleware
const localsMiddleware = function(req, res, next) {
  console.log("I'm a middleware");
  next();
};

app.use(morgan("dev"));
app.use(localsMiddleware);

app.use("/", globalRouter);
app.use("/api", apiRouter);
app.use("/courses", coursesRouter);
