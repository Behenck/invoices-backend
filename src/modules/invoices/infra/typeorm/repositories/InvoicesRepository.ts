import { getRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { ICreateInvoiceDTO } from "@modules/invoices/dtos/ICreateInvoiceDTO";
import { IInvoicesRepository } from "@modules/invoices/repositories/IInvoicesRepository";
import { Invoice } from "../entities/Invoice";

class InvoicesRepository implements IInvoicesRepository {
    private repository: Repository<Invoice>;

    constructor() {
        this.repository = getRepository(Invoice);
    }

    async create({
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
    }: ICreateInvoiceDTO): Promise<void> {
        const invoice = this.repository.create({
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

        await this.repository.save(invoice);
    }

    async show(): Promise<Invoice[]> {
        const invoicesQuery = await this.repository
            .createQueryBuilder("i")
            .where(("i.status_id = :status_id"), { status_id: 1 });

        const invoices = await invoicesQuery.getMany();

        return invoices;
    }
}

export { InvoicesRepository }