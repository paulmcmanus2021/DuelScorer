import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Military = () => {
  const [p1MilitaryScore, setp1MilitaryScore] = useState(0);
  const [p2MilitaryScore, setp2MilitaryScore] = useState(0);

    return (
      <View style={styles.title}>
        
        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp1MilitaryScore(value)}
         >{p1MilitaryScore}
        </TextInput>

          <Text style={styles.text}>Military</Text>

        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp2MilitaryScore(value)}
         >{p2MilitaryScore}
        </TextInput>

      </View>
    )
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#C21924',
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

export default Military;