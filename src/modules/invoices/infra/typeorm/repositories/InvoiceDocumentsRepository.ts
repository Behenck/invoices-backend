import { getRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { IInvoiceDocumentsRepository } from "@modules/invoices/repositories/IInvoiceDocumentsRepository";
import { InvoiceDocuments } from "../entities/InvoiceDocuments";

class InvoiceDocumentsRepository implements IInvoiceDocumentsRepository {
    private repository: Repository<InvoiceDocuments>;

    constructor() {
        this.repository = getRepository(InvoiceDocuments);
    }

    async create(invoice_id: string, invoice_name: string, invoice_number: number): Promise<InvoiceDocuments> {
        const invoiceDocuments = this.repository.create({
            invoice_id,
            invoice_name,
            invoice_number
        });

        await this.repository.save(invoiceDocuments);

        return invoiceDocuments;
    }

}

export { InvoiceDocumentsRepository }