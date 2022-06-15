import { AppError } from '@shared/errors/AppError';
import { IIssuersRepository } from '@modules/issuers/repositories/IIssuersRepository';
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateIssuerUseCase {
    constructor(
        @inject("IssuersRepository")
        private issuersRepository: IIssuersRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const issuerAlreadyExists = await this.issuersRepository.findByName(name);

        if (issuerAlreadyExists) {
            throw new AppError("Issuer already exists!");
        }

        await this.issuersRepository.create(
            name,
            description
        );
    }
}

export { CreateIssuerUseCase }