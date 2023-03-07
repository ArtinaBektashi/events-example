import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import { Class } from "./entity/Class"
import { Details } from "./entity/Details"
import { Grading } from "./entity/Grading"
import { Person } from "./entity/Person"
import { Photo } from "./entity/Photo"
import { Question } from "./entity/Question"
import { Student } from "./entity/Student"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "sinan1706",
    database: "ffff",
    synchronize: true,
    logging: false,
    entities: [User,Category,Class,Details, Grading,Person,Photo,Question, Student],
    migrations: [],
    subscribers: [],
})
