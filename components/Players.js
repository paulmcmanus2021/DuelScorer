import React, { useState} from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Players = () => {
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
    flex: 1,
    backgroundColor: '#efdfbb',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    borderColor: "#20232a",
    borderBottomWidth: 1,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#20232a",
    width: 75,
    padding: 5,
    textAlign: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
  },
});

export default Players;