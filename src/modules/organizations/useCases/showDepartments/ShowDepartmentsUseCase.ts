import { IDepartmentsRepository } from '@modules/organizations/repositories/IDepartmentsRepository';
import { Department } from "@modules/organizations/infra/typeorm/entities/Department";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowDepartmentsUseCase {
    constructor(
        @inject("DepartmentsRepository")
        private departmentsRepository: IDepartmentsRepository
    ) { }

    async execute(): Promise<Department[]> {
        const departments = await this.departmentsRepository.show();

        return departments;
    }
}

export { ShowDepartmentsUseCase }