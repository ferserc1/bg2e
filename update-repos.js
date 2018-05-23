let repoPath = 'engine';

const git = require('./scripts/git');

Promise.all([
        git.update('engine/bg2engine'),
        git.update('engine/bg2-model'),
        git.update('engine/bg2e-viewer'),
        git.update('engine/bg2e-vr'),
        git.update('engine/bg2e-js'),
        git.update('engine/bg2e-js-physics'),
        git.update('engine/bg2e-composer-js')
    ])
    .then(() => {
        console.log("Done");
    })