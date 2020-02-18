const Logger = require('./logger');

const logger = new Logger().getInstance();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    logger.log(`Nueva Persona: ${name} tiene ${age} años`);
  }
}

module.exports = Person;
