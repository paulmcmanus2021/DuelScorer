import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Civic = (props) => {

  const [p1localCivicScore, setp1localCivicScore] = useState(props.p1CivicScore);
  const [p2localCivicScore, setp2localCivicScore] = useState(props.p2CivicScore);

    // console.log("Local p1 Civic score is " + p1localCivicScore);
    // console.log("State/props p1 Civic score is " + props.p1CivicScore);
    // console.log("Local p2 Civic score is " + p2localCivicScore);
    // console.log("State/props p2 Civic score is " + props.p2CivicScore);


    return (
      <View style={styles.title}>
        
        <TextInput
          keyboardType={'numeric'} 
          style={styles.input} 
          onChangeText={(value) => setp1localCivicScore(value)}
          >
          {p1localCivicScore}
        </TextInput>

        <Text style={styles.text}>Civic</Text>

        <TextInput
          keyboardType={'numeric'} 
          style={styles.input} 
          onChangeText={(value) => setp2localCivicScore(value)}
          >
          {p2localCivicScore}
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