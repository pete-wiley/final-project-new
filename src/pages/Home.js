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
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { fontSize: 25 },
      headerRight:
        <Image
          source={Gem}
          style={{ width: 50, height: 50, paddingRight: 200 }}
          resizeMode={"contain"}
        />
    }
  }

  compare(a, b) {
    if (a.picid < b.picid) {
      return -1;
    }
    if (a.picid > b.picid) {
      return 1;
    }
    return 0;
  }

  getFavorites = async () => {
    try {
      let response = await fetch(`https://bham-gems-api.herokuapp.com/user/5cc08a331c9d440000e62b2d`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let res = await response.json();
      if (!res) {
        console.log('Nope');
      } else {
        console.log('res ' + res);
        global.favorites = res.favorites
        global.favorites.sort(this.compare)
      }
    } catch (error) {
      console.log('Something went wrong');
    }
    console.log('sorted favs: ' + global.favorites)
    this.getRenderFavorites()
  }

  getRenderFavorites = async () => {
    let renderFavs = []
    for (i = 0; i < global.favorites.length; i++) {
      if (global.favorites[i].picid[0] == "E") {
        try {
          let response = await fetch(`https://bham-gems-api.herokuapp.com/eat/${global.favorites[i].objectid}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          });
          let res = await response.json();
          if (!res) {
            console.log('Nope');
          } else {
            console.log(res)
            renderFavs.push(res)
          }
        } catch (error) {
          console.log('Something went wrong');
        }
      } else if (global.favorites[i].picid[0] == "S") {
        try {
          let response = await fetch(`https://bham-gems-api.herokuapp.com/see/${global.favorites[i].objectid}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          });
          let res = await response.json();
          if (!res) {
            console.log('Nope');
          } else {
            console.log(res)
            renderFavs.push(res)
          }
        } catch (error) {
          console.log('Something went wrong');
        }
      } else if (global.favorites[i].picid[1] == "T") {
        try {
          let response = await fetch(`https://bham-gems-api.herokuapp.com/foodtruck/${global.favorites[i].objectid}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          });
          let res = await response.json();
          if (!res) {
            console.log('Nope');
          } else {
            console.log(res)
            renderFavs.push(res)
          }
        } catch (error) {
          console.log('Something went wrong');
        }
      } else if (global.favorites[i].picid[1] == "O") {
        try {
          let response = await fetch(`https://bham-gems-api.herokuapp.com/do/${global.favorites[i].objectid}`, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              }
          });
          let res = await response.json();
          if (!res) {
              console.log('Nope');
          } else {
            console.log(res)
              renderFavs.push(res)
          }
      } catch (error) {
          console.log('Something went wrong');
      }
      } else if (global.favorites[i].picid[1] == "R") {
        try {
          let response = await fetch(`https://bham-gems-api.herokuapp.com/drink/${global.favorites[i].objectid}`, {
              method: 'GET',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              }
          });
          let res = await response.json();
          if (!res) {
              console.log('Nope');
          } else {
            console.log(res)
              renderFavs.push(res)
          }
      } catch (error) {
          console.log('Something went wrong');
      }
      }
    }
    console.log('render favs: ' + JSON.stringify(renderFavs))
    global.renderFavs = renderFavs
  }

  componentDidMount() {
    this.getFavorites()
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
