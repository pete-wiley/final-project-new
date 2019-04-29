import React, { Component } from 'react'
import { Text, SafeAreaView, ImageBackground, StyleSheet, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListItem, Rating } from 'react-native-elements'
import { pics } from '../assets/consts'
import Gem from '../assets/pics/gemIcon.png'


export default class Results extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "See Results",
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
            items: []
        }
    }

    getItems = async () => {
        try {
            let response = await fetch('https://bham-gems-api.herokuapp.com/see', {
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
                    gotRes: 1
                })
            }
        } catch (error) {
            console.log('Something went wrong');
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