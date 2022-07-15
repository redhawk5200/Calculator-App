//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {
    Alert,
  Text,
  View,
} from 'react-native';

import styles from './styles';

export default function Display(props){

    if(props.age>18){
        Alert.alert("You are allowed to drink");
    }else{
        Alert.alert("You are not allowed to drink");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello! Good Sir {props.name}</Text>   
        </View>
    );
}