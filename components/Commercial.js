import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Commercial = () => {
  const [p1CommercialScore, setp1CommercialScore] = useState(0);
  const [p2CommercialScore, setp2CommercialScore] = useState(0);

    return (
      <View style={styles.title}>
        
        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp1CommercialScore(value)}
         >{p1CommercialScore}
        </TextInput>

          <Text style={styles.text}>Commercial</Text>

        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp2CommercialScore(value)}
         >{p2CommercialScore}
        </TextInput>

      </View>
    )
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#F3A624',
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

export default Commercial;