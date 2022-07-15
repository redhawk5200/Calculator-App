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

  const [number, setNumber] = useState(0);

  useEffect(()=>{
    if(number>30){
      console.log("The amount has exceeded the limit");
    }
  })
  
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
        <Button title="Update State" onPress={()=>setNumber(number+1)}/>
      </View>  
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
////<StatusBar style="auto" />j
