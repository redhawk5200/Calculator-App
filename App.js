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
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from './styles';

export default function App() {

  const [name, setName] = useState("");
  
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={(text)=>setName(text)} />
        <TouchableOpacity onPress={()=>Alert.alert("Your Details:","Your name is " + name)}>
          <View style={styles.button} >
            <Text>Press</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>  
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
////<StatusBar style="auto" />j
