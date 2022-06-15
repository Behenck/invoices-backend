import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ShowOrganizationsUseCase } from './ShowOrganizationsUseCase';


class ShowOrganizationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showOrganizationsUseCase = container.resolve(ShowOrganizationsUseCase);

        const organizations = await showOrganizationsUseCase.execute();

        return response.json(organizations);
    }
}

export { ShowOrganizationsController }