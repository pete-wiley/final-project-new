import React, { Component } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

export default class Details extends Component {
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <View style={styles.Left}>
            <View style={styles.Top}>
                <Text h3>Name</Text>
                <Text h4>Type</Text>
            </View>
            <View style={styles.Bottom}>
                {/* this is where the details are mapped through per place */}
                <Text>Address</Text>
                <Text>Phone</Text>
                <Text>Hours</Text>
                <Text>Website</Text>
            </View>
            
        </View>
        
        <View style={styles.Right}>
            <Text>
                test
            </Text>
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
    Left:{
        flexDirection: "column",
        backgroundColor:"whitesmoke",
        justifyContent: "space-between",
        alignItems:"center",
        width:"50%",
        height: "100%"
    },
    Right:{
        flexDirection: "column",
        backgroundColor: "grey",
        width:"50%",
    },
    Container:{
        flexDirection:"row",
        height:"100%"
    },
})