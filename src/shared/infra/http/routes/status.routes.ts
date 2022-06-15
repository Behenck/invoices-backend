import { Router } from "express";

import { CreateStatusController } from "@modules/invoices/useCases/createStatus/CreateStatusController";
import { ShowStatusController } from "@modules/invoices/useCases/showStatus/ShowStatusController";

const statusRoutes = Router();

const createStatusController = new CreateStatusController();
const showStatusController = new ShowStatusController();

statusRoutes.post(
    "/",
    createStatusController.handle
);

statusRoutes.get("/", showStatusController.handle);

export { statusRoutes };
