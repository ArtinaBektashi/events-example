const fs=require('fs');


const promise = new Promise((resolve,reject) =>{
    fs.writeFile('file.txt','Hello', (err) =>{
        if(err){
            reject(err);
        }else
            resolve();
        
    })
})

const promise2=new Promise((resolve,reject) =>{
    fs.readFile('file.txt','utf8',(err,data) => {
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
})

promise.then(() =>{
    console.log('File written');
}).catch(()=>{
    console.log("Error")
})

promise2.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
