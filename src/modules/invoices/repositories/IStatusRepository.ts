import { Status } from "../infra/typeorm/entities/Status";

interface IStatusRepository {
    create(name: string, description: string): Promise<void>;
    show(): Promise<Status[]>;
    findById(id: number): Promise<Status>;
    findByName(name: string): Promise<Status>;
}

export { IStatusRepository }