import { Router } from "express";

import { CreateInvoiceController } from "@modules/invoices/useCases/createInvoice/CreateInvoiceController";
import { ShowInvoicesController } from "@modules/invoices/useCases/showInvoices/ShowInvoicesController";

import uploadConfig from "@config/upload";
import multer from "multer";
import { UploadInvoiceDocumentsController } from "@modules/invoices/useCases/uploadInvoiceDocuments/UploadInvoiceDocumentsController";

const invoicesRoutes = Router();

const createInvoiceController = new CreateInvoiceController();
const showInvoicesController = new ShowInvoicesController();
const uploadInvoiceDocumentsController = new UploadInvoiceDocumentsController();

const upload = multer(uploadConfig.upload("./tmp/invoices"));

invoicesRoutes.post(
    "/",
    createInvoiceController.handle
);

invoicesRoutes.get("/", showInvoicesController.handle);

invoicesRoutes.post(
    "/documents/:id",
    upload.array("documents"),
    uploadInvoiceDocumentsController.handle
);

export { invoicesRoutes };
