import { AppError } from '@shared/errors/AppError';
import { IDepartmentsRepository } from '@modules/organizations/repositories/IDepartmentsRepository';
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
}

@injectable()
class CreateDepartmentUseCase {
    constructor(
        @inject("DepartmentsRepository")
        private departmentsRepository: IDepartmentsRepository
    ) {}

    async execute({ name }: IRequest): Promise<void> {
        const departmentAlreadyExists = await this.departmentsRepository.findByName(name);

        if (departmentAlreadyExists) {
            throw new AppError("Department already exists!");
        }

        await this.departmentsRepository.create(
            name
        );
    }
}

export { CreateDepartmentUseCase }