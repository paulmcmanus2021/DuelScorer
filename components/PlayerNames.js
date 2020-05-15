import React, { useState} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const PlayerNames = () => {
  const [p1Name, setp1Name] = useState("");
  const [p2Name, setp2Name] = useState("");
    

    return (
      <View style={styles.title}>
        
        <TextInput
         style={styles.input} 
         onChangeText={(value) => setp1Name(value)}
         >{p1Name}
        </TextInput>

          <Text style={styles.text}>Player Name</Text>

        <TextInput
         style={styles.input} 
         onChangeText={(value) => setp2Name(value)}
         >{p2Name}
        </TextInput>

      </View>
    )
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#efdfbb',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#20232a",
    width: 75,
    padding: 5,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
  },
});

export default PlayerNames;