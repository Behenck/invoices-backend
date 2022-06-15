import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInvoices1655240515978 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "invoices",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "department_id",
                        type: "uuid",
                    },
                    {
                        name: "issuer_id",
                        type: "uuid",
                    },
                    {
                        name: "organization_id",
                        type: "uuid",
                    },
                    {
                        name: "amount",
                        type: "decimal",
                    },
                    {
                        name: "due_date",
                        type: "timestamp",
                    },
                    {
                        name: "payment_date",
                        type: "timestamp",
                    },
                    {
                        name: "launch_date",
                        type: "timestamp",
                    },
                    {
                        name: "competence_month",
                        type: "numeric",
                    },
                    {
                        name: "competence_year",
                        type: "numeric",
                    },
                    {
                        name: "status_id",
                        type: "numeric",
                    },
                    {
                        name: "invoice_numeric",
                        type: "numeric",
                    },
                    {
                        name: "invoice_name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("invoices");
    }

}