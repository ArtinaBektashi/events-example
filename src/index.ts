import { AppDataSource  } from "./data-source"
import { Category } from "./entity/Category"
import { Class } from "./entity/Class"
import { Details } from "./entity/Details"
import { Grading } from "./entity/Grading"
import { Person } from "./entity/Person"
import { Photo } from "./entity/Photo"
import { Question } from "./entity/Question"
import { Student } from "./entity/Student"
import { User } from "./entity/User"



// Conn2.initialize().then( async () =>{
//     const conn = Conn2.manager;

//     const userRepo = await conn.getRepository(User);
//     console.log('Connect')

// }).catch(error => console.log(error))

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    const grade = new Grading()
    grade.firstName = "Artina"
    grade.age = 21
    grade.lastName = "Bektashi"
    grade.grade = 10
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25


    const user1 = new User()
    user1.firstName = "Timberss"
    user1.lastName = "Saw"
    user1.age = 25
    await AppDataSource.manager.save(user)
    await AppDataSource.manager.save(grade)
    console.log("Saved a new user with id: " + user.id)
    console.log("Saved a new user with id: " + grade.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    const grades = await AppDataSource.manager.find(Grading)
    console.log("Loaded grades: ", grades)

    const details = new Details()
    details.gender= 'F'
    await AppDataSource.manager.save(details)

    const student = new Student()
    student.name="Tringa"
    student.age =21 
    student.details = details

    await AppDataSource.manager.save(student)

    const students = await AppDataSource.manager.find(Student)
    console.log("Loaded students: ", students)


    const class1 = new Class()

    class1.name = "Class1"
    await AppDataSource.manager.save(class1)
    

    const category1 = new Category()
    category1.name= "animals"
    await AppDataSource.manager.save(category1)

    const category2 = new Category()
    category2.name= "zoo"
    await AppDataSource.manager.save(category2)

    const question1= new Question()
    question1.title = "questions"
    question1.categories = [category1,category2]

    await AppDataSource.manager.save(question1)

        const photo1 = new Photo()
        photo1.url = "me.jpg"
        await AppDataSource.manager.save(photo1)

        const photo2 = new Photo()
        photo2.url = "me-and-bears.jpg"
        await AppDataSource.manager.save(photo2)

        const person = new Person()
        person.name = "John"
        person.photos = [photo1, photo2]
        await AppDataSource.manager.save(person)
        const persons = await AppDataSource.manager.find(Person)
        console.log("Loaded students: ", persons)


    

            const conn = AppDataSource.manager;

            const userRepo = await conn.getRepository(User);
            const result = await userRepo.createQueryBuilder('user').select().getMany();
            console.log(result)





}).catch(error => console.log(error))
