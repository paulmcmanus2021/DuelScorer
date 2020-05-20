import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const Background = (props) => {

    return (
        <View style={styles.backgroundContainer}>
            <Header style={styles.header}  />
            {props.categoriesArray.map((category, index) => 
            <Text
                key={index}
                style={[styles.categories, {"backgroundColor": category.backgroundColor}]}
                >{category.name}
            </Text>
            )}    
        </View>
    )}

    const styles = StyleSheet.create({
        backgroundContainer: {
            flex:1
        },
        header: {
            flex: 1
        },
        categories: {
            flex: 10,
            fontSize: 20,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderWidth: 1,
            borderColor: "#20232a",
        }
      });

    
export default Background;

