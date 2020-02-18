const Logger = require('./logger');
const Person = require('./person');

const logger = new Logger().getInstance();

logger.log('Empezando la aplicación');

const mario = new Person('Mario', 22);
const jorge = new Person('Jorge', 33);

logger.log('Finalizando la aplicación');

console.log(`${logger.count} logs en total`);
logger.logs.map(log => console.log(`-- ${log.message}`));
