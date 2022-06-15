import { ICreateInvoiceDTO } from "../dtos/ICreateInvoiceDTO";
import { Invoice } from "../infra/typeorm/entities/Invoice";

interface IInvoicesRepository {
    create(data: ICreateInvoiceDTO): Promise<void>;
    show(): Promise<Invoice[]>;
}

export { IInvoicesRepository }