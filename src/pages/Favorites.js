import React, { Component } from 'react'
import { Text, SafeAreaView, ImageBackground, StyleSheet, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Rating } from 'react-native-elements'
import { pics } from '../assets/consts'
import Gem from '../assets/pics/gemIcon.png'


export default class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = {
      renderFavsState: []
    }
  }



  clicked = (thing) => {
    if (thing.opening_hours === undefined) {
      thing.opening_hours = {
        weekday_text: [
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ]
      }
      console.log('yup')
      global.item = thing
    } else {
      global.item = thing
      console.log('yay!')
    }
    n = new Date()
    d = n.getDay()
    if (d == 0) {
      global.day = 6
    } else {
      global.day = (d - 1)
    }
    this.props.navigation.navigate('Details')
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
    this.setState({
      renderFavsState: renderFavs
    })
  }

  render() {
    this.getFavorites()
    return (
      <ScrollView>
        <SafeAreaView>
          {
            this.state.renderFavsState.map((l, i) => (
              <ImageBackground
                key={i}
                style={{ width: '100%' }}
                source={pics[l.picid]}
              >
                <ListItem
                  key={i}
                  containerStyle={{ backgroundColor: 'rgba(25, 25, 25, 0.6)', }}
                  title={l.name}
                  titleStyle={{
                    fontSize: 25,
                    paddingBottom: 6,
                    color: 'white',
                  }}
                  subtitle={l.description}
                  subtitleStyle={{
                    color: 'white'
                  }}
                  bottomDivider
                  chevron
                  onPress={() =>
                    this.clicked(l)
                  }
                />
              </ImageBackground>
            ))
          }
        </SafeAreaView>
      </ScrollView>
    )
  }
}
