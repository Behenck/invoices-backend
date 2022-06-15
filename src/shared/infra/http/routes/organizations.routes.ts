import { Router } from "express";

import { CreateOrganizationController } from "@modules/organizations/useCases/createOrganization/CreateOrganizationController";
import { ShowOrganizationsController } from "@modules/organizations/useCases/showOrganizations/ShowOrganizationsController";

const organizationsRoutes = Router();

const createOrganizationController = new CreateOrganizationController();
const showOrganizationsController = new ShowOrganizationsController();

organizationsRoutes.post(
    "/",
    createOrganizationController.handle
);

organizationsRoutes.get("/", showOrganizationsController.handle);

export { organizationsRoutes };
