import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet, Linking, TouchableOpacity, ImageBackground } from 'react-native'
import { Text, Image, ListItem, Button, Overlay, Input, Rating, AirbnbRating } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { pics } from '../assets/consts'
import LaunchNavigator from 'react-native-launch-navigator';
import Gem from '../assets/pics/gemIcon.png'

export default class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            places: [],
            loading: true,
        }
    }

    getPlaces = async () => {
        let renderFavs = []
        for (i = 0; i < global.places.length; i++) {
            if (global.places[i].picid[0] == "E") {
                try {
                    let response = await fetch(`https://bham-gems-api.herokuapp.com/eat/${global.places[i].objectid}`, {
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
            } else if (global.places[i].picid[0] == "S") {
                try {
                    let response = await fetch(`https://bham-gems-api.herokuapp.com/see/${global.places[i].objectid}`, {
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
            } else if (global.places[i].picid[1] == "T") {
                try {
                    let response = await fetch(`https://bham-gems-api.herokuapp.com/foodtruck/${global.places[i].objectid}`, {
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
            } else if (global.places[i].picid[1] == "O") {
                try {
                    let response = await fetch(`https://bham-gems-api.herokuapp.com/do/${global.places[i].objectid}`, {
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
            } else if (global.places[i].picid[1] == "R") {
                try {
                    let response = await fetch(`https://bham-gems-api.herokuapp.com/drink/${global.places[i].objectid}`, {
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
        console.log('places: ' + JSON.stringify(renderFavs))
        this.setState({
            places: renderFavs,
            loading: false
        })
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
        this.getPlaces()
        return (
            <View>
                {
                    this.state.places.map((l, i) => (
                        <ImageBackground
                            key={i}
                            style={{ width: '100%', marginBottom: 2 }}
                            source={pics[l.picid]}
                        >
                            <ListItem
                                key={i}
                                containerStyle={{ backgroundColor: 'rgba(25, 25, 25, 0.6)' }}
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
            </View>
        )
    }
}