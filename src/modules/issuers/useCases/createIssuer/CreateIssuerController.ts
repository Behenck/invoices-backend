import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateIssuerUseCase } from "./CreateIssuerUseCase";



class CreateIssuerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createIssuerUseCase = container.resolve(CreateIssuerUseCase);

        await createIssuerUseCase.execute({
            name,
            description
        });

        return response.status(201).send();
    }
}

export { CreateIssuerController }