

const { exec } = require('child_process');

function execCmd(cmd) {
    console.log("Executing: " + cmd);
    return new Promise((resolve,reject) => {
        exec(cmd, (err,stdout,stderr) => {
            if (err) {
                reject(err);
            }
            else {
                console.log(cmd + ": done");
                resolve();
            }
        });
    })
}

module.exports = {
    clone: function(cloneUrl,dest) {
        return execCmd(`git clone ${ cloneUrl } ${ dest }`);
    }
}