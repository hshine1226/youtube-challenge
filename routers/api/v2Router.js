import express from "express";
import { getRemoveApi, getEditApi } from "../../src/controllers/apiController";

const apiRouterV2 = express.Router();

apiRouterV2.get("/remove", getRemoveApi);
apiRouterV2.get("/edit", getEditApi);

export default apiRouterV2;
