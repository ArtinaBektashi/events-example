const express = require('express')
const Person =require('./Person')

const server = express();

server.use(express.json()); 

let people = [new Person(1,"Tina",21), new Person(2,"Tringa",21),new Person(3,"Lednrit",26)]

//Read
server.get('/people', (req, res) => {
    res.json(people);
  });

//Get by id
  server.get('/people', (req, res) => {
    const id = parseInt(req.query.id);
    if(id<0){
        res.status(400).json({ error: "Invalid ID" });
    }else{
    const person = people.find(p => p.id === id);
    if(person){
      res.json(person);
    }else{
        res.status(404).json({ error: "Person not found" });
        }
    }
  });


  //Create
  server.post('/people',(req,res) =>{
    const {name, age } =req.body;
    if (typeof name !== 'string') {
        return res.status(400).json({ error: 'Name must be a string' });
      }
      if (typeof age !== 'number' || age < 1) {
        return res.status(400).json({ error: 'Age must be a number greater than 0' });
      }
    const id = people.length +1;
    const person= new Person(id,name,age);
    people.push(person);
    res.json(person);
  })

    //Delete
    server.delete("/people/:id", (req, res) => {
        const id = parseInt(req.params.id);
        if(id<0){
            res.status(400).json({ error: "Invalid ID" });
        }
        const index = people.findIndex(p => p.id === id);
        people.splice(index, 1);
    
        return res.send();
    });

    //Update
    server.put("/people/:id", (req, res) => {
        const { name,age } = req.body;
        const id = parseInt(req.params.id);
        if (index < 0) {
            return res.status(404).json({ error: 'Person not found' });
          }
        if (typeof name !== 'string') {
            return res.status(400).json({ error: 'Name must be a string' });
          }
          if (typeof age !== 'number' || age < 1) {
            return res.status(400).json({ error: 'Age must be a number greater than 0' });
          }
      
        const person = people.find(p => p.id === id);
      
        person.name=name;
        person.age=age;
      
        return res.json(person);
      });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });