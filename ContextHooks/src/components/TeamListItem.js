import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Text, Card, View, Image, Colors, TouchableOpacity} from 'react-native-ui-lib'
import {openScreen} from "../services/Navigation";
import store, {getTeamCounter} from "../store/AppStore";
import {NbaContext} from '../contexts'
import {useTeamListItem} from '../hooks/useTeamListItem';

export default class TeamListItem extends React.Component{

  constructor(){
    super();
  }

  lastCounterValue = 0;

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const newVal = getTeamCounter(this.props.nbaTeamData.teamName);
      if(this.lastCounterValue !== newVal){
        this.forceUpdate();
        this.lastCounterValue = newVal;
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  openCounterScreen = (componentId) => openScreen(componentId, 'CounterScreen', {teamName: this.props.nbaTeamData.teamName});


  render(){
    const {nbaTeamData} = this.props;
    return (
      <NbaContext.Consumer>
        {value =>
          <Card
            key={nbaTeamData.teamId}
            style={styles.container}
            elevation={4}
            onPress={() => this.openCounterScreen(value.componentId)}
            shadow>
            <View style={styles.imageContainer}>
              <View>
                <Image
                  style={styles.image}
                  source={{uri: nbaTeamData.teamLogo}}/>
              </View>
              <View style={styles.border}/>
            </View>
            <View flex center>
              <Text style={styles.text}>
                {nbaTeamData.teamName}
              </Text>
            </View>
            <View flex center>
              <Text style={styles.text}>
                {`league points: ${getTeamCounter(nbaTeamData.teamName)}`}
              </Text>
            </View>
          </Card>
        }
      </NbaContext.Consumer>
    )
  }
};

// const TeamListItem = ({nbaTeamData}) => {
//   const context = useContext(NbaContext);
//   const {openCounterScreen} = useTeamListItem(context.componentId, nbaTeamData);
//
//   return (
//     <Card
//       key={nbaTeamData.teamId}
//       style={styles.container}
//       elevation={4}
//       onPress={openCounterScreen}
//       shadow>
//       <View style={styles.imageContainer}>
//         <View>
//           <Image
//             style={styles.image}
//             source={{uri: nbaTeamData.teamLogo}}/>
//         </View>
//         <View style={styles.border}/>
//       </View>
//       <View flex center>
//         <Text style={styles.text}>
//           {nbaTeamData.teamName}
//         </Text>
//       </View>
//       <View flex center>
//         <Text style={styles.text}>
//           {`league points: ${getTeamCounter(nbaTeamData.teamName)}`}
//         </Text>
//       </View>
//     </Card>
//   )
// };
//
// export default React.memo(TeamListItem, ({nbaTeamData : prev}, {nbaTeamData: next}) => prev.teamId === next.teamId)

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginStart: 4,
    marginEnd: 4,
    width: '49%',
    height: 120,
  },
  imageContainer: {
    backgroundColor: '#eeeeee'
  },
  image: {
    width: '100%',
    height: 60,
    marginTop: 8,
    resizeMode: 'contain',
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 16,
    borderColor: Colors.blue10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8
  }
});
