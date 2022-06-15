import { container } from 'tsyringe';
import { Request, Response } from "express";
import { CreateInvoiceUseCase } from './CreateInvoiceUseCase';

class CreateInvoiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
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
        } = request.body;

        const createInvoiceUseCase = container.resolve(CreateInvoiceUseCase);

        await createInvoiceUseCase.execute({
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

        return response.status(201).send();
    }
}

export { CreateInvoiceController }