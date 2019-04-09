import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerLeft:
            <Icon
                name="bars"
                size={30}
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.openDrawer()} />,
        title: "Home"
    }
}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
        buttonStyle= {styles.button}
        title="Eat"
        raised = {true}
        onPress={() => this.props.navigation.navigate('EatResults')}
        />
        <Button
        buttonStyle= {styles.button}
        title="Do"
        raised = {true}
        onPress={() => this.props.navigation.navigate('DoResults')}
        />
        <Button
        buttonStyle= {styles.button}
        title="See"
        raised = {true}
        onPress={() => this.props.navigation.navigate('SeeResults')}
        />
        <Button
        buttonStyle= {styles.button}
        title="Drink"
        raised = {true}
        onPress={() => this.props.navigation.navigate('DrinkResults')}
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
  },
})