import { getRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { IStatusRepository } from "@modules/invoices/repositories/IStatusRepository";
import { Status } from '../entities/Status';



class StatusRepository implements IStatusRepository {
    private repository: Repository<Status>

    constructor() {
        this.repository = getRepository(Status);
    }

    async create(name: string, description: string): Promise<void> {
        const status = this.repository.create({
            name,
            description
        });

        await this.repository.save(status);
    }

    async show(): Promise<Status[]> {
        const status = await this.repository.find();
        return status;
    }

    async findById(id: number): Promise<Status> {
        const status = await this.repository.findOne(id);
        return status;
    }

    async findByName(name: string): Promise<Status> {
        const status = await this.repository.findOne({
            name
        });
        return status;
    }
}

export { StatusRepository }