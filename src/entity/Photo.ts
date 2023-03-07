import { Entity, PrimaryGeneratedColumn , Column, ManyToOne} from "typeorm";
import { Person } from "./Person";


@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    url:string

    @ManyToOne(() => Person, (person) => person.photos)
    person : Person
}