import { AppError } from '@shared/errors/AppError';
import { IOrganizationsRepository } from '@modules/organizations/repositories/IOrganizationsRepository';
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
}

@injectable()
class CreateOrganizationUseCase {
    constructor(
        @inject("OrganizationsRepository")
        private organizationsRepository: IOrganizationsRepository
    ) { }

    async execute({ name }: IRequest): Promise<void> {
        const organizationAlreadyExists = await this.organizationsRepository.findByName(name);

        if (organizationAlreadyExists) {
            throw new AppError("Organization already exists!");
        }

        await this.organizationsRepository.create(
            name
        );
    }
}

export { CreateOrganizationUseCase }