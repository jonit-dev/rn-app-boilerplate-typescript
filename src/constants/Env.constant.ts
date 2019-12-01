export enum EnvironmentTypes {
  Production = "Production",
  Staging = "Staging",
  Development = "Development"
}

const ENV: string = EnvironmentTypes.Development; // set the current environment here

const defineServerUrl = () => {
  // Solution if fails to connect: https://stackoverflow.com/questions/33704130/react-native-android-fetch-failing-on-connection-to-local-api

  // You must use LAN on Expo developer tools settings, otherwise it won't map the docker container.

  switch (ENV) {
    case EnvironmentTypes.Development:
      return "http://localhost:3000";

    case EnvironmentTypes.Production:
      return "https://boilerplate.app:3000";

    case EnvironmentTypes.Staging:
      return "https://staging.boilerplate.app:3000";
  }
};

export const appEnv = {
  language: "eng",
  serverUrl: defineServerUrl() // current serverUrl
};
