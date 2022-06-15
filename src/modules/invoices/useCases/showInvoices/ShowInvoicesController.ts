import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ShowInvoicesUseCase } from './ShowInvoicesUseCase';


class ShowInvoicesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showInvoicesUseCase = container.resolve(ShowInvoicesUseCase);

        const invoices = await showInvoicesUseCase.execute();

        return response.json(invoices);
    }
}

export { ShowInvoicesController }