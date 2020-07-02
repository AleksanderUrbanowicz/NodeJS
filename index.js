//This is commmonJS, import would be ES6, not implemented in node yet
const Person = require('./person'); 
const Logger = require('./logger');

const person1 = new Person('John Doe',30);
person1.greeting();

const logger = new Logger();

logger.on('message', (data) => console.log('Called listener:', data ));
logger.log('msg argument');