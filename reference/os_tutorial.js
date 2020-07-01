const os = require('os');

//Platform
console.log(os.platform());

//CPU
console.log(os.arch());
console.log(os.cpus());

//Memory
console.log(os.freemem() +'/'+ os.totalmem());

//Env
console.log(os.homedir());

//Uptime
console.log(os.uptime())
