const sumAll = function(a, b) {
    if(a<0 || b<0){
        return 'ERROR';
    }
    else if(!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }

    if (a > b){
        let c = b;
        b=a;
        a=c;
    }

    let sum = 0;
    for ( let i = a; i<=b; i++){
        sum += i;
    }
    return sum;

};

console.log(sumAll([3],1))
// Do not edit below this line
module.exports = sumAll;
