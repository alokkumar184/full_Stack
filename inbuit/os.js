let os=require('os')
console.log(os.platform()) ///platfrom

console.log(os.arch());///architecture 
console.log(os.cpus().length, "core");/// length of core
console.log(os.freemem()); // memory 
console.log(os.hostname())  // hostname
console.log(os.uptime()) // uptime