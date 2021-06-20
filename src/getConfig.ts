import appConfig from '../app.config.json';

interface IGlobalAppConfiguration {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
}

const getConfig = (): IGlobalAppConfiguration => {
  return appConfig as IGlobalAppConfiguration;
};

export default getConfig();
