const removeFromArray = function(list, ...args) {
    for (let arg of args){
        for (let i = 0; i<list.length; i++){
            if (list[i] === arg){
                list.splice(i,1);
            }
        }     
    }

    return list;
};


console.log(removeFromArray([1, 2, 3], "1", 3))


// Do not edit below this line
module.exports = removeFromArray;
