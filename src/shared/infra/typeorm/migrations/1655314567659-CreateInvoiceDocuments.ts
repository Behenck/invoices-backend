import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInvoiceDocuments1655314567659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "invoice_documents",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "invoice_id",
                        type: "uuid"
                    },
                    {
                        name: "invoice_number",
                        type: "numeric"
                    },
                    {
                        name: "invoice_name",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKInvoiceDocuments",
                        referencedTableName: "invoices",
                        referencedColumnNames: ["id"],
                        columnNames: ["invoice_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("invoice_documents")
    }

}
