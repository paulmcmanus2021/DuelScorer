import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';

const Player = (props) => {
    const [values, update] = useState({ 
        name: '',
        civic: 0, 
        science: 0, 
        commercial: 0, 
        guilds: 0, 
        wonders: 0, 
        tokens: 0,
        money: 0,
        military: 0
    })

    const runningTotal = (
          parseInt(values.civic)
        + parseInt(values.science)
        + parseInt(values.commercial)
        + parseInt(values.guilds)
        + parseInt(values.wonders)
        + parseInt(values.tokens)
        + parseInt(values.money)
        + parseInt(values.military)
    )
    
    return(
        <View style={styles.container}>
            <View style={styles.form} >
                <TextInput onChangeText={(value) => update({...values,name: value})} style={[styles.input, {"width": 80}]}>{values.name}</TextInput>

                    <TextInput onChangeText={(value) => update({...values,civic: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.civic}</TextInput>
                    <TextInput onChangeText={(value) => update({...values,science: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.science}</TextInput>
                    <TextInput onChangeText={(value) => update({...values,commercial: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.commercial}</TextInput>
                    <TextInput onChangeText={(value) => update({...values,guilds: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.guilds}</TextInput>
                    <TextInput onChangeText={(value) => update({...values,wonders: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.wonders}</TextInput>
                    <TextInput onChangeText={(value) => update({...values,tokens: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.tokens}</TextInput>
                    <TextInput onChangeText={(value) => update({...values,money: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.money}</TextInput>
                    <TextInput onChangeText={(value) => update({...values,military: value})} style={styles.input} keyboardType={'numeric'} selectTextOnFocus={true}>{values.military}</TextInput>

                <Text style={[styles.input, {"textAlignVertical": 'center'}]}>{runningTotal}</Text>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 80,
        marginTop: 60,
        height: 600
    },
    form:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-around'
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#20232a",
        width: 60,
        height: 40,
        textAlign: 'center',
    },
});




export default Player;