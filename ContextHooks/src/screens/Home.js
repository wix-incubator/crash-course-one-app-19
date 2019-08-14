import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native'
import TeamListItem from "../components/TeamListItem";

const keyExtractor = (item) => item.teamId;

const renderItem = ({item}) => {
  return (
    <TeamListItem nbaTeamData={item}/>
  )
};

const Home = ({state}) => {
  return (
    <View style={style.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={state.nbaTeamsArray}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginEnd: 4,
    paddingBottom: 8,
    paddingTop: 4
  }
});

export default Home
