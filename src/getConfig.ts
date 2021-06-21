interface IGlobalAppConfiguration {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  FACEBOOK_APP_ID: string;
  APPLE_APP_ID: string;
}

const getConfig = (): IGlobalAppConfiguration => {
  return {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID as string,
    APPLE_APP_ID: process.env.APPLE_APP_ID as string,
  };
};

export default getConfig();
