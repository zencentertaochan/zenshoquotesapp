cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "pluginId": "com.phonegap.plugins.PushPlugin",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "id": "cordova-plugin-admobpro.AdMob",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
        "id": "cordova-plugin-email-composer.EmailComposer",
        "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
    },
    {
        "file": "plugins/cordova-plugin-email-composer/src/browser/EmailComposerProxy.js",
        "id": "cordova-plugin-email-composer.EmailComposerProxy",
        "pluginId": "cordova-plugin-email-composer",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-legacy-build-support/www/SQLitePlugin.js",
        "id": "cordova-sqlite-legacy-build-support.SQLitePlugin",
        "pluginId": "cordova-sqlite-legacy-build-support",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.PushPlugin": "2.5.0",
    "cordova-plugin-extension": "1.5.1",
    "cordova-plugin-admobpro": "2.26.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-email-composer": "0.8.3",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-x-socialsharing": "5.1.6",
    "cordova-plugin-splashscreen": "4.0.2-dev",
    "cordova-sqlite-legacy-build-support": "1.3.5-pre1"
}
// BOTTOM OF METADATA
});