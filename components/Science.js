import React, {Component} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

class Science extends Component {
  constructor() {
    super();
    this.state = {
      p1score: 0,
      p2score: 0
  }
}

  render() {
    return (
      <View style={styles.title}>
        <TextInput keyboardType={'numeric'} style={styles.input}></TextInput>
          <Text style={styles.text}>Scientific</Text>
        <TextInput keyboardType={'numeric'} style={styles.input}></TextInput>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#0F6A1F',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#20232a",
    width: 50,
    padding: 5
  },
  text: {
    fontSize: 20,
  },
});

export default Science;