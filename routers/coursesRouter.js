import express from "express";

import {
  getCourses,
  getNewCourses
} from "../src/controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get("/", getCourses);
coursesRouter.get("/new", getNewCourses);

export default coursesRouter;
