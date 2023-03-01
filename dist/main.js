"use strict";
function operationsNum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('both parameters must be numbers.');
    }
    var mbledhje = num1 + num2;
    var zbritje = num1 - num2;
    var shumezim = num1 * num2;
    var pjestim = num1 / num2;
    return {
        mbledhje: mbledhje,
        zbritje: zbritje,
        shumezim: shumezim,
        pjestim: pjestim
    };
}
console.log(operationsNum(3, 4));
