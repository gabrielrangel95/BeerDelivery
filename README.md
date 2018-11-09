# BeerDelivery

## Instructions:
#### For run the project locally, run on terminal: 
```
git clone https://github.com/gabrielrangel95/BeerDelivery.git
cd BeerDelivery
yarn install
expo start
```
Then, when the expo server finish to complie, it will give you the options for run on Android and on iOS.
#### Run directly on phone:
Download the expo app, scan the QR code of the project:
```
https://expo.io/@gabrielrangel/BeerDelivery
```

### Notes: :warning:
This Project use the Google Places API, for the app gives back to you the locations at the HomeScreen, you must get a own API key and replace the `Keys.MapsApiKey` at the line `96` of the file `src/Home/Home.tsx` for your key.
