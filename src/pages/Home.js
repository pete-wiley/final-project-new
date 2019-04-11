import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import { Button, ListItem } from 'react-native-elements'
import  Icon  from 'react-native-vector-icons/FontAwesome';
import {BoxShadow} from 'react-native-shadow'



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
        <Text style={styles.banner}>
          What do you want to do?
        </Text>
        <BoxShadow style={styles.shadowOpt}>
          <ListItem
          containerStyle = {styles.ListItem}
          title="Eat"
          onPress={() => this.props.navigation.navigate('EatResults')}
          />
        </BoxShadow>
        <ListItem
        containerStyle= {styles.ListItem}
        title="Do"
        raised = {true}
        onPress={() => this.props.navigation.navigate('DoResults')}
        />
        <ListItem
        containerStyle= {styles.ListItem}
        title="See"
        raised = {true}
        onPress={() => this.props.navigation.navigate('SeeResults')}
        />
        <ListItem
        containerStyle= {styles.ListItem}
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
    height: 85
  },
  ListItem: {
    width: 100,
    height: 144,
    // borderBottomWidth: 1,
    margin: 0,
    backgroundColor: 'whitesmoke',
    elevation: 1,
  },
  banner: {
    fontSize: 35,
    alignItems: 'center'
  },
  shadowOpt: {
    
  }  
})