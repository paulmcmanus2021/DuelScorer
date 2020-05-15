import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Total = () => {
  const [p1Total, setp1Total] = useState(0);
  const [p2Total, setp2Total] = useState(0);

    return (
      <View style={styles.title}>
        
        <Text style={styles.input}>
          {p1Total}
        </Text>

          <Text style={styles.text}>Total</Text>

        <Text style={styles.input}>
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