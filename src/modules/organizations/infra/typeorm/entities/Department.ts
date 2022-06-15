import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("departments")
class Department {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Department }