/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './src/App';
import Players from "./src/screens/players/Players";

Navigation.registerComponent(`navigation.playground.HomeScreen`, () => App);
Navigation.registerComponent(`navigation.playground.PlayersScreen`, () => Players);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.HomeScreen"
      }
    }
  });
});
