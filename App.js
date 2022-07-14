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

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('./assets/image1.jpg')}/>
      </View>
    </View>
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j
