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
  
  const [number, setNumber]=useState(0);

  return (
      <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>setNumber(number+1)}>
          <Text style={styles.text1}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>setNumber(Math.max(number-1,0))} >
          <Text style={styles.text1}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>setNumber(0)}>
          <Text style={styles.text1}>Reset</Text>
        </TouchableOpacity>
      </View>  
  );
}


//<Text>Hello world </Text>
////<StatusBar style="auto" />j
