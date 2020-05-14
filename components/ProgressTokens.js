import React, {Component} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

class ProgressTokens extends Component {
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
          <Text style={styles.text}>Progress Tokens</Text>
        <TextInput keyboardType={'numeric'} style={styles.input}></TextInput>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#E1DEAD',
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

export default ProgressTokens;