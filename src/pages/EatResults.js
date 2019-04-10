import React, { Component } from 'react'
import { Text, SafeAreaView, ImageBackground, StyleSheet, ScrollView, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class EatResults extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Eat Results"
        }
    }


  render() {
    return (
    <ScrollView>
      <SafeAreaView>
            <ImageBackground style={styles.resultC}>
                <Text style={styles.Name}>
                    Name
                </Text>
                <Text style={styles.Type}>
                    Type
                </Text>
            </ImageBackground>
          {/* This will be a map of the results from the parent choice */}
        </SafeAreaView>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    resultC:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 1,
        backgroundColor: "red",
        width: "100%",
        height: "100%",
        paddingTop: 20,
        paddingBottom: 20,
    },
    Name:{
        fontSize: 40,
    },
    Type:{
        fontSize: 30,
    }
})