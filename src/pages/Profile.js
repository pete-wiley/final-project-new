import React, { Component } from 'react'
import { View, SafeAreaView, Image, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft:
                <Icon
                    name="bars"
                    size={30}
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()} />,
            title: "Profile"
        }
    }

  render() {
    return (
        <SafeAreaView>
            <View style={styles.UserInfo}>
                <View style={styles.Image}>
                    <Image
                    style = {{width: 100, height: 100}}
                    borderRadius= {50}
                    source={{uri: "https://411mania.com/wp-content/uploads/2018/04/John-Cena-Raw-4218-645x370.jpg"}}/>
                </View>
                <View style={styles.Name}>
                    <Text style={{fontSize: 35}}>John Cena</Text>
                    <Text style={{fontSize: 16}}>Johnnie@gmail.com</Text>
                </View>
            </View>
            <View style={styles.UserContent}>
            <View style={styles.FoodTruck}>
                    <Button
                    title = "Add Food Truck"
                    raised = {true}
                    />
                </View>
                <View style={styles.Reviews}>
                    <Text h3 style={{paddingBottom: 20}}>My Reviews</Text>
                    {/* HardCode or Map. Probably Hard Code */}
                    <Text>YUM</Text>
                    <Text>Not YUM</Text>
                </View>
                
            </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    UserInfo:{
      flexDirection:"column",
      borderBottomWidth: 1,
      marginBottom: 20,
      paddingRight: 3,
      paddingLeft: 3,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: "#BDBBB6"
    },
    Name:{
        // flex:1,
        alignItems: "center",
        // paddingRight: 15,
        marginBottom: 4,
        justifyContent: "center"
    },
    Image:{
        // flex:1,
        alignItems: "center",
        // paddingRight: 10,
        justifyContent: "center"
    },
    UserContent:{
        flexDirection:"column",
        height: "75%"
    },
    Reviews:{
        flex:1,
        alignItems:"center",
        justifyContent: "flex-start"
    },
    FoodTruck:{
        // flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 40,
    }
})