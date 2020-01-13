# React Native Boilerplate App

**Description**: This open source project was created to avoid waste of time with common functionalities that most of the apps should have. That way, you can focus on what really matters: your business logic. It's ideally for startups or projects that aim to scale after some development time.

**UI Kit**

This boilerplate theme is inspired on [Waplants Plants UI theme](https://www.uistore.design/items/waplant-plants-mobile-apps-free-ui-kit/) (Free for commercial use)

**Server-side**

- This React native boilerplate is meant to be used together with our [NodeJS boilerplate server](https://github.com/jonit-dev/node-express-boilerplate-app)

**Features**

- Custom components
- React Native Papers
- Organized project structure
- Account creation / login
- Navigation
- Typescript
- TSLint

**Rebranding checklist**

You should do the following to customize your app to your needs:

1. Edit app.json (especially your app name, slug, and ios and android bundle/package names, also the configurations for google signIn)
2. Edit src/constants/Env.constant.ts
   - Set your environment there and change your urls
3. Change your app logo and splash screen's image unser src/assets
4. Customize your UI under src/constants/UI ts files
5. Customize your translation files under src/languages
6. Setup your push notifications
   - Check: https://docs.expo.io/versions/latest/guides/push-notifications/
   - and also FCM for Android: https://docs.expo.io/versions/latest/guides/using-fcm/
7. Firebase: Download the GoogleService-info.plist (iOS) & the google-services.json (Android). Move them to your Expo project.

**Common issues & How to solve**

- Could'nt get GCM token for device:
  - Follow this approach: https://stackoverflow.com/questions/53946199/how-to-fix-expo-push-notifications-error-couldnt-get-gcm-token-for-device?rq=1
  - TDLR: Disconnect the device from USB, stop expo, login to expo, connect and try again.

- Loading screen eternal loop: 
  - yarn start
  - then press shift + r to force a cache clear upon expo reload

**Technology stack**:

- React Native, Expo
- Redux, Redux-thunk
- Typescript, TSLint
- Axios

## Project management

- If you want to contribute, check our the tasks that are being done at [Our trello board](https://trello.com/b/PW9Eah9Q/app-boilerplates) and send an e-mail to joaopaulofurtado@live.com to be added into our project

## Pre-requisites

You should get the following up and running to start working on the project:

1. [Expo](https://docs.expo.io/versions/latest/get-started/installation/)

2. Install our project packages

```
yarn install
```

**Screenshot**:

![](https://i.ibb.co/yP7LYj9/3ed94769-ffcd-463d-8c5e-49b08bf9e5b3.jpg)

## Support

Please [open an issue](https://github.com/jonit-dev/node-express-boilerplate-app/issues) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/jonit-dev/node-express-boilerplate-app/pulls).
