import React, { Component } from 'react'
import { Image, StyleSheet, ImageBackground } from 'react-native'
import { ListItem, Rating } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bham1 from '../assets/pics/Bham1.jpg'
import Gem from '../assets/pics/gemIcon.png'



export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "BhamGems",
      headerStyle: { backgroundColor: '#CFDBD5' },
      headerTitleStyle: { fontSize: 25 },
      headerRight:
        <Rating
          style={{paddingRight: 80}}
          type='custom'
          ratingImage={Gem}
          ratingCount='1'
          ratingColor=''
          imageSize={40}
          onFinishRating={this.ratingCompleted}
        />
    }
  }

  render() {
    return (
      <ImageBackground source={Bham1} style={{ width: '100%', height: '100%', zIndex: -1 }}>
        <ListItem
          containerStyle={styles.ListItem1}
          title="Eat"
          titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
          leftIcon={
            <Icon
              name='silverware-variant'
              color='#F7D82D'
              size={45}
            />}
          onPress={() => this.props.navigation.navigate('EatResults')}
          chevron={{ size: 27, color: '#F7D82D' }}
        />
        <ListItem
          containerStyle={styles.ListItem4}
          title="Drink"
          titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
          leftIcon={
            <Icon
              name='beer'
              color='#F7D82D'
              size={45}
            />}
          onPress={() => this.props.navigation.navigate('DrinkResults')}
          chevron={{ size: 27, color: '#F7D82D' }}
        />
        <ListItem
          containerStyle={styles.ListItem2}
          title="Do"
          titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
          leftIcon={
            <Icon
              name='walk'
              color='#F7D82D'
              size={45}
            />}
          onPress={() => this.props.navigation.navigate('DoResults')}
          chevron={{ size: 27, color: '#F7D82D' }}
        />
        <ListItem
          containerStyle={styles.ListItem3}
          title="See"
          titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}
          leftIcon={
            <Icon
              name='binoculars'
              color='#F7D82D'
              size={45}
            />}
          onPress={() => this.props.navigation.navigate('SeeResults')}
          chevron={{ size: 27, color: '#F7D82D' }}
        />
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ListItem1: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: { width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 2,
    shadowRadius: 3,
    borderRadius: 2,
    marginBottom: 4,
    marginTop: 4,


  },
  ListItem2: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: { width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 2,
    shadowRadius: 3,
    borderRadius: 2,
    marginBottom: 4,
  },
  ListItem3: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: { width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 2,
    shadowRadius: 3,
    borderRadius: 2,
    marginBottom: 4

  },
  ListItem4: {
    width: "100%",
    height: 144,
    backgroundColor: 'transparent',
    shadowOffset: { width: .2, height: -2 },
    shadowColor: 'black',
    shadowOpacity: 2,
    shadowRadius: 3,
    borderRadius: 2,
    marginBottom: 4

  },
  banner: {
    fontSize: 35,
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 45,
    width: '100%',
    borderRadius: 2,
    color: 'white'
  },
  fontStyle: {
    fontFamily: 'Catamaran',
  }

  
})
   