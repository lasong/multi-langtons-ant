langtonant = require('./langtonant');

const fileName = process.argv.slice(2)[0] || 'startingConditions.json';
const iterations = Number(process.argv.slice(3)[0]) || 10;
const verbose = Boolean(process.argv.slice(4)[0]) || false;
langtonant.run(fileName, iterations, verbose);
