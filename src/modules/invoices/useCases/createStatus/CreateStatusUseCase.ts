import { AppError } from '@shared/errors/AppError';
import { IStatusRepository } from '@modules/invoices/repositories/IStatusRepository';
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateStatusUseCase {
    constructor(
        @inject("StatusRepository")
        private statusRepository: IStatusRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const statusAlreadyExists = await this.statusRepository.findByName(name);

        if (statusAlreadyExists) {
            throw new AppError("Status already exists!");
        }

        await this.statusRepository.create(
            name,
            description
        );
    }
}

export { CreateStatusUseCase }