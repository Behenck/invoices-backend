import { IInvoiceDocumentsRepository } from '@modules/invoices/repositories/IInvoiceDocumentsRepository';
import { inject, injectable } from "tsyringe";

interface IRequest {
    invoice_id: string;
    invoice_number: number;
    documents_name: string[];
}

@injectable()
class UploadInvoiceDocumentsUseCase {
    constructor(
        @inject("InvoiceDocumentsRepository")
        private invoiceDocumentsRepository: IInvoiceDocumentsRepository
    ) { }

    async execute({ invoice_id, documents_name, invoice_number }: IRequest): Promise<void> {
        documents_name.map(async (document_name) => {
            await this.invoiceDocumentsRepository.create(invoice_id, document_name, invoice_number)
        })
    }
}

export { UploadInvoiceDocumentsUseCase }