import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrganizationUseCase } from "./CreateOrganizationUseCase";



class CreateOrganizationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const createOrganizationUseCase = container.resolve(CreateOrganizationUseCase);

        await createOrganizationUseCase.execute({
            name
        });

        return response.status(201).send();
    }
}

export { CreateOrganizationController }