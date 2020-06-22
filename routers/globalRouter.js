import express from "express";
import {
  getHome,
  getJoin,
  getLogin,
  getConfirm
} from "../src/controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.get("/join", getJoin);
globalRouter.get("/login", getLogin);
globalRouter.get("/confirm-account", getConfirm);

export default globalRouter;
