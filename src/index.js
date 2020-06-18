import express from "express";
import morgan from "morgan";

const app = express();

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

// controllers
const getHome = (req, res) => {
  res.send("Home");
};
const getAboutUs = (req, res) => {
  res.send("About us");
};
const getContact = (req, res) => {
  res.send("Contact");
};
const getProtected = (req, res) => {
  res.send("Protected");
};

// Middleware
const localsMiddleware = function(req, res, next) {
  console.log("I'm a middleware");
  next();
};

const protectMiddleware = (req, res, next) => {
  console.log("You can't access /proctected");
  res.redirect("/");
};

app.use(morgan("dev"));
app.use(localsMiddleware);

// Routes
app.get("/", getHome);
app.get("/about-us", getAboutUs);
app.get("/contact", getContact);
app.get("/protected", protectMiddleware, getProtected);
