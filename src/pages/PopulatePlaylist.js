import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Button, ListItem, Overlay, Input } from 'react-native-elements'
import LaunchNavigator from 'react-native-launch-navigator';

export default class PopulatePlaylist extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ paddingTop: 200, paddingLeft: 30, paddingRight: 30 }}>
                    <Text style={{
                        fontSize: 24,
                        textAlign: 'center'
                    }}>Add to your playlist by going to a Details page and clicking "Add to Playlist"</Text>
                </View>
                <View style={{justifyContent: 'space-evenly',}}>
                    <Button
                        buttonStyle={{
                            height: 50,
                            width: 145,
                            borderRadius: 30,
                            marginTop: 50,
                            backgroundColor: '#32D6F1'
                        }}
                        title='Go Home'
                        onPress={() =>
                            this.props.navigation.navigate('Home')
                        }
                    />
                </View>
            </View>
        )
    }
}