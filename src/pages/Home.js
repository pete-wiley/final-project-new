import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import  Icon  from 'react-native-vector-icons/FontAwesome';



export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerLeft:
            <Icon
                name="bars"
                size={30}
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.openDrawer()} />,
        title: "Home"
    }
}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.banner}>
          What do you want to do?
        </Text>
        <ListItem
        containerStyle = {styles.ListItem1}
        title="Eat"
        onPress={() => this.props.navigation.navigate('EatResults')}
        />
        <ListItem
        containerStyle= {styles.ListItem2}
        title="Do"
        raised = {true}
        onPress={() => this.props.navigation.navigate('DoResults')}
        />
        <ListItem
        containerStyle= {styles.ListItem3}
        title="See"
        raised = {true}
        onPress={() => this.props.navigation.navigate('SeeResults')}
        />
        <ListItem
        containerStyle= {styles.ListItem4}
        title="Drink"
        raised = {true}
        onPress={() => this.props.navigation.navigate('DrinkResults')}
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '85%'
  },
  ListItem1: {
    width: "100%",
    height: 144,
    backgroundColor: '#839788',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
  },
  ListItem2: {
    width: "100%",
    height: 144,
    backgroundColor: '#BDBBB6',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
  },
  ListItem3: {
    width: "100%",
    height: 144,
    backgroundColor: '#E5D1D0',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
  },
  ListItem4: {
    width: "100%",
    height: 144,
    backgroundColor: '#F5E4D7',
    shadowOffset: {width: .2, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
  },
  banner: {
    fontSize: 35,
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 45,
  }
})