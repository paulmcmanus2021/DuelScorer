import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Total = (props) => {
  let p1Total = 0;
  let p2Total = 0;

  Object.keys(props.scores).map(category => {
    p1Total += parseInt(props.scores[category]['p1']);
    p2Total += parseInt(props.scores[category]['p2']);
  });

  return (
    <View style={styles.title}>
      
      <Text 
        style={styles.input} 
        >
        {p1Total}
      </Text>

      <Text style={styles.text}>Total</Text>

      <Text
        style={styles.input} 
        >
        {p2Total}
      </Text>

    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
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

export default Total;