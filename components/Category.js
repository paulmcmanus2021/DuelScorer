import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Category = (props) => {
    return (
        <View style={[{ backgroundColor: props.backgroundColor }, styles.title]}>

            <TextInput
                selectTextOnFocus={true}
                keyboardType={'numeric'}
                style={styles.input}
                onChangeText={(value) => props.updateScore(value, props.name, "p1")}
            >
                {props.scores.p1}
            </TextInput>

            <Text style={styles.text}>{props.scores.title}</Text>

            <TextInput
                selectTextOnFocus={true}
                keyboardType={'numeric'}
                style={styles.input}
                onChangeText={(value) => props.updateScore(value, props.name, "p2")}
            >
                {props.scores.p2}
            </TextInput>

        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
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

export default Category;