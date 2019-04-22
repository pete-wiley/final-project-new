import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'


export default class Form extends Component {

    someFunction = () => {

    }

  render() {
    return (
      <View>
          <Text>sup</Text>
          <TextInput
    placeholder="Address"
    maxLength={50}
    onChangeText={streetName => this.setState({ streetName })}
/>

<TextInput
    placeholder="City"
    maxLength={58}
    onChangeText={city => this.setState({ city })}
/>

<TextInput
    placeholder="Postcode"
    maxLength={8}
    onChangeText={postcode => this.setState({ postcode })}
/>
      </View>
    )
  }
}

