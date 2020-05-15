import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Wonders = () => {
  const [p1WonderScore, setp1WonderScore] = useState(0);
  const [p2WonderScore, setp2WonderScore] = useState(0);

    return (
      <View style={styles.title}>
        
        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp1WonderScore(value)}
         >{p1WonderScore}
        </TextInput>

          <Text style={styles.text}>Wonders Built</Text>

        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp2WonderScore(value)}
         >{p2WonderScore}
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