import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("invoice_documents")
class InvoiceDocuments {

    @PrimaryColumn()
    id: string;

    @Column()
    invoice_id: string;

    @Column()
    invoice_number: number;

    @Column()
    invoice_name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { InvoiceDocuments }