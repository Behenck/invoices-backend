import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ShowStatusUseCase } from './ShowStatusUseCase';


class ShowStatusController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showStatusUseCase = container.resolve(ShowStatusUseCase);

        const status = await showStatusUseCase.execute();

        return response.json(status);
    }
}

export { ShowStatusController }