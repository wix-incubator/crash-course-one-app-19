/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './src/App';

Navigation.registerComponent(`navigation.playground.HomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.HomeScreen"
      }
    }
  });
});
