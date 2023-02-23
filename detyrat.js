const fs=require('fs');




function writeFile(path,data){
    return new Promise((resolve,reject) => {
        fs.writeFile(path,data, (err)=> {
            if(err){
                reject(err);
            }else{
                resolve('Written');
            }
        })
    })
}

function readFile(path){
    return new Promise((resolve,reject) => {
        fs.readFileSync(path,'utf8', (data,err) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

writeFile('file.txt','Hello World').then((result) =>{
    console.log(result);
    return readFile('file.txt');
}).then((data) =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})

