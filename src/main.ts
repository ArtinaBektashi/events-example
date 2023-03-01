function operationsNum(num1:number,num2:number) : {
    mbledhje:number,
    zbritje:number,
    shumezim:number,
    pjestim:number
} {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('both parameters must be numbers.');
      }

      const mbledhje=num1+num2;
      const zbritje=num1-num2;
      const shumezim=num1*num2;
      const pjestim=num1/num2

    return{
        mbledhje,zbritje,shumezim,pjestim
    };
}

console.log(operationsNum(3,4))