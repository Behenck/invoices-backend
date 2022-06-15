import { Department } from "../infra/typeorm/entities/Department";

interface IDepartmentsRepository {
    create(name: string): Promise<void>;
    show(): Promise<Department[]>
}

export { IDepartmentsRepository }