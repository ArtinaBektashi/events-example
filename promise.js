const promise = new Promise((resolve,reject)=>{
    const i=1;
    if(i===1){
        resolve()
    } else{
        reject()
    }
});

//nese bohet resolve, kthehet functioni i then, nese bohet reject
//kthehet funksioni i catch
//perdoret per api's, me fetch te dhena

promise.then(() =>{
    console.log('Pass')
}).catch(()=>{
    console.log('Error')
})

