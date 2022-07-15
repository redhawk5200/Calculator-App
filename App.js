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
  Modal,
} from 'react-native';

import Greetings from './Greetings';
import Display from './Display';
import styles from './styles';

export default function App(){

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
      <View style={styles.container}>
        <TextInput onChangeText={(text)=>setName(text)} style={styles.input} placeholder="Enter your name: "/>
        <TextInput onChangeText={(text)=>setAge(text)} style={styles.input} placeholder="Enter your age: "/>
        <Display name={name} age={age}/>
      </View>  
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
////<StatusBar style="auto" />j
