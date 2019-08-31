import React from 'react'
import {StyleSheet} from 'react-native'
import {Text, Card, View, Image, Colors, TouchableOpacity} from 'react-native-ui-lib'
import {showModal} from "../services/Navigation";
import store, {getTeamCounter} from "../store/AppStore";

export default class TeamListItem extends React.Component {

  constructor() {
    super();
  }

  lastCounterValue = 0;

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const newVal = getTeamCounter(this.props.nbaTeamData.teamName);
      if (this.lastCounterValue !== newVal) {
        this.forceUpdate();
        this.lastCounterValue = newVal;
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  openCounterScreen = () => showModal('CounterScreen', `league points of ${this.props.nbaTeamData.teamName}`, {teamName: this.props.nbaTeamData.teamName});

  render() {
    const {nbaTeamData} = this.props;
    const teamCounter = getTeamCounter(nbaTeamData.teamName);
    return (
      <Card
        key={nbaTeamData.teamId}
        style={styles.container}
        elevation={4}
        onPress={() => this.openCounterScreen()}
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
            {`league points: ${teamCounter}`}
          </Text>
        </View>
      </Card>
    )
  }
};

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
