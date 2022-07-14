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
  const [dice, setDice] = useState(0);

  const images = {
    pics: {
      '0':require('./assets/1.jpg'),
      '1':require('./assets/2.jpg'),
      '2':require('./assets/3.jpg'),
      '3':require('./assets/4.jpg'),
      '4':require('./assets/5.jpg'),
      '5':require('./assets/6.jpg'),
    }
  }

  return (
    <View style={styles.container}>
      <Image source={images.pics[dice]}/>
      <Button title='Roll Dice' onPress={()=>setDice(Math.floor(Math.random()*6))}/>
    </View>
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
////<StatusBar style="auto" />j
