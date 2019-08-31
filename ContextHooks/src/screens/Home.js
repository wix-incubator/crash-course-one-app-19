import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native'
import TeamListItem from "../components/TeamListItem";
import {requestNbaTeamArr} from "../store/nba/NbaActions"
import store, {getTeamArrFromTeamMap} from '../store/AppStore'

export default class Home extends React.Component {

  constructor() {
    super();
  }

  keyExtractor = (item) => item.teamId;

  renderItem = ({item}) => {
    return (
      <TeamListItem nbaTeamData={item}/>
    )
  };

  componentDidMount() {
    requestNbaTeamArr(store.dispatch);
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const teamsData = getTeamArrFromTeamMap();
    return (
      <View style={style.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={teamsData}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginEnd: 4,
    paddingBottom: 8,
    paddingTop: 4
  }
});

