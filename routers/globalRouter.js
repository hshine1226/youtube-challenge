import express from "express";
import {
  getHome,
  getLogin,
  getPhotos,
  getProfile
} from "../src/controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.get("/login", getLogin);
globalRouter.get("/photos", getPhotos);
globalRouter.get("/profile", getProfile);

export default globalRouter;
