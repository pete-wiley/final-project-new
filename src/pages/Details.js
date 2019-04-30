import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import { Text, Image, ListItem, Button, Overlay, Input, Rating, AirbnbRating } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { pics } from '../assets/consts'
import LaunchNavigator from 'react-native-launch-navigator';
import Gem from '../assets/pics/gemIcon.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Details",
            headerBackTitle: null,
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

    constructor(props) {
        super(props)
        this.state = {
            days: [],
            items: [],
            isVisible: false,
            newRatingPicker: [require('../assets/pics/gemIcon.png'), require('../assets/pics/gemIcon.png'), require('../assets/pics/gemIcon.png'), require('../assets/pics/gemIcon.png'), require('../assets/pics/gemIcon.png'),],
            newRatingIconSize: [50, 50, 50, 50, 50],
            newRatingNumber: 5,
            reviewTitle: '',
            reviewBody: '',
            reviewer: 'haley-mk',
            addToFavs: 'Add to Favorites',
            favsColor: "#32D6F1",
            currentFavs: [],
            thisFav: {
                picid: global.item.picid,
                objectid: global.item._id
            },
            disabled: false,
            ratingIcon: []
        };
    }

    //for reviews
    getItems = async () => {
        try {
            let response = await fetch(`https://bham-gems-api.herokuapp.com/reviews/business/${global.item.picid}`, {
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
                console.log(res);
                this.setState({
                    items: res,
                })
            }
        } catch (error) {
            console.log('Something went wrong');
        }
    }

    addReview = async () => {
        try {
            let response = await fetch(`https://bham-gems-api.herokuapp.com/reviews`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: this.state.reviewTitle,
                    reviewBody: this.state.reviewBody,
                    reviewer: this.state.reviewer,
                    gems: this.state.newRatingNumber,
                    businessid: global.item.picid
                })
            })
            let res = await response.json();
            if (res.errors) {
                this.setState({ errors: res.errors });
            } else {
                this.setState({
                    isVisible: false
                })
                this.getItems()
            }
        } catch (errors) {
            console.log('catch err');
            console.log(errors);
        }
        console.log('rating number on submit: ' + this.state.newRatingNumber)
    }

    addToFavorites = async () => {
        if (this.state.addToFavs !== "Added!") {
            console.log('current favs: ' + this.state.currentFavs)
            let newFavs = this.state.currentFavs.push(this.state.thisFav)
            console.log('new favs: ' + this.state.currentFavs)

            try {
                let response = await fetch(`https://bham-gems-api.herokuapp.com/user/5cc08a331c9d440000e62b2d`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        favorites: this.state.currentFavs
                    })
                })
                let res = await response.json();
                if (res.errors) {
                    this.setState({ errors: res.errors });
                } else {
                    this.setState({
                        addToFavs: 'Remove from Favs',
                        favsColor: '#A7A7A7'
                    })
                }
            } catch (errors) {
                console.log('catch err');
                console.log(errors);
            }
        }
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
                console.log(res);
                this.setState({
                    currentFavs: res.favorites,
                })
            }
        } catch (error) {
            console.log('Something went wrong');
        }
        console.log('current favs: ' + this.state.currentFavs)
        this.hasBeenAdded()
    }

    hasBeenAdded() {
        for (i = 0; i < this.state.currentFavs.length; i++) {
            console.log('this one: ' + JSON.stringify(this.state.currentFavs[i].picid))
            if (this.state.currentFavs[i].picid == global.item.picid) {
                console.log('gotem')
                this.setState({
                    addToFavs: "Remove from Favs",
                    favsColor: "#A7A7A7"
                })
            }
        }
    }



    componentDidMount() {
        this.getItems()
        this.getFavorites()
    }

    render() {

        const url = global.item.website
        const Phone = global.item.formatted_phone_number
        const address = global.item.formatted_address
        const pic = pics[global.item.picid]
        console.log(pic)

        return (
            <ScrollView style={{ marginBottom: 60 }}>
                <Overlay
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 50 }}>
                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    newRatingNumber: 1
                                })
                                console.log("new rating number: " + this.state.newRatingNumber)
                                for (i = 0; i < 1; i++) {
                                    this.state.newRatingPicker[i] = require('../assets/pics/gemIcon.png')
                                    console.log(i + 'changed to gem')
                                }
                                for (j = 1; j < 6; j++) {
                                    this.state.newRatingPicker[j] = require('../assets/pics/gemIconOFF.png')
                                    console.log(j + 'changed to circle')
                                }
                            }}
                                style={{ width: 50, height: 50 }}>
                                <Image source={this.state.newRatingPicker[0]} style={{ height: 50, width: 50 }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    newRatingNumber: 2
                                })
                                console.log("new rating number: " + this.state.newRatingNumber)
                                for (i = 0; i < 2; i++) {
                                    this.state.newRatingPicker[i] = require('../assets/pics/gemIcon.png')
                                    console.log(i + 'changed to gem')
                                }
                                for (j = 2; j < 6; j++) {
                                    this.state.newRatingPicker[j] = require('../assets/pics/gemIconOFF.png')
                                    console.log(j + 'changed to circle')
                                }
                            }}
                                style={{ width: 50, height: 50 }}>
                                <Image source={this.state.newRatingPicker[1]} style={{ height: 50, width: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    newRatingNumber: 3
                                })
                                console.log("new rating number: " + this.state.newRatingNumber)
                                for (i = 0; i < 3; i++) {
                                    this.state.newRatingPicker[i] = require('../assets/pics/gemIcon.png')
                                    console.log(i + 'changed to gem')
                                }
                                for (j = 3; j < 6; j++) {
                                    this.state.newRatingPicker[j] = require('../assets/pics/gemIconOFF.png')
                                    console.log(j + 'changed to circle')
                                }
                            }}
                                style={{ width: 50, height: 50 }}>
                                <Image source={this.state.newRatingPicker[2]} style={{ height: 50, width: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    newRatingNumber: 4
                                })
                                console.log("new rating number: " + this.state.newRatingNumber)
                                for (i = 0; i < 4; i++) {
                                    this.state.newRatingPicker[i] = require('../assets/pics/gemIcon.png')
                                    console.log(i + 'changed to gem')
                                }
                                for (j = 4; j < 6; j++) {
                                    this.state.newRatingPicker[j] = require('../assets/pics/gemIconOFF.png')
                                    console.log(j + 'changed to circle')
                                }
                            }}
                                style={{ width: 50, height: 50 }}>
                                <Image source={this.state.newRatingPicker[3]} style={{ height: 50, width: 50 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({
                                    newRatingNumber: 5
                                })
                                console.log("new rating number: " + this.state.newRatingNumber)
                                for (i = 0; i < 5; i++) {
                                    this.state.newRatingPicker[i] = require('../assets/pics/gemIcon.png')
                                    console.log(i + 'changed to gem')
                                }
                                for (j = 5; j < 6; j++) {
                                    this.state.newRatingPicker[j] = require('../assets/pics/gemIconOFF.png')
                                    console.log(j + 'changed to circle')
                                }
                            }}
                                style={{ width: 50, height: 50 }}>
                                <Image source={this.state.newRatingPicker[4]} style={{ height: 50, width: 50 }}
                                />
                            </TouchableOpacity>
                        </View>

                        <Input
                            inputContainerStyle={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 20
                            }}
                            containerStyle={{
                                marginTop: 50
                            }}
                            placeholder='Review Title'
                            onChangeText={(reviewTitle) => this.setState({ reviewTitle })}
                        />
                        <View style={{alignItems: 'flex-start', textAlignVertical: 'top'}}>
                            <Input
                                inputContainerStyle={{
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    height: 300,
                                    textAlignVertical: 'auto'
                                }}
                                containerStyle={{
                                    marginTop: 25,
                                    height: 300,
                                    alignItems: 'flex-start',
                                    textAlignVertical: 'auto'
                                }}
                                placeholder='Type your review here'
                                onChangeText={(reviewBody) => this.setState({ reviewBody })}
                                inputStyle={{
                                    textAlignVertical: 'top'
                                }}
                                multiline={true}
                                style={{
                                    textAlignVertical: 'top'
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Button
                                buttonStyle={{
                                    height: 50,
                                    width: 145,
                                    borderRadius: 30,
                                    marginTop: 30,
                                    backgroundColor: '#A7A7A7'
                                }}
                                title='Cancel'
                                onPress={() => this.setState({
                                    isVisible: false
                                })}
                            />
                            <Button
                                buttonStyle={{
                                    height: 50,
                                    width: 145,
                                    borderRadius: 30,
                                    marginTop: 30,
                                    backgroundColor: '#32D6F1'
                                }}
                                title='Submit'
                                onPress={() =>
                                    this.addReview()
                                }
                            />
                        </View>
                    </View>
                </Overlay>


                <View style={styles.Image}>
                    <Image
                        source={pic}
                        style={{ height: 200, width: '100%' }}
                    />
                </View>
                <View style={styles.Header}>
                    <Text h3 style={{ textAlign: 'center', paddingBottom: 10, marginTop: 10 }}>{global.item.name}</Text>
                    <Text style={{ textAlign: "center", fontSize: 20 }}>{global.item.description}</Text>
                </View>
                <View style={styles.Bottom}>
                    <Text style={{ textAlign: 'center', paddingBottom: 5, fontSize: 20 }}>{global.item.opening_hours.weekday_text[global.day]}</Text>
                    {/* make this link to the maps */}
                    <Text style={{ textAlign: 'center', paddingBottom: 5, fontSize: 15, textDecorationLine: "underline" }} onPress={() => LaunchNavigator.navigate(address)
                        .then(() => console.log("Launched navigator"))
                        .catch((err) => console.error("Error launching navigator: " + err))}>{global.item.formatted_address}</Text>
                    {/* make this link to a phone call */}
                    <Text style={{ textAlign: 'center', paddingBottom: 5, fontSize: 20, color: 'blue' }} onPress={() => Linking.openURL(`tel:${Phone}`)}>{Phone}</Text>
                    {/* Style the link maybe a touchable opacity */}
                    <Text style={styles.Website} onPress={() => Linking.openURL(url)}>Check out the Website</Text>
                    {/* Add review button */}
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            marginTop: 25,
                            marginBottom: 15
                        }}>

                            <Button
                                buttonStyle={{
                                    height: 50,
                                    width: 150,
                                    borderRadius: 30,
                                    marginRight: 30,
                                    backgroundColor: this.state.favsColor
                                }}
                                title={this.state.addToFavs}
                                onPress={() => this.addToFavorites()}
                            />

                            <Button
                                buttonStyle={{
                                    height: 50,
                                    width: 150,
                                    borderRadius: 30,
                                    backgroundColor: '#32D6F1'
                                }}
                                title='Add a review'
                                onPress={() => {
                                    this.setState({
                                        isVisible: true
                                    })
                                }}
                            />
                        </View>
                    </View>
                    {/* The Mapping for reviews */}
                    {
                        this.state.items.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.title}
                                subtitle={l.reviewBody}
                                rightTitle={
                                    <Rating
                                        type='custom'
                                        ratingImage={Gem}
                                        ratingCount={l.gems}
                                        ratingTextColor='lightblue'
                                        ratingColor=''
                                        imageSize={30}
                                        onFinishRating={this.ratingCompleted}
                                    />
                                }
                                rightSubtitle={l.reviewer}
                                titleStyle={{
                                    fontSize: 25,
                                    paddingBottom: 6,
                                    color: 'black',
                                }}
                            />
                        ))
                    }
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    Bottom: {
        marginTop: 25,
        paddingLeft: 10,
        paddingRight: 10,

    },
    Website: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#2A3D45',
        textDecorationLine: 'underline'
    },
    Image: {
        shadowOffset: { width: .2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 5,
        shadowRadius: 10,
        paddingBottom: 10
    }
})