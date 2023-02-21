var os= require('os');


//kthen info mbi CPU architecture
console.log(os.arch());

//kthen array object info mbi secilen logical cpu core 
console.log(os.cpus())

//byte order te data
console.log(os.endianness())

//kthen host name
console.log(os.hostname())

//kthen info mbi current user
console.log(os.userInfo())

//kthen matjen e system activity nga OS, e windows eshte [0,0,0] , number of threads running or waiting - unix concept,
//windows doesnt calculate load average 
console.log(os.loadavg())

//kthen sa memorie te lir kemi
console.log(os.freemem())

//kthen prioritetin e proceseve
console.log(os.getPriority(0))


// kthen network interfaces qe kan network address
console.log(os.networkInterfaces())