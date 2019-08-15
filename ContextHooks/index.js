/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import Home from './src/screens/Home';
import {Counter} from "./src/screens/CounterScreen";

Navigation.registerComponent(`navigation.playground.HomeScreen`, () => Home);
Navigation.registerComponent(`counterScreen`, () => Counter);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.HomeScreen"
      }
    }
  });
});
