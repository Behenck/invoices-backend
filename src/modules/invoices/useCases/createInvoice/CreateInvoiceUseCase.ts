import { IInvoicesRepository } from "@modules/invoices/repositories/IInvoicesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    department_id: string;
    issuer_id: string;
    organization_id: string;
    amount: number;
    due_date: Date;
    payment_date?: Date;
    launch_date?: Date;
    competence_month: number;
    competence_year: number;
    status_id: number;
    description?: string
}

@injectable()
class CreateInvoiceUseCase {
    constructor(
        @inject("InvoicesRepository")
        private invoicesRepository: IInvoicesRepository
    ) { }

    async execute({
        amount,
        competence_month,
        competence_year,
        department_id,
        due_date,
        issuer_id,
        organization_id,
        status_id,
        description,
        launch_date,
        payment_date
    }: IRequest): Promise<void> {
        await this.invoicesRepository.create({
            amount,
            competence_month,
            competence_year,
            department_id,
            due_date,
            issuer_id,
            organization_id,
            status_id,
            description,
            launch_date,
            payment_date
        });
    }
}

export { CreateInvoiceUseCase }