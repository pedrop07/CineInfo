import "dotenv/config";

const apiKey = process.env.API_KEY;

export default {
  expo: {
    name: "CineInfo",
    slug: "CineInfo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.unifor.CineInfo"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "com.unifor.CineInfo"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "dc2bd1cf-033c-4485-9bc1-b3e6fd4539b6"
      },
      apiUrl: process.env.API_URL ?? 'https://api.themoviedb.org/3',
      apiKey: apiKey,
      // TODO: Fix api key
    }
  }
};
