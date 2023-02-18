const express=require('express');
const EventEmmiter=require("events");

    const event=new EventEmmiter();
    // console.log(event);

   

    event.on('event',()=>{
        console.log('fire event');
      })
      event.on('secondevent',()=>{
        console.log('fire event');
      })

      event.emit('event');
      event.emit('secondevent');

      //eventNames - returns an array of all events emitted
      console.log(event.eventNames());
     
      //listenerCount - counts all the listeners of the event we send as parameter
      console.log(event.listenerCount('event'));

      //once - listens to the emitted event only once, if the emit is before the once, it will not show
      //on console because the event was already emitted
    event.once('some event',()=>{
        console.log("some event once");
    });

    event.emit('some event');

    //event off - e nal eventin e caktum

    const listener1= () =>{
        console.log('listener1')
    }

    const listener2= () =>{
        console.log('listener2')
    }

    event.on('event4',listener1);
    event.on('event4',listener2);

    event.emit('event4');
    event.off('event4',listener1);
    event.emit('event4');

    //prepend e thirr event listener te pare ne array apo eventa qe e perdor prepend listener thirret e para
    event.on('event5',()=>{
        console.log("Listener 1");
    })

    event.prependListener('event5',()=>{
        console.log("Listener 2");
    })
    event.emit('event5');