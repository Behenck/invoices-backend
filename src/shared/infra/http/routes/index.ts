import { Router } from 'express';
import { departmentsRoutes } from './departments.routes';

const router = Router();

router.use("/department", departmentsRoutes)

export { router }