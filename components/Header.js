import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> DuelScorer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#77788C',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: "#20232a",
      justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }
  });

export default Header;