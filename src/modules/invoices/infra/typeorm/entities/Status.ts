import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("status")
class Status {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Status }