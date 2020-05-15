import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Science = () => {
  const [p1ScienceScore, setp1ScienceScore] = useState(0);
  const [p2ScienceScore, setp2ScienceScore] = useState(0);

    return (
      <View style={styles.title}>
        
        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp1ScienceScore(value)}
         >{p1ScienceScore}
        </TextInput>

          <Text style={styles.text}>Science</Text>

        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp2ScienceScore(value)}
         >{p2ScienceScore}
        </TextInput>

      </View>
    )
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
    padding: 5,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
  },
});

export default Science;