
require('./scripts/install-deps.js').install().then(() => {
    require('./scripts/dependencies.js').updateDependencies()
        .then(() => console.log("Done."))
        .catch((err) => console.error(err));
});