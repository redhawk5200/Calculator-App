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

import styles from './styles';

export default function App(){

  const [name,setName] = useState("");
  const [age, setAge] = useState(0);
  const [open, setOpen] = useState(false);
  
  return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter your name" onChangeText={(text)=>setName(text)}/>
        <TextInput style={styles.input} placeholder="Enter your age" onChangeText={(text)=>setAge(text)}/>
        <Button style={styles.button}  title='Click me' onPress={()=>setOpen(true)}/>
          <Modal visible={open}>
            <Text style={styles.text}>Your name is {name} and your age is {age} years old</Text>
            <Button style={styles.button}  title='Click me to change details' onPress={()=>setOpen(false)}/>
          </Modal>
      </View>  
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
////<StatusBar style="auto" />j
