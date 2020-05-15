import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Civic = () => {
  const [p1CivicScore, setp1CivicScore] = useState(0);
  const [p2CivicScore, setp2CivicScore] = useState(0);

  console.log(p1CivicScore);
  console.log(p2CivicScore);
  

    return (
      <View style={styles.title}>
        
        <TextInput
         clearTextOnFocus={true}
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp1CivicScore(value)}
         >{p1CivicScore}
        </TextInput>

          <Text style={styles.text}>Civic</Text>

        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp2CivicScore(value)}
         >{p2CivicScore}
        </TextInput>

      </View>
    )
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#0273A9',
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

export default Civic;