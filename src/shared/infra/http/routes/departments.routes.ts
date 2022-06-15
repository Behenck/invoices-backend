import { Router } from "express";

import { CreateDepartmentController } from "@modules/organizations/useCases/createDepartment/CreateDepartmentController";
import { ShowDepartmentsController } from "@modules/organizations/useCases/showDepartments/ShowDepartmentsController";

const departmentsRoutes = Router();

const createDepartmentController = new CreateDepartmentController();
const showDepartmentsController = new ShowDepartmentsController();

departmentsRoutes.post(
    "/",
    createDepartmentController.handle
);

departmentsRoutes.get("/", showDepartmentsController.handle);

export { departmentsRoutes };
