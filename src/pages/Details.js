import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet, Linking } from 'react-native'
import { Text, Image, ListItem, Button, Overlay, Input, Rating, AirbnbRating } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { pics } from '../assets/consts'
import LaunchNavigator from 'react-native-launch-navigator';
import Gem from '../assets/pics/gemIcon.png'

export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitle: null,
            title: "Details",
            headerStyle: { backgroundColor: '#CFDBD5' },
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
            newRatingPicker: ["circle-medium", "circle-medium", "circle-medium", "circle-medium", "circle-medium",],
            newRatingNumber: 0,
            reviewTitle: '',
            reviewBody: '',
            reviewer: 'John Cena',
            addToFavs: 'Add to Favorites',
            currentFavs: [],
            thisFav: {
                picid: global.item.picid,
                objectid: global.item._id
            },
            disabled: false
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
                        addToFavs: 'Added!'
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
                    addToFavs: "Added!"
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

                        <AirbnbRating
                            count={5}
                            defaultRating={11}
                            size={40}
                            type='heart'
                        />
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
                        <Input
                            inputContainerStyle={{
                                borderColor: 'black',
                                borderWidth: 1,
                                borderRadius: 20,
                                height: 300
                            }}
                            containerStyle={{
                                marginTop: 25,
                                height: 300
                            }}
                            placeholder='Type your review here'
                            onChangeText={(reviewBody) => this.setState({ reviewBody })}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Button
                                buttonStyle={{
                                    height: 50,
                                    width: 145,
                                    borderRadius: 30,
                                    marginTop: 30,
                                    backgroundColor: '#f44336'
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
                                    backgroundColor: '#509f67'
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
                    <Text style={{ textAlign: 'center', paddingBottom: 5, fontSize: 20 }} onPress={() => LaunchNavigator.navigate(address)
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
                                    marginRight: 30
                                }}
                                title={this.state.addToFavs}
                                onPress={() => this.addToFavorites()}
                            />

                            <Button
                                buttonStyle={{
                                    height: 50,
                                    width: 150,
                                    borderRadius: 30
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