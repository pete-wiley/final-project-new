import React, { Component } from 'react'
import { View, SafeAreaView, Image, StyleSheet, ImageBackground } from 'react-native'
import { Button, Text, ListItem, Overlay, Rating, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Sky from '../assets/pics/sky.jpg'
import HaleyMK from '../assets/pics/HaleyMK.jpg'
import Form from './form'
import FormH from './formH'
import { IDkey } from '../assets/consts'
import Gem from '../assets/pics/gemIcon.png'
import { ScrollView } from 'react-native-gesture-handler';

export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Profile",
            headerStyle: { backgroundColor: 'white' },
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
            isVisible: false,
            isVisible1: false,
            gems: ''
        };
    }

    getItems = async () => {
        try {
            let response = await fetch(`https://bham-gems-api.herokuapp.com/reviews/reviewer/haley-mk`, {
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
        // this.getItems()
    }

    clicked = () => {
        this.setState({
            isVisible: true,
        })
    }

    clicked1 = () => {
        this.setState({
            isVisible1: true,
        })
    }

    render() {
        this.getItems()
        return (
            <SafeAreaView>
                <ScrollView>
                <ImageBackground
                    source={Sky}
                    style={styles.UserInfo}>
                    <View style={styles.Image}>
                        <Image
                            source={HaleyMK} 
                            style={{ width: 120, height: 120 }}
                            borderRadius={50}
                            />
                    </View>
                    <View style={styles.Name}>
                        <Text style={{ fontSize: 30 }}>Haley Medved Kendrick</Text>
                    </View>
                </ImageBackground>
            <View style={styles.UserContent}>
                <View style={styles.FoodTruck}>
                    <Button
                    title = "Add Food Truck"
                    raised = {true}
                    buttonStyle = {{borderRadius: 20}}
                    onPress={() =>
                        this.clicked()
                    }
                    />
                    <Button
                    title = "Add Happy Hour"
                    raised = {true}
                    buttonStyle = {{borderRadius: 20}}
                    onPress={() =>
                        this.clicked1()
                    }
                    />
                   </View>
                   <View> 
                    <Overlay
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    width="auto"
                    height="auto"
                    >
                    <Form/>
                    </Overlay>
                </View>
                <View> 
                    <Overlay
                    isVisible={this.state.isVisible1}
                    onBackdropPress={() => this.setState({ isVisible1: false })}
                    width="auto"
                    height="auto"
                    >
                    <FormH/>
                    </Overlay>
                </View>
                <View style={styles.Reviews}>
                    <Text h3 style={{paddingBottom: 20, alignSelf: 'center'}}>My Reviews</Text>
                    {/* mapping through reviews */}
                    {
                        this.state.items.map((l, i) => (
                                <ListItem
                                key={i}
                                title={l.title}
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
                                rightSubtitle={IDkey[l.businessid]}
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
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    UserInfo: {
        flexDirection: "column",
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingRight: 3,
        paddingLeft: 3,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#BDBBB6"
    },
    Name: {
        alignItems: "center",
        marginBottom: 4,
        justifyContent: "center"
    },
    Image: {
        alignItems: "center",
        justifyContent: "center"
    },
    UserContent: {
        flexDirection: "column",
        height: "75%"
    },
    FoodTruck: {
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 40,
        flexDirection: 'row'
    }
})