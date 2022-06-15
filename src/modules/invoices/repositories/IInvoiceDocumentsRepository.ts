import { InvoiceDocuments } from "../infra/typeorm/entities/InvoiceDocuments";


interface IInvoiceDocumentsRepository {
    create(invoice_id: string, invoice_name: string, invoice_number: number): Promise<InvoiceDocuments>;
}

export { IInvoiceDocumentsRepository }