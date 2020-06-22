import express from "express";
import { getBuyApi, getRefundApi } from "../../src/controllers/apiController";

const apiRouterV1 = express.Router();

apiRouterV1.get("/buy", getBuyApi);
apiRouterV1.get("/refund", getRefundApi);

export default apiRouterV1;
