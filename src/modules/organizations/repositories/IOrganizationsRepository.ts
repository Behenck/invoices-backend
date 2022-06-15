import { Organization } from "../infra/typeorm/entities/Organization";

interface IOrganizationsRepository {
    create(name: string): Promise<void>;
    show(): Promise<Organization[]>;
    findByName(name: string): Promise<Organization>;
}

export { IOrganizationsRepository }