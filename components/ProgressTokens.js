import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const ProgressTokens = () => {
  const [p1ProgressTokenScore, setp1ProgressTokenScore] = useState(0);
  const [p2ProgressTokenScore, setp2ProgressTokenScore] = useState(0);

    return (
      <View style={styles.title}>
        
        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp1ProgressTokenScore(value)}
         >{p1ProgressTokenScore}
        </TextInput>

          <Text style={styles.text}>Progress Tokens</Text>

        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp2ProgressTokenScore(value)}
         >{p2ProgressTokenScore}
        </TextInput>

      </View>
    )
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
    padding: 5,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
  },
});

export default ProgressTokens;