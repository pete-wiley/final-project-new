import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Button, ListItem, Overlay, Input } from 'react-native-elements'
import LaunchNavigator from 'react-native-launch-navigator';
import { SafeAreaView } from 'react-navigation';

export default class Playlists extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      playlistName: '',
      loading: true,
      isVisible: false
    }
  }

  getItems = async () => {
    try {
      let response = await fetch('https://bham-gems-api.herokuapp.com/playlist', {
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
          gotRes: 1,
          loading: false
        })
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  }

  makePlaylist = async () => {
    try {
      let response = await fetch('https://bham-gems-api.herokuapp.com/playlist', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.playlistName,
          places: []
        })
      })
      let res = await response.json();
      if (res.errors) {
        this.setState({ errors: res.errors });
      } else {
        this.setState({
          isVisible: false
        })
        console.log(res)
      }
    } catch (errors) {
      console.log('catch err');
      console.log(errors);
    }
  }

  clicked = (thing) => {
    global.places = thing.places
    console.log('THESE ARE GLOBAL PLACES: ' + global.places)
    if (global.places == '') {
      this.props.navigation.navigate('PopulatePlaylist')
    } else {
      this.props.navigation.navigate('PlaylistDetails')
    }
  }

  render() {
    this.getItems()
    return (
      <ScrollView>
        {
          this.state.loading ?
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator style={{ paddingTop: 325 }} size="large" />
            </View>
            :
            <SafeAreaView>
              <Overlay
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                overlayStyle={{
                  height: 300
                }}
              >
                <Text style={{ fontSize: 25 }}>What would you like to name this playlist?</Text>
                <Input
                  inputContainerStyle={{
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 20
                  }}
                  containerStyle={{
                    marginTop: 40
                  }}
                  placeholder='Playlist Name'
                  onChangeText={(playlistName) => this.setState({ playlistName })}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <Button
                    buttonStyle={{
                      height: 50,
                      width: 145,
                      borderRadius: 30,
                      marginTop: 40,
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
                      marginTop: 40,
                      backgroundColor: '#32D6F1'
                    }}
                    title='Create'
                    onPress={() =>
                      this.makePlaylist()
                    }
                  />
                </View>
              </Overlay>
              <View style={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center'
              }}>
                <Button
                  buttonStyle={{
                    height: 50,
                    width: 350,
                    borderRadius: 30,
                    marginTop: 30,
                    backgroundColor: '#32D6F1',
                    marginBottom: 30
                  }}
                  title='New Playlist'
                  onPress={() => {
                    this.setState({
                      isVisible: true
                    })
                  }}
                />

                {
                  this.state.items.map((l, i) => (
                    <ListItem
                      key={i}
                      containerStyle={{ backgroundColor: 'rgba(25, 25, 25, 0.6)', width: '100%', marginBottom: 2 }}
                      title={l.name}
                      titleStyle={{
                        fontSize: 25,
                        paddingBottom: 6,
                        color: 'white',
                      }}
                      bottomDivider
                      chevron
                      onPress={() =>
                        this.clicked(l)
                      }
                    />
                  ))
                }
              </View>
            </SafeAreaView>
        }
      </ScrollView>
    )
  }
}
