import { inject, injectable } from "tsyringe";

import { IIssuersRepository } from '@modules/issuers/repositories/IIssuersRepository';
import { Issuer } from '@modules/issuers/infra/typeorm/entities/Issuer';

@injectable()
class ShowIssuersUseCase {
    constructor(
        @inject("IssuersRepository")
        private issuersRepository: IIssuersRepository
    ) { }

    async execute(): Promise<Issuer[]> {
        const issuers = await this.issuersRepository.show();

        return issuers;
    }
}

export { ShowIssuersUseCase }