// Learn more https://docs.expo.io/guides/customizing-metro
const { withNativeWind } = require('nativewind/metro');
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });
