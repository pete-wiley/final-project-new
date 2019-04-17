import React, { Component } from 'react'
import { Image,  StyleSheet, ImageBackground } from 'react-native'
import { ListItem } from 'react-native-elements'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Bham1 from '../assets/pics/Bham1.jpg'
import Gem from '../assets/pics/gem.png'



export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        title: "Home",
        headerStyle: { backgroundColor: '#CFDBD5' },
        headerTitleStyle: { fontSize: 25 },
        headerRight: 
          <Icon
          name="diamond-stone"
          color="blue"
          size ={45}
          style = {{paddingRight: 10}}
          />
    }
}

  render() {
    return (
      <ImageBackground source={Bham1} style={{width: '100%', height: '100%'}}>
        <ListItem
        containerStyle = {styles.ListItem1}
        title="Eat"
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='silverware-variant'
          color='#F7D82D'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('EatResults')}
        chevron = {{ size: 27, color:'#F7D82D'}}
        />
        <ListItem
        containerStyle= {styles.ListItem4}
        title="Drink"
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='beer'
          color='#F7D82D'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('DrinkResults')}
        chevron = {{ size: 27, color:'#F7D82D'}}
        />
        <ListItem
        containerStyle= {styles.ListItem2}
        title="Do"
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='walk'
          color='#F7D82D'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('DoResults')}
        chevron = {{ size: 27, color:'#F7D82D'}}
        />
        <ListItem
        containerStyle= {styles.ListItem3}
        title="See"
        titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
        leftIcon = {
          <Icon
          name='binoculars'
          color='#F7D82D'
          size = {45}
        />}
        onPress={() => this.props.navigation.navigate('SeeResults')}
        chevron = {{ size: 27, color:'#F7D82D'}}
        />
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ListItem1: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
    borderRadius: 2
  },
  ListItem2: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
    borderRadius: 2
  },
  ListItem3: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: {width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 5,
    shadowRadius: 10,
    borderRadius: 2
  },
  ListItem4: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: {width: .2, height: -2 },
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
    backgroundColor: 'transparent',
    width: '100%',
    borderRadius: 2,
    color: 'white'
  }
})