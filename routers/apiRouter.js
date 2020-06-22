import express from "express";
import { getDocumentApi } from "../src/controllers/apiController";
import apiRouterV1 from "./api/v1Router";
import apiRouterV2 from "./api/v2Router";

const apiRouter = express.Router();

apiRouter.use("/v1", apiRouterV1);
apiRouter.use("/v2", apiRouterV2);

apiRouter.get("/document", getDocumentApi);

export default apiRouter;
