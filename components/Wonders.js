import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Wonders = (props) => {
  
  return (
    <View style={styles.title}>
      
      <TextInput
        keyboardType={'numeric'} 
        style={styles.input} 
        >
        {props.p1WondersScore}
      </TextInput>

      <Text style={styles.text}>Wonders Built</Text>

      <TextInput
        keyboardType={'numeric'} 
        style={styles.input} 
        >
        {props.p2WondersScore}
      </TextInput>

    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#AF890E',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#20232a",
    width: 50,
    padding: 5,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
  },
});

export default Wonders;