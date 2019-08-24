import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib'
import store, {getTeamCounter, increment, decrement} from '../store/AppStore'
import {useCounterScreen} from "../hooks/useCounterScreen";

export class Counter extends React.Component{

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: `league points of ${passProps.teamName}`
        },
      }
    };
  }

  constructor(){
    super();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return (
      <View>
        <Button
          label={'increment'}
          onPress={() => increment(this.props.teamName)}
        />
        <Text center>
          {getTeamCounter(this.props.teamName)}
        </Text>
        <Button
          label={'decrement'}
          onPress={() => decrement(this.props.teamName)}
        />
      </View>
    )
  }
};

// export const Counter = (props) => {
//   const {increase, teamCounter, decrease} = useCounterScreen(props);
//
//   return (
//     <View>
//       <Button
//         label={'increment'}
//         onPress={increase}
//       />
//       <Text center>
//         {teamCounter}
//       </Text>
//       <Button
//         label={'decrement'}
//         onPress={decrease}
//       />
//     </View>
//   )
// }
//
// Counter.options = (passProps) => {
//   return {
//     topBar: {
//       visible: true,
//       title: {
//         text: `league points of ${passProps.teamName}`
//       }
//     }
//   }
// }
