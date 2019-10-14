
require('./scripts/install-deps.js').install()
    .then(() => {
        return require('./scripts/dependencies').updateDependencies();
    })

    .then(() => {
        const git = require('./scripts/git');
        
        return Promise.all([
            git.clone('https://bitbucket.org/ferserc1/bg2engine.git','engine/bg2engine'),
            git.clone('https://bitbucket.org/ferserc1/bg2-model.git','engine/bg2-model'),
            git.clone('https://bitbucket.org/ferserc1/fbx2json.git','engine/fbx2json'),
            git.clone('https://bitbucket.org/ferserc1/bg2e-viewer.git','engine/bg2e-viewer'),
            git.clone('https://bitbucket.org/ferserc1/bg2e-vr.git','engine/bg2e-vr'),
            git.clone('https://bitbucket.org/ferserc1/raytracer.git','engine/raytracer'),
            git.clone('https://bitbucket.org/ferserc1/bg2e-js.git','engine/bg2e-js'),
            git.clone('https://bitbucket.org/ferserc1/bg2e-js-physics.git','engine/bg2e-js-physics'),
            git.clone('https://github.com/ferserc1/bg2e-js-voxel.git','engine/bg2e-js-voxel'),
            git.clone('https://github.com/ferserc1/bg2e-composer-js.git','engine/bg2e-composer-js')
        ]);
    })

    .then(() => {
        console.log("Done");
    });
