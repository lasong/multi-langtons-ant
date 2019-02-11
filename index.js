langtonant = require('./langtonant');

const iterations = Number(process.argv.slice(2)[0]) || 10;
const verbose = Boolean(process.argv.slice(3)[0]) || false;
langtonant.run('startingConditions.json', iterations, verbose);
