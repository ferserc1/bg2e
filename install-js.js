
const git = require('./scripts/git');

Promise.all([
        git.clone('https://bitbucket.org/ferserc1/bg2e-js.git','engine/bg2e-js'),
        git.clone('https://bitbucket.org/ferserc1/bg2e-js-physics.git','engine/bg2e-js-physics'),
        git.clone('https://bitbucket.org/ferserc1/bg2e-composer-js.git','engine/bg2e-composer-js'),
        git.clone('https://github.com/ferserc1/bg2e-js-voxel.git','engine/bg2e-js-voxel')
    ])
    .then(() => {
        console.log("Done")
    });