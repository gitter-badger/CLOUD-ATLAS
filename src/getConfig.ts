import jsonConfig from '../app.config.json';

interface IGlobalAppConfiguration {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  FACEBOOK_APP_ID: string;
  APPLE_APP_ID: string;

  app: {
    // https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html#.ConstructorOptions
    cesium: {
      animation: boolean;
      baseLayerPicker: boolean;
      fullscreenButton: boolean;
      vrButton: boolean;
      geocoder: boolean;
      homeButton: boolean;
      infoBox: boolean;
      sceneModePicker: boolean;
      selectionIndicator: boolean;
      timeline: boolean;
      navigationHelpButton: boolean;
    };
  };
}

const getConfig = (): IGlobalAppConfiguration => {
  return {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID as string,
    APPLE_APP_ID: process.env.APPLE_APP_ID as string,

    app: jsonConfig,
  };
};

export default getConfig();
