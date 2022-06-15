import { IOrganizationsRepository } from "@modules/organizations/repositories/IOrganizationsRepository";
import { getRepository, Repository } from "typeorm";
import { Organization } from "../entities/Organization";


class OrganizationsRepository implements IOrganizationsRepository {
    private repository: Repository<Organization>;

    constructor() {
        this.repository = getRepository(Organization);
    }

    async create(name: string): Promise<void> {
        const organization = this.repository.create({
            name
        });

        await this.repository.save(organization);
    }

    async show(): Promise<Organization[]> {
        const organization = await this.repository.find();
        return organization;
    }
}

export { OrganizationsRepository }