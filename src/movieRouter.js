import express from "express";
import {
  getHome,
  getCreateMovie,
  postCreateMovie,
  getSearchMovie,
  getEditMovie,
  postEditMovie,
  postDeleteMovie,
  getSearchMovies
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get("/", getHome);

movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

movieRouter.get("/search", getSearchMovies);

movieRouter.get("/:id", getSearchMovie);
movieRouter.get("/:id/edit", getEditMovie);
movieRouter.post("/:id/edit", postEditMovie);
movieRouter.post("/:id/delete", postDeleteMovie);

export default movieRouter;
