import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ShowIssuersUseCase } from './ShowIssuersUseCase';


class ShowIssuersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showIssuersUseCase = container.resolve(ShowIssuersUseCase);

        const issuers = await showIssuersUseCase.execute();

        return response.json(issuers);
    }
}

export { ShowIssuersController }