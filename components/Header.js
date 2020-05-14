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
      height: 60,
      padding: 15,
      backgroundColor: '#77788C',
      borderBottomWidth: 3,
      borderTopWidth: 3,
      borderColor: "#20232a",
      
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    }
  });

export default Header;