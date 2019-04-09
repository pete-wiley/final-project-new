import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
        buttonStyle= {styles.button}
        title="Eat"
        raised = {true}
        />
        <Button
        buttonStyle= {styles.button}
        title="Do"
        raised = {true}
        />
        <Button
        buttonStyle= {styles.button}
        title="See"
        raised = {true}
        />
        <Button
        buttonStyle= {styles.button}
        title="Drink"
        raised = {true}
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%'
  },
  button: {
    width: 200,
    height: 50,
  }
})