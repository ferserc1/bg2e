
require('./scripts/install-deps.js').install().then(() => {
    const download = require("./scripts/download.js");
    const path = require("path");

    let downloadServer = 'vps396347.ovh.net';
    let dependencies = 'dependencies'

    let dependencyFiles = [
        { url:`http://${ downloadServer }/${ dependencies }/bullet-android-ios-macos-winVS2015-winVS2017.zip`, dest:"bullet" },
        { url:`http://${ downloadServer }/${ dependencies }/lua-macOS-iOS-winVS2015-winVS2017-src.zip`, dest:"lua" },
        { url:`http://${ downloadServer }/${ dependencies }/openal-android-winVS2015-winVS2017.zip`, dest:"openal" }
    ];

    let dependencyDir = path.join(__dirname,'deps');

    download.downloadFiles(dependencyFiles,dependencyDir)
        .then(() => console.log("Done."))
        .catch((err) => console.error(err.message));
});