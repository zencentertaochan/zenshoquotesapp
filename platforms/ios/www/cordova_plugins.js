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
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
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
        "id": "cordova-plugin-email-composer.EmailComposer",
        "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
        "pluginId": "cordova-plugin-email-composer",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
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
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
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
    "cordova-plugin-splashscreen": "4.0.2-dev",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-x-socialsharing": "5.1.6"
};
// BOTTOM OF METADATA
});