import { IStatusRepository } from '@modules/invoices/repositories/IStatusRepository';
import { Status } from "@modules/invoices/infra/typeorm/entities/Status";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowStatusUseCase {
    constructor(
        @inject("StatusRepository")
        private statusRepository: IStatusRepository
    ) { }

    async execute(): Promise<Status[]> {
        const status = await this.statusRepository.show();

        return status;
    }
}

export { ShowStatusUseCase }