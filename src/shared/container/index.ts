import { container } from "tsyringe";

import { IDepartmentsRepository } from '@modules/organizations/repositories/IDepartmentsRepository';
import { DepartmentsRepository } from '@modules/organizations/infra/typeorm/repositories/DepartmentsRepository';

container.registerSingleton<IDepartmentsRepository>(
    "DepartmentsRepository",
    DepartmentsRepository
);