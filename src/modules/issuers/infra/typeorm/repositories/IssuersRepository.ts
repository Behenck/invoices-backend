import { IIssuersRepository } from "@modules/issuers/repositories/IIssuersRepository";
import { getRepository, Repository } from "typeorm";
import { Issuer } from "../entities/Issuer";


class IssuersRepository implements IIssuersRepository {
    private repository: Repository<Issuer>;

    constructor() {
        this.repository = getRepository(Issuer);
    }

    async create(name: string, description): Promise<void> {
        const issuers = this.repository.create({
            name,
            description
        });

        await this.repository.save(issuers);
    }

    async show(): Promise<Issuer[]> {
        const issuers = await this.repository.find();
        return issuers;
    }

    async findByName(name: string): Promise<Issuer> {
        const issuers = await this.repository.findOne({
            name
        });

        return issuers;
    }

}

export { IssuersRepository }