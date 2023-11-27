import "dotenv/config";

const apiKey = process.env.API_KEY;

export default {
  expo: {
    name: "CineInfo",
    slug: "CineInfo",
    version: "1.0.0",
    orientation: "portrait",
    // TODO: TROCAR ICONE DO APP
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      // TODO: TROCAR IMAGEM AO ABRIR O APP
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
        // TODO: TROCAR IMAGEM AO ABRIR O APP (no android é diferente)
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
        projectId: "edfb178e-06e1-409d-a045-4839a35e29d3"
      },
      apiUrl: process.env.API_URL ?? 'https://api.themoviedb.org/3',
      apiKey: apiKey,
      // TODO: Fix api key
    }
  }
};
