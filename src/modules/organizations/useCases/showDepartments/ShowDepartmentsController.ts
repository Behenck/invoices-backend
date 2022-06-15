import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ShowDepartmentsUseCase } from './ShowDepartmentsUseCase';


class ShowDepartmentsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showDepartmentsUseCase = container.resolve(ShowDepartmentsUseCase);

        const departments = await showDepartmentsUseCase.execute();

        return response.json(departments);
    }
}

export { ShowDepartmentsController }