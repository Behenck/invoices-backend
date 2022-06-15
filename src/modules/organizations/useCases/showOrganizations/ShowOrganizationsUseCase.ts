import { IOrganizationsRepository } from '@modules/organizations/repositories/IOrganizationsRepository';
import { Organization } from "@modules/organizations/infra/typeorm/entities/Organization";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowOrganizationsUseCase {
    constructor(
        @inject("OrganizationsRepository")
        private organizationsRepository: IOrganizationsRepository
    ) { }

    async execute(): Promise<Organization[]> {
        const organizations = await this.organizationsRepository.show();

        return organizations;
    }
}

export { ShowOrganizationsUseCase }