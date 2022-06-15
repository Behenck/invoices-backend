import { Status } from '@modules/invoices/infra/typeorm/entities/Status';
import { Organization } from '@modules/organizations/infra/typeorm/entities/Organization';
import { Issuer } from '@modules/issuers/infra/typeorm/entities/Issuer';
import { Department } from '@modules/organizations/infra/typeorm/entities/Department';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuidV4 } from 'uuid';

@Entity("invoices")
class Invoice {

    @PrimaryColumn()
    id: string;

    @OneToOne(() => Department)
    @JoinColumn({ name: "department_id" })
    department: Department;

    @Column()
    department_id: string;

    @OneToOne(() => Issuer)
    @JoinColumn({ name: "issuer_id" })
    issuer: Issuer;

    @Column()
    issuer_id: string;

    @OneToOne(() => Organization)
    @JoinColumn({ name: "organization_id" })
    organization: Organization;

    @Column()
    organization_id: string;

    @Column()
    amount: number;

    @Column()
    due_date: Date;

    @Column()
    payment_date: Date;

    @Column()
    launch_date: Date;

    @Column()
    competence_month: number;

    @Column()
    competence_year: number;

    @OneToOne(() => Status)
    @JoinColumn({ name: "status_id" })
    status: Status;

    @Column()
    status_id: number;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Invoice }