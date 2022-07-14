//to change a data type dynamically you have to import {useState} from react library
import React, {useState} from 'react';

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
} from 'react-native';

import styles from './styles';

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const noHandler = () =>{
    setName("");
    setAge(0);
    setGender("");
  }

  const pressHandler = () =>{
    //An alert is generated with the dialogue down below 
    Alert.alert("Details","Are you sure you want submit?",[
      //on Pressing yes the console outputs Yes is pressed
      {text: "Yes", onPress: () => console.log("Yes is pressed")},
      //on Pressing no the console initiates noHandler method which initializes all the values to default state
      {text: "No", onPress: () => noHandler()},
    ])
  }

  return (
    <View style={styles.container}>
      <TextInput  style={styles.input} onChangeText={(text)=>setName(text)}  placeholder="Enter your name"/>
      <TextInput  style={styles.input} onChangeText={(text)=>setAge(text)}  placeholder="Enter your age"/>
      <TextInput  style={styles.input} onChangeText={(text)=>setGender(text)}  placeholder="Enter your gender"/>
        {/*on press of the button Submit the pressHandler() method is initiated*/}      
      <Button title="Submit" style={styles.button} onPress={()=>pressHandler()}/>
      <Text> Your name is {name}, your age is {age} and your gender is {gender}</Text>
    </View>
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
////<StatusBar style="auto" />j
