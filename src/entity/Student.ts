import { Entity ,PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Details } from "./Details";

@Entity()
export class Student {
    @PrimaryGeneratedColumn() 
    id:number

    @Column("varchar", {length:50})
    name:string

    @Column()
    age:number

    @OneToOne(() => Details)
    @JoinColumn()
    details : Details
}