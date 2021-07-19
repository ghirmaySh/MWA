const child_process = require("child_process");
console.log("1:app start");
const myNewProcess = child_process.spawn("node", ["./fibonacci"],
    { stdio: "inherit" });
console.log("3: app is ending");