const download = require("./download.js");
const path = require("path");

module.exports = {
    updateDependencies: function() {
        let downloadServer = 'vps396347.ovh.net';
        let dependencies = 'dependencies'

        let dependencyFiles = [
            { url:`http://${ downloadServer }/${ dependencies }/bullet-android-ios-macos-winVS2015-winVS2017.zip`, dest:"bullet" },
            { url:`http://${ downloadServer }/${ dependencies }/lua-macOS-iOS-winVS2015-winVS2017-src.zip`, dest:"lua" },
            { url:`http://${ downloadServer }/${ dependencies }/openal-android-winVS2015-winVS2017.zip`, dest:"openal" }
        ];

        let dependencyDir = path.join(__dirname,'../engine');

        return download.downloadFiles(dependencyFiles,dependencyDir);
    }
}