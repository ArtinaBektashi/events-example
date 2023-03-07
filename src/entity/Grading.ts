import { Entity , PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "./User";

@Entity()
export class Grading extends User{
    
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    grade:number
    
}