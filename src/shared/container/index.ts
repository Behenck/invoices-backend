import { container } from "tsyringe";

import { IDepartmentsRepository } from '@modules/organizations/repositories/IDepartmentsRepository';
import { DepartmentsRepository } from '@modules/organizations/infra/typeorm/repositories/DepartmentsRepository';

import { IOrganizationsRepository } from '@modules/organizations/repositories/IOrganizationsRepository';
import { OrganizationsRepository } from '@modules/organizations/infra/typeorm/repositories/OrganizationsRepository';

import { IIssuersRepository } from '@modules/issuers/repositories/IIssuersRepository';
import { IssuersRepository } from '@modules/issuers/infra/typeorm/repositories/IssuersRepository';

import { IStatusRepository } from '@modules/invoices/repositories/IStatusRepository';
import { StatusRepository } from '@modules/invoices/infra/typeorm/repositories/StatusRepository';

import { IInvoicesRepository } from '@modules/invoices/repositories/IInvoicesRepository';
import { InvoicesRepository } from '@modules/invoices/infra/typeorm/repositories/InvoicesRepository';

container.registerSingleton<IDepartmentsRepository>(
    "DepartmentsRepository",
    DepartmentsRepository
);

container.registerSingleton<IOrganizationsRepository>(
    "OrganizationsRepository",
    OrganizationsRepository
);

container.registerSingleton<IIssuersRepository>(
    "IssuersRepository",
    IssuersRepository
);

container.registerSingleton<IStatusRepository>(
    "StatusRepository",
    StatusRepository
);

container.registerSingleton<IInvoicesRepository>(
    "InvoicesRepository",
    InvoicesRepository
);