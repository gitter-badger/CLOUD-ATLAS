import appConfig from '../app.config.json';

interface IGlobalAppConfiguration {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  FACEBOOK_APP_ID: string;
  APPLE_APP_ID: string;
}

const getConfig = (): IGlobalAppConfiguration => {
  return appConfig as IGlobalAppConfiguration;
};

export default getConfig();
