import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet, Linking } from 'react-native'
import { Text, Image, ListItem, Button, Overlay, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { pics } from '../assets/consts'
import LaunchNavigator from 'react-native-launch-navigator';

export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitle: null,
            title: "Details",
            headerStyle: { backgroundColor: '#CFDBD5' },
            headerTitleStyle: { fontSize: 25 },
            headerRight:
                <Icon
                    name="diamond-stone"
                    color="blue"
                    size={45}
                    style={{ paddingRight: 10 }}
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
            reviewBody: ''
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

    componentDidMount() {
        this.getItems()
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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50 }}>
                            <Icon
                                name={this.state.newRatingPicker[0]}
                                color='gray'
                                size={40}
                                onPress={() => {
                                    this.setState({
                                        newRatingNumber: 1
                                    })
                                    console.log("new rating number: " + this.state.newRatingNumber)
                                    for (i = 0; i < 1; i++) {
                                        this.state.newRatingPicker[i] = 'diamond-stone'
                                        console.log(i + 'changed to gem')
                                    }
                                    for (j = 1; j < 6; j++) {
                                        this.state.newRatingPicker[j] = 'circle-medium'
                                        console.log(j + 'changed to circle')
                                    }
                                }}
                            />
                            <Icon
                                name={this.state.newRatingPicker[1]}
                                color='gray'
                                size={40}
                                onPress={() => {
                                    this.setState({
                                        newRatingNumber: 2
                                    })
                                    console.log("new rating number: " + this.state.newRatingNumber)
                                    for (i = 0; i < 2; i++) {
                                        this.state.newRatingPicker[i] = 'diamond-stone'
                                        console.log(i + 'changed to gem')
                                    }
                                    for (j = 2; j < 6; j++) {
                                        this.state.newRatingPicker[j] = 'circle-medium'
                                        console.log(j + 'changed to circle')
                                    }
                                }}
                            />
                            <Icon
                                name={this.state.newRatingPicker[2]}
                                color='gray'
                                size={40}
                                onPress={() => {
                                    this.setState({
                                        newRatingNumber: 3
                                    })
                                    console.log("new rating number: " + this.state.newRatingNumber)
                                    for (i = 0; i < 3; i++) {
                                        this.state.newRatingPicker[i] = 'diamond-stone'
                                        console.log(i + 'changed to gem')
                                    }
                                    for (j = 3; j < 6; j++) {
                                        this.state.newRatingPicker[j] = 'circle-medium'
                                        console.log(j + 'changed to circle')
                                    }
                                }}
                            />
                            <Icon
                                name={this.state.newRatingPicker[3]}
                                color='gray'
                                size={40}
                                onPress={() => {
                                    this.setState({
                                        newRatingNumber: 4
                                    })
                                    console.log("new rating number: " + this.state.newRatingNumber)
                                    for (i = 0; i < 4; i++) {
                                        this.state.newRatingPicker[i] = 'diamond-stone'
                                        console.log(i + 'changed to gem')
                                    }
                                    for (j = 4; j < 6; j++) {
                                        this.state.newRatingPicker[j] = 'circle-medium'
                                        console.log(j + 'changed to circle')
                                    }
                                }}
                            />
                            <Icon
                                name={this.state.newRatingPicker[4]}
                                color='gray'
                                size={40}
                                onPress={() => {
                                    this.setState({
                                        newRatingNumber: 5
                                    })
                                    console.log("new rating number: " + this.state.newRatingNumber)
                                    for (i = 0; i < 5; i++) {
                                        this.state.newRatingPicker[i] = 'diamond-stone'
                                        console.log(i + 'changed to gem')
                                    }
                                    for (j = 5; j < 6; j++) {
                                        this.state.newRatingPicker[j] = 'circle-medium'
                                        console.log(j + 'changed to circle')
                                    }
                                }}
                            />
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
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Button
                                buttonStyle={{
                                    height: 50,
                                    width: 145,
                                    borderRadius: 30,
                                    marginTop: 30,
                                    backgroundColor: '#f44336'
                                }}
                                title='Cancel'
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
                    <Text style={{ textAlign: "center", fontSize: 26 }}>{global.item.description}</Text>
                </View>
                <View style={styles.Bottom}>
                    <Text style={{ textAlign: 'center', paddingBottom: 5, fontSize: 20 }}>{global.item.opening_hours.weekday_text[global.day]}</Text>
                    {/* make this link to the maps */}
                    <Text style={{ textAlign: 'center', paddingBottom: 5, fontSize: 20 }} onPress={() => LaunchNavigator.navigate(address)
                        .then(() => console.log("Launched navigator"))
                        .catch((err) => console.error("Error launching navigator: " + err))}>{global.item.formatted_address}</Text>
                    {/* make this link to a phone call */}
                    <Text style={{ textAlign: 'center', paddingBottom: 5, fontSize: 20 }} onPress={() => Linking.openURL(`tel:${Phone}`)}>{Phone}</Text>
                    {/* Style the link maybe a touchable opacity */}
                    <Text style={styles.Website} onPress={() => Linking.openURL(url)}>Check out the Website</Text>
                    {/* Add review button */}
                    <View
                        style={{ alignItems: 'center' }}
                    >
                        <Button
                            buttonStyle={{
                                height: 50,
                                width: 270,
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
                    {/* The Mapping for reviews */}
                    {
                        this.state.items.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.title}
                                rightTitle={l.gems}
                                rightSubtitle={l.reviewer}
                                titleStyle={{
                                    fontSize: 25,
                                    paddingBottom: 6,
                                    color: 'black',
                                }}
                                subtitle={l.reviewBody}
                                bottomDivider
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
    },
    Bottom: {
        marginTop: 25,
    },
    Website: {
        textAlign: 'center',
        paddingBottom: 5,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#2A3D45'
    },
    Image: {
        shadowOffset: { width: .2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 5,
        shadowRadius: 10,
        paddingBottom: 10
    }
})