var Person=require('./person')

const person1= new Person('artina','21','F','artina@gmail.com');

console.log(person1.introduce());

//Testimi metodave

const person2=new Person();
person2.setEmail('example@gmail.com');
console.log(person2.email)

const person3=new Person('artina');
console.log(person3.getEmri())