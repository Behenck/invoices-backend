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
                        isNullable: true
                    },
                    {
                        name: "launch_date",
                        type: "timestamp",
                        isNullable: true
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
                        name: "description",
                        type: "varchar",
                        isNullable: true
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
                ],
                foreignKeys: [
                    {
                        name: "FKInvoiceDepartment",
                        referencedTableName: "departments",
                        referencedColumnNames: ["id"],
                        columnNames: ["department_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKInvoiceIssuer",
                        referencedTableName: "issuers",
                        referencedColumnNames: ["id"],
                        columnNames: ["issuer_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKInvoiceOrganization",
                        referencedTableName: "organizations",
                        referencedColumnNames: ["id"],
                        columnNames: ["organization_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKInvoiceStatus",
                        referencedTableName: "status",
                        referencedColumnNames: ["id"],
                        columnNames: ["status_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("invoices");
    }

}