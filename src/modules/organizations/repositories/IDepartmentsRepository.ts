import { Department } from "../infra/typeorm/entities/Department";

interface IDepartmentsRepository {
    create(name: string): Promise<void>;
    show(): Promise<Department[]>;
    findByName(name: string): Promise<Department>;
}

export { IDepartmentsRepository }