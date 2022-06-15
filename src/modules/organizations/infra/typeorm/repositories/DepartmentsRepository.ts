import { IDepartmentsRepository } from "@modules/organizations/repositories/IDepartmentsRepository";
import { getRepository, Repository } from "typeorm";
import { Department } from "../entities/Department";


class DepartmentsRepository implements IDepartmentsRepository {
    private repository: Repository<Department>;

    constructor() {
        this.repository = getRepository(Department);
    }

    async create(name: string): Promise<void> {
        const department = this.repository.create({
            name
        });

        await this.repository.save(department);
    }

    async show(): Promise<Department[]> {
        const department = await this.repository.find();
        return department;
    }
}

export { DepartmentsRepository }