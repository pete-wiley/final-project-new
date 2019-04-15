import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet, Linking } from 'react-native'
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
        };
    }

    render() {

        const url = global.item.website
        const Phone = global.item.formatted_phone_number
        

        return(
            <SafeAreaView>
                <Image
                        source={{ uri: '/Users/lithelli/Desktop/FinalProject/src/assets/pics/' + global.item.picid + '.jpg'}}
                        style={{ width: "100%", height: 200 }}
                    />
                <View style={styles.Header}>
                    <Text h3 style={{textAlign: 'center', paddingBottom: 10, marginTop: 10}}>{global.item.name}</Text>
                    <Text h4 style={{textAlign: "center"}}>{global.item.description}</Text>
                </View>
                <View style={styles.Bottom}>
                <Text style={{textAlign: 'center'}}>{global.item.opening_hours.weekday_text[global.day]}</Text>
                    {/* make this link to the maps */}
                    <Text style={{textAlign: 'center'}}>{global.item.formatted_address}</Text>
                    {/* make this link to a phone call */}
                    <Text style={{textAlign: 'center'}} onPress={() => Linking.openURL(`tel:${Phone}`)}>{Phone}</Text>
                    {/* Style the link maybe a touchable opacity */}
                    <Text style={{textAlign: 'center'}} onPress={() => Linking.openURL(url)}>{url}</Text>
                </View>
            </SafeAreaView>
        )
    }
}



// const url="https://google.com"

// <Text onPress={() => Linking.openURL(url)}>
//     {url}
// </Text>






const styles = StyleSheet.create({
    Header: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    Bottom:{
        marginTop: 25,
        
    },
})