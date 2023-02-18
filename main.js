const express=require('express');
const EventEmmiter=require("events");

    const event=new EventEmmiter();
    // console.log(event);

    //First request
    event.on('runEvent_1',()=>{
        console.log('Hello from events')
    })

    event.emit('runEvent_1');


    //Second request
    const obj={
        init:'Node',
        version: '18'
    }
   
    event.on('event2',(obj)=>{
        console.log(`objects from events ' ${JSON.stringify(obj)} `)
    })
    event.emit('event2',obj);

    //test event
    event.on('testEvent',()=>{
        console.log('only test')
    });
    event.removeAllListeners('testEvent');
    //Third request
   const events=  event.eventNames();
   console.log(events)

   console.log(event.getMaxListeners())

   events.forEach(eventNames =>{
    const count=event.listenerCount(eventNames);
    console.log("Total number of listeners"+`${eventNames} : ${count}`)
   })

   //Some changes


   //Pasi kemi  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; Te krijohet nje metod “getEvenNumbers” qe kthen vetem numrat qift. Te shfaqen ne eventin EvenEvent.
   const numbers =[1,2,3,4,5,6,7,8,9,10];

   function getEvenNumbers(numbers){
    return evens=numbers.filter((num) => num%2===0);
   }


   event.on('printedNr',()=>{
    console.log(getEvenNumbers(numbers));
   })
   event.emit('printedNr')

