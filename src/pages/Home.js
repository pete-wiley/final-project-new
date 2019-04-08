import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Button>Eat</Button>
        <Button>Do</Button>
        <Button>See</Button>
        <Button>Drink</Button>
      </SafeAreaView>
    )
  }
}
