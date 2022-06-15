import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadInvoiceDocumentsUseCase } from "./UploadInvoiceDocumentsUseCase";

interface IFiles {
    filename: string;
}

class UploadInvoiceDocumentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: invoice_id } = request.params;
        const documents = request.files as IFiles[];

        const uploadInvoiceDocumentsUseCase = container.resolve(UploadInvoiceDocumentsUseCase);

        const documents_name = documents.map((file) => file.filename);

        await uploadInvoiceDocumentsUseCase.execute({
            invoice_id,
            documents_name,
            invoice_number: 1
        });

        return response.status(201).send();
    }
}

export { UploadInvoiceDocumentsController }