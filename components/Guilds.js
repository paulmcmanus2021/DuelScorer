import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Guilds = () => {
  const [p1GuildScore, setp1GuildScore] = useState(0);
  const [p2GuildScore, setp2GuildScore] = useState(0);

    return (
      <View style={styles.title}>
        
        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp1GuildScore(value)}
         >{p1GuildScore}
        </TextInput>

          <Text style={styles.text}>Guilds</Text>

        <TextInput
         keyboardType={'numeric'} 
         style={styles.input} 
         onChangeText={(value) => setp2GuildScore(value)}
         >{p2GuildScore}
        </TextInput>

      </View>
    )
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: '#5C296B',
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

export default Guilds;