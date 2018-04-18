const build = require('./scripts/build');

build.buildJS().then(() => {
    console.log("Done");
});
