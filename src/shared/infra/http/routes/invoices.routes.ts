import { Router } from "express";

import { CreateInvoiceController } from "@modules/invoices/useCases/createInvoice/CreateInvoiceController";
import { ShowInvoicesController } from "@modules/invoices/useCases/showInvoices/ShowInvoicesController";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();
const showInvoicesController = new ShowInvoicesController();

invoicesRoutes.post(
    "/",
    createInvoiceController.handle
);

invoicesRoutes.get("/", showInvoicesController.handle);

export { invoicesRoutes };
