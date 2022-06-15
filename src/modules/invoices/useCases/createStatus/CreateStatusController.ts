import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStatusUseCase } from "./CreateStatusUseCase";



class CreateStatusController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createStatusUseCase = container.resolve(CreateStatusUseCase);

        await createStatusUseCase.execute({
            name,
            description
        });

        return response.status(201).send();
    }
}

export { CreateStatusController }