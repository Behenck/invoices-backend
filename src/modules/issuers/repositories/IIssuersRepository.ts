import { Issuer } from "../infra/typeorm/entities/Issuer";


interface IIssuersRepository {
    create(name: string, description: string): Promise<void>;
    show(): Promise<Issuer[]>;
    findByName(name: string): Promise<Issuer>;
}

export { IIssuersRepository }