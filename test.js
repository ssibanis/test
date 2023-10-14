const {coreLibrary} = require("./index");


const result= coreLibrary.add(1,2);
const r1= coreLibrary.sub(1,2);


if(result === 3){
    console.log("Test pass");
    

}
else{
    console.log("Test fail");
}


if(r1 === -1){
    console.log("Test pass");
   

}
else{
    console.log("Test fail");
}