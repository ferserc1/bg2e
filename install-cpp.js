
require('./scripts/install-deps.js').install()
    .then(() => {
        return require('./scripts/dependencies').updateDependencies();
    })

    .then(() => {
        const git = require('./scripts/git');
        
        return Promise.all([
            git.clone('https://bitbucket.org/ferserc1/bg2engine.git','engine/bg2engine'),
            git.clone('https://bitbucket.org/ferserc1/bg2-model.git','engine/bg2-model'),
            git.clone('https://bitbucket.org/ferserc1/bg2e-viewer.git','engine/bg2e-viewer'),
            git.clone('https://bitbucket.org/ferserc1/bg2e-vr.git','engine/bg2e-vr')
        ]);
    })

    .then(() => {
        console.log("Done");
    });
