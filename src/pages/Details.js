import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';


export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitle: null,
            title: "Details"
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            days: []
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.Left}>
                    <View >
                        <View style={styles.Top}>
                            <Text h3>{global.item.name}</Text>
                            <Text h4>{global.item.description}</Text>
                        </View>
                        <View style={styles.Bottom}>
                            <Text>{global.item.formatted_address}</Text>
                            <Text>{global.item.formatted_phone_number}</Text>
                            <Text>{global.item.opening_hours.weekday_text[global.day]}</Text>
                            <Text>{global.item.website}</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.Right}>
                    <Image
                        source={{ uri: '/Users/lithelli/Desktop/FinalProject/src/assets/pics/' + global.item.picid + '.jpg'}}
                        style={{ width: 200, height: 200 }}
                    />
                    <Text>
                        Description
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    Left: {
        flexDirection: "column",
        backgroundColor: "whitesmoke",
        width: "50%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    Right: {
        flexDirection: "column",
        backgroundColor: "grey",
        width: "50%",
    },
    Container: {
        flexDirection: "row",
        height: "100%"
    },
    Bottom:{
        justifyContent: 'space-evenly'
    },
})