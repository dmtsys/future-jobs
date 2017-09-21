const jobGenerator = require('./src/jobGenerator');

module.exports = jobGenerator;

if (require.main === module) {
  for (var i = 0; i < 1000; i++) {
    const job = jobGenerator();
    console.log(job);
  }
}
