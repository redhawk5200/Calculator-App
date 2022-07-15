//to change a data type dynamically you have to import {useState} from react library
import React, {useEffect, useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from './styles';

export default function App() {
  
  return (
      <View style={{backgroundColor:"black",flex:1}}>
        <View style={{backgroundColor:"green",flex:1}}></View>
        <View style={{backgroundColor:"blue",flex:1}}></View>
        <View style={{backgroundColor:"red",flex:1}}></View>
        <View style={{backgroundColor:"pink",flex:1}}></View>
        <View style={{backgroundColor:"purple",flex:2}}></View>
        <View style={{backgroundColor:"brown",flex:1}}></View>
        {/*<Button title='Click Me'/>*/}
      </View>  
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
////<StatusBar style="auto" />j
