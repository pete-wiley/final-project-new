import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet, Linking } from 'react-native'
import { Text, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';


export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackTitle: null,
            title: "Details",
            headerStyle: { backgroundColor: '#CFDBD5' },
            headerTitleStyle: { fontSize: 25 },
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            days: []
        };
    }

    render() {

        const url = global.item.website
        const Phone = global.item.formatted_phone_number
        

        return(
            <ScrollView style={{marginBottom: 60}}>
                <View style={styles.Image}>
                    <Image
                        source={{ uri: '/Users/lithelli/Desktop/FinalProject/src/assets/pics/' + global.item.picid + '.jpg'}}
                        style={{height:200, width: '100%'}}
                    />
                </View>
                <View style={styles.Header}>
                    <Text h3 style={{textAlign: 'center', paddingBottom: 10, marginTop: 10}}>{global.item.name}</Text>
                    <Text h4 style={{textAlign: "center"}}>{global.item.description}</Text>
                </View>
                <View style={styles.Bottom}>
                    <Text style={{textAlign: 'center', paddingBottom: 5, fontSize: 20}}>{global.item.opening_hours.weekday_text[global.day]}</Text>
                    {/* make this link to the maps */}
                    <Text style={{textAlign: 'center', paddingBottom: 5, fontSize: 20}}>{global.item.formatted_address}</Text>
                    {/* make this link to a phone call */}
                    <Text style={{textAlign: 'center', paddingBottom: 5, fontSize: 20}} onPress={() => Linking.openURL(`tel:${Phone}`)}>{Phone}</Text>
                    {/* Style the link maybe a touchable opacity */}
                    <Text style={styles.Website} onPress={() => Linking.openURL(url)}>Check out the Website</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    Bottom:{
        marginTop: 25,
    },
    Website:{
        textAlign: 'center',
        paddingBottom: 5, 
        fontSize: 20, 
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#2A3D45'
    },
    Image:{
        shadowOffset: {width: .2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 5,
        shadowRadius: 10, 
        paddingBottom: 10
    }
})