import { IInvoicesRepository } from '@modules/invoices/repositories/IInvoicesRepository';
import { Invoice } from "@modules/invoices/infra/typeorm/entities/Invoice";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowInvoicesUseCase {
    constructor(
        @inject("InvoicesRepository")
        private invoicesRepository: IInvoicesRepository
    ) { }

    async execute(): Promise<Invoice[]> {
        const invoices = await this.invoicesRepository.show();

        return invoices;
    }
}

export { ShowInvoicesUseCase }