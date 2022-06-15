import { Router } from "express";

import { CreateIssuerController } from "@modules/issuers/useCases/createIssuer/CreateIssuerController";
import { ShowIssuersController } from "@modules/issuers/useCases/showIssuers/ShowIssuersController";

const issuersRoutes = Router();

const createIssuerController = new CreateIssuerController();
const showIssuersController = new ShowIssuersController();

issuersRoutes.post(
    "/",
    createIssuerController.handle
);

issuersRoutes.get("/", showIssuersController.handle);

export { issuersRoutes };
