//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import styles from './styles';

export default function Greetings(){

    const [name, setName] = useState("");

    return(
        <View>
            <TextInput style={styles.input}  placeholder="Enter your name: " onChangeText={(text)=>setName(text)}/>
            <Button title='Greet' onPress={()=>console.log(name)}/>    
        </View>
    );
}