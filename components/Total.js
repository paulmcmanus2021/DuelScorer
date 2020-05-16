import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Total = (props) => {

  const p1Total = (
    props.p1CivicScore 
  + props.p1ScienceScore
  + props.p1CommercialScore
  + props.p1GuildsScore
  + props.p1WondersScore
  + props.p1ProgressScore
  + props.p1MoneyScore
  + props.p1MilitaryScore) 

  const p2Total = (
    props.p2CivicScore 
  + props.p2ScienceScore
  + props.p2CommercialScore
  + props.p2GuildsScore
  + props.p2WondersScore
  + props.p2ProgressScore
  + props.p2MoneyScore
  + props.p2MilitaryScore)

  return (
    <View style={styles.title}>
      
      <Text
        keyboardType={'numeric'} 
        style={styles.input} 
        >
        {p1Total}
      </Text>

      <Text style={styles.text}>Total</Text>

      <Text
        keyboardType={'numeric'} 
        style={styles.input} 
        >
        {p2Total}
      </Text>

    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslategrey',
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

export default Total;