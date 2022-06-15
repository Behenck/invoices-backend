import { CreateDepartmentController } from "@modules/organizations/useCases/createDepartment/CreateDepartmentController";
import { Router } from "express";

const departmentsRoutes = Router();

const createDepartmentController = new CreateDepartmentController();

departmentsRoutes.post(
    "/",
    createDepartmentController.handle
);

export { departmentsRoutes };
