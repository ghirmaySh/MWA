const fib_process = require("child_process")

console.log("1:app start");
const myNewProcess = child_process.spawn("node", ["./fibonacci"],
    { stdio: "inherit" });
console.log("3: app is ending");


function myPromise(){
    return new Promise((req,res)=>{
        const fib = fib_process.exe("fibonacci.js");
    });
 };

myPromise().then(message).catch(function(err){
    console.log("message",messsage);
    console.log("Error",err)
});


