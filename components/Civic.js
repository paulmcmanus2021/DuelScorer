import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Civic = (props) => {

    console.log("Local p1 Civic score is " + props.p1CivicScore);
    console.log("State/props p1 Civic score is " + props.p1CivicScore);
    console.log("Local p2 Civic score is " + props.p2CivicScore);
    console.log("State/props p2 Civic score is " + props.p2CivicScore);
    


    
    return (
      <View style={styles.title}>
        
        <TextInput
          keyboardType={'numeric'} 
          style={styles.input} 
          >
          {props.p1CivicScore}
        </TextInput>

        <Text style={styles.text}>Civic</Text>

        <TextInput
          keyboardType={'numeric'} 
          style={styles.input} 
          >
          {props.p2CivicScore}
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