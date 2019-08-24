/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import Home from './src/screens/Home';
import {Counter} from "./src/screens/CounterScreen";

Navigation.registerComponent(`HomeScreen`, () => Home);
Navigation.registerComponent(`CounterScreen`, () => Counter);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id:'App',
        children: [
          {
            component: {
              name: "HomeScreen",
              children: [
                {
                  component: {
                    name: "CounterScreen"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });
});
