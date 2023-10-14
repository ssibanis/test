const add = (a,b) => {
    
    let c = a+b;
    console.log("Sum is: ",c);
    return c;
}

const sub = (a,b) => {
    
    let c = a+b;
    console.log("substraction is: ",c);
    return c;
}
var coreLibrary = {add,sub};


exports.coreLibrary = coreLibrary;
