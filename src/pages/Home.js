import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: "Home",
        headerStyle: { backgroundColor: '#CFDBD5' },
        headerTitleStyle: { fontSize: 25 },
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
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='silverware-variant'
          color='#517fa4'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('EatResults')}
        chevron = {{ size: 27, color:'#2A2D34'}}
        />
        <ListItem
        containerStyle= {styles.ListItem2}
        title="Do"
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='walk'
          color='#517fa4'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('DoResults')}
        chevron = {{ size: 27, color:'#2A2D34'}}
        />
        <ListItem
        containerStyle= {styles.ListItem3}
        title="See"
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='binoculars'
          color='#517fa4'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('SeeResults')}
        chevron = {{ size: 27, color:'#2A2D34'}}
        />
        <ListItem
        containerStyle= {styles.ListItem4}
        title="Drink"
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='beer'
          color='#517fa4'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('DrinkResults')}
        chevron = {{ size: 27, color:'#2A2D34'}}
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // height: '85%',
    backgroundColor: '#73877B',
  },
  ListItem1: {
    width: "100%",
    height: 144,
    backgroundColor: '#839788',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
    borderRadius: 2
  },
  ListItem2: {
    width: "100%",
    height: 144,
    backgroundColor: '#BDBBB6',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
    borderRadius: 2
  },
  ListItem3: {
    width: "100%",
    height: 144,
    backgroundColor: '#E5D1D0',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
    borderRadius: 2
  },
  ListItem4: {
    width: "100%",
    height: 144,
    backgroundColor: '#F5E4D7',
    shadowOffset: {width: .2, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
    borderRadius: 2
  },
  banner: {
    fontSize: 35,
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 45,
    backgroundColor: '#73877B',
    width: '100%',
    borderRadius: 2
  }
})