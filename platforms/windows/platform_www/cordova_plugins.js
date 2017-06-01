cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "pluginId": "com.phonegap.plugins.PushPlugin",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "id": "com.phonegap.plugins.PushPlugin.PushPlugin",
        "file": "plugins/com.phonegap.plugins.PushPlugin/src/windows/PushPluginProxy.js",
        "pluginId": "com.phonegap.plugins.PushPlugin",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-device.DeviceProxy",
        "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
        "pluginId": "cordova-plugin-device",
        "merges": [
            ""
        ]
    },
    {
        "id": "cordova-plugin-email-composer.EmailComposer",
        "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
        "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
    },
    {
        "id": "cordova-plugin-email-composer.EmailComposerProxy",
        "file": "plugins/cordova-plugin-email-composer/src/windows/EmailComposerProxy.js",
        "pluginId": "cordova-plugin-email-composer",
        "runs": true
    },
    {
        "id": "cordova-plugin-email-composer.EmailComposerProxyImpl",
        "file": "plugins/cordova-plugin-email-composer/src/windows/EmailComposerProxyImpl.js",
        "pluginId": "cordova-plugin-email-composer",
        "runs": true
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "file": "plugins/cordova-plugin-splashscreen/www/windows/SplashScreenProxy.js",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharingProxy",
        "file": "plugins/cordova-plugin-x-socialsharing/src/windows/SocialSharingProxy.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "runs": true
    },
    {
        "id": "cordova-sqlite-legacy-build-support.SQLitePlugin",
        "file": "plugins/cordova-sqlite-legacy-build-support/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-legacy-build-support",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "id": "cordova-sqlite-legacy-build-support.SQLiteProxy",
        "file": "plugins/cordova-sqlite-legacy-build-support/src/windows/sqlite-proxy.js",
        "pluginId": "cordova-sqlite-legacy-build-support",
        "runs": true
    },
    {
        "id": "cordova-sqlite-legacy-build-support.SQLite3",
        "file": "plugins/cordova-sqlite-legacy-build-support/src/windows/SQLite3-Win-RT/SQLite3JS/js/SQLite3.js",
        "pluginId": "cordova-sqlite-legacy-build-support",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.PushPlugin": "2.5.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-email-composer": "0.8.3",
    "cordova-plugin-splashscreen": "4.0.2-dev",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-x-socialsharing": "5.1.6",
    "cordova-sqlite-legacy-build-support": "1.3.5-pre1"
};
// BOTTOM OF METADATA
});