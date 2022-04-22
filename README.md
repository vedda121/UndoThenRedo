# Undo Then Redo App

## About

I used Expo, which is an open-source platform built around react native, to create this app.
The application also uses Accelerometer from expo-sensors, which helps us facilitate undo/redo functionality.

## Prerequisites

1. Install the latest version of Node.js [Node.js LTS release](https://nodejs.org/en/)

2. Recommended Editors

   - [VSCode Editor](https://code.visualstudio.com/download)
   - [Atom](https://atom.io/)

3. Expo Go App for iOS & Android
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)

## How to deploy this application

1. Clone or Download this repository.
2. Open it up an editor.(I use VS Code)
3. Move to the root folder - UndoThenRedo. Make sure this folder contains App.js and package.json files.
4. Open the terminal once you're in the root folder.
5. Run `npm i` to install all the dependencies.
6. Run `npm run start` to run the application. This should start the project
7. Once this is done, you can click the link - "http://localhost:19002" (Port number might be different).
8. Once you're on this page, you've several options to emulate on. To run it on the Expo Go app, change the CONNECTION to tunnel. Open the app and then scan the QR code. This should run the application through your Expo Go app.

## How to Undo/Redo

- Tilt phone left to undo text.
- Tilt phone right to redo text.

## Video demo

[Video Demo](video-demo/UndoThenRedo-working.mp4)

## References

- [Expo](https://docs.expo.dev/)
- [Expo Sensor Accelerometer](https://docs.expo.dev/versions/v44.0.0/sdk/accelerometer/)

## Quick Troubleshooting

-If you run into problems related to expo modules, delete the package.json file and run `npm i` on the root folder.
