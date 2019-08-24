import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native'
import TeamListItem from "../components/TeamListItem";
import {requestNbaTeamArr} from "../store/nba/NbaActions"
import {NbaStore} from "../store/nba/NbaStore"
import {NbaContext} from '../contexts'
import {useHomeHook} from "../hooks/useHomeHook";

export default class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      dataWasLoaded: false
    }
  }

  keyExtractor = (item) => item.teamId;

  renderItem = ({item}) => {
    return (
      <TeamListItem nbaTeamData={item}/>
    )
  };

  componentDidMount(){
    requestNbaTeamArr().then(() => this.setState({dataWasLoaded: true}));
  }

  render(){
    return (
      <NbaContext.Provider value={{componentId: this.props.componentId}}>
        <View style={style.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={NbaStore.nbaTeamsArray}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </NbaContext.Provider>
    )
  }
}

// const keyExtractor = (item) => item.teamId;
//
// const renderItem = ({item}) => {
//   return (
//     <TeamListItem nbaTeamData={item}/>
//   )
// };
//
// const Home = (props) => {
//   const {state, contextData} = useHomeHook(props);
//   return (
//     <NbaContext.Provider value={contextData}>
//       <View style={style.container}>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           numColumns={2}
//           data={state.nbaTeamsArray}
//           keyExtractor={keyExtractor}
//           renderItem={renderItem}
//         />
//       </View>
//     </NbaContext.Provider>
//   )
// };
//
// export default Home

const style = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginEnd: 4,
    paddingBottom: 8,
    paddingTop: 4
  }
});

