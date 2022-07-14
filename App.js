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
} from 'react-native';

import styles from './styles';

export default function App() {

  const[age, setAge] = useState(0);

  const ageHandler=()=>{
    if(age>18){
      Alert.alert("Yes, you can drink");
    }
    else{
      Alert.alert("No, you can't drink");
    }
  }

  return (
    <View style={styles.container}>
    <TextInput style={styles.input}/>
    <TextInput style={styles.input} onChangeText={(text)=>setAge(text)}/>
    <Button style={styles.button} title="Can I drink?" onPress={()=>ageHandler()}/>

    </View>
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j
