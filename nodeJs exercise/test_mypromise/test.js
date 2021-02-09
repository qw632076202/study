var promisesAplusTests = require("promises-aplus-tests");
var MyPromise = require('./myPromise1')

promisesAplusTests(MyPromise, function (err) {
    // All done; output is in the console. Or check `err` for number of failures.
});