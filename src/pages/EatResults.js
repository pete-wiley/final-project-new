import React, { Component } from 'react'
import { Text, SafeAreaView, ImageBackground, StyleSheet, ScrollView,  View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Rating } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { pics } from '../assets/consts'
import ftPic from '../assets/pics/foodTruck2.png'
import Gem from '../assets/pics/gemIcon.png'

export default class EatResults extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Eat Results",
            headerStyle: { backgroundColor: 'white' },
            headerBackTitle: null,
            headerTitleStyle: { fontSize: 25 },
            headerRight:
            <Image
            source={Gem}
            style={{width: 50, height: 50, paddingRight: 200}}
            resizeMode={"contain"}
            />
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            itemsFT: [],
            trucksTitle: '',
            ftPicState: ''
        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = async () => {
        try {
            let response = await fetch('https://bham-gems-api.herokuapp.com/eat', {
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
                    items: res
                })
            }
        } catch (error) {
            console.log('Something went wrong');
        }
        try {
            let response = await fetch('https://bham-gems-api.herokuapp.com/foodtruck', {
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
                    itemsFT: res
                })
            }
        } catch (error) {
            console.log('Something went wrong');
        }
        this.setState({ trucksTitle: 'FOOD TRUCKS' })
        this.setState({ ftPicState: ftPic })
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

    FTclicked = (thing) => {
        if (thing.opening_hours.weekday_text === undefined) {
            global.item = thing
            global.day = 0
            if (thing.opening_hours.open.time === "") {
                global.item.opening_hours.weekday_text = [
                    "Closed"
                ]
            } //else times have been updated, make readable weekday text for today HERE
            ///////////////////////////////////////////////////////////////////////////
        } else if (thing.opening_hours.weekday_text.length == 7) {
            global.item = thing
            n = new Date()
            d = n.getDay()
            if (d == 0) {
                global.day = 6
            } else {
                global.day = (d - 1)
            }
        }
        this.props.navigation.navigate('Details')
    }

    componentDidMount() {
        this.getItems()
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView>
                    {
                        this.state.items.map((l, i) => (
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
                    <ImageBackground
                        style={{ width: '100%', backgroundColor: 'rgba(25, 35, 35)' }}
                        source={this.state.ftPicState}>
                        <Text h1 style={{
                            textAlign: "center", fontWeight: 'bold', color: 'white',
                            padding: 0, fontSize: 25, paddingTop: 90
                        }}>
                            {this.state.trucksTitle}</Text>
                    </ImageBackground>
                    {
                        this.state.itemsFT.map((l, i) => (
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
                                        this.FTclicked(l)
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

const styles = StyleSheet.create({
    resultC: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 1,
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        paddingTop: 20,
        paddingBottom: 20,
    },
    Name: {
        fontSize: 40,
    },
    Type: {
        fontSize: 30,
    }
})