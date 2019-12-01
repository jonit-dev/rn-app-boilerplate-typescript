export const appEnv = {
  language: "eng",
  // Solution if fails to connect: https://stackoverflow.com/questions/33704130/react-native-android-fetch-failing-on-connection-to-local-api
  serverUrl: "http://localhost:3000" // You must use LAN on Expo developer tools settings, otherwise it won't map the docker container.
};
