import React from 'react';
import {View, Text, Button} from 'react-native-ui-lib'


export class Counter extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <View>
        <Button
          label={'increment'}
          onPress={() => console.warn('increment')}
        />
        <Text center>
          {'COUNTER'}
        </Text>
        <Button
          label={'decrement'}
          onPress={() => console.warn('decrement')}
        />
      </View>
    )
  }
};
