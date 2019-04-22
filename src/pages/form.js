import React, { Component } from 'react'
import { Text, View, TextInput, Picker, StyleSheet } from 'react-native'


export default class Form extends Component {

    constructor(){
      super()
      this.state = {
        openTime: '',
        closeTime: '',
        location: ''
      }
    }
    

  render() {
    return (
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
          <TextInput
            placeholder="Location"
            maxLength={50}
            style = {styles.input}
            onChangeText={location => this.setState({ location })}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{ paddingRight: 10}}>Opening</Text>
            <Text>Closing</Text>
          </View>
          <View style={{flexDirection: 'row'}}> 
            <Picker
              selectedValue={this.state.openTime}
              style={{height: 50, width: 75, paddingRight: 10}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({openTime: itemValue})
              }>
              <Picker.Item label="8am" value="8am" />
              <Picker.Item label="9am" value="9am" />
              <Picker.Item label="10am" value="10am" />
              <Picker.Item label="11am" value="11am" />
              <Picker.Item label="12pm" value="12pm" />
              <Picker.Item label="1pm" value="1pm" />
              <Picker.Item label="2pm" value="2pm" />
              <Picker.Item label="3pm" value="3pm" />
              <Picker.Item label="4pm" value="4pm" />
              <Picker.Item label="5pm" value="5pm" />
              <Picker.Item label="6pm" value="6pm" />
              <Picker.Item label="7pm" value="7pm" />
              <Picker.Item label="8pm" value="8pm" />
              <Picker.Item label="9pm" value="9pm" />
              <Picker.Item label="10pm" value="10pm"/>
              <Picker.Item label="11pm" value="11pm"/>
              <Picker.Item label="12am" value="12am"/>
            </Picker>
            <Picker
              selectedValue={this.state.closeTime}
              style={{height: 50, width: 75}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({closeTime: itemValue})
              }>
              <Picker.Item label="8am" value="8am" />
              <Picker.Item label="9am" value="9am" />
              <Picker.Item label="10am" value="10am" />
              <Picker.Item label="11am" value="11am" />
              <Picker.Item label="12pm" value="12pm" />
              <Picker.Item label="1pm" value="1pm" />
              <Picker.Item label="2pm" value="2pm" />
              <Picker.Item label="3pm" value="3pm" />
              <Picker.Item label="4pm" value="4pm" />
              <Picker.Item label="5pm" value="5pm" />
              <Picker.Item label="6pm" value="6pm" />
              <Picker.Item label="7pm" value="7pm" />
              <Picker.Item label="8pm" value="8pm" />
              <Picker.Item label="9pm" value="9pm" />
              <Picker.Item label="10pm" value="10pm"/>
              <Picker.Item label="11pm" value="11pm"/>
              <Picker.Item label="12am" value="12am"/>
            </Picker>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input:{
    borderBottomWidth: 1, 
    width: '50%', 
    height: '20%',
    alignSelf: 'center'
  }
})