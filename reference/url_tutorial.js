const url = require('url');

const myUrl = new URL('http://aleksanderurbanowicz.com');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host
console.log(myUrl.host);
//Without port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
myUrl.searchParams.append('a','1');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name)=> console.log(`${name} : ${value}`));
