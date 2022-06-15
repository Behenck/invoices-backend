import { Router } from 'express';

import { departmentsRoutes } from './departments.routes';
import { invoicesRoutes } from './invoices.routes';
import { issuersRoutes } from './issuers.routes';
import { organizationsRoutes } from './organizations.routes';
import { statusRoutes } from './status.routes';

const router = Router();

router.use("/departments", departmentsRoutes);
router.use("/organizations", organizationsRoutes);
router.use("/issuers", issuersRoutes);
router.use("/status", statusRoutes);
router.use("/invoices", invoicesRoutes);

export { router }