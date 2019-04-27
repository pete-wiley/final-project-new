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





  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          {
            global.renderFavs.map((l, i) => (
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
