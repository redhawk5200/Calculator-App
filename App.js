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
} from 'react-native';

import styles from './styles';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Vincius Jr', key: 1},
    {name: 'Mendy', key: 2},
    {name: 'Karim Benzema', key: 3},
    {name: 'Carvajal', key: 4},
    {name: 'Eder Militao', key: 5},
    {name: 'David Alaba', key: 6},
    {name: 'Rodrygooo', key: 7},
    {name: 'Luka Modric', key: 8},
    {name: 'Cavaminga', key: 9},
    {name: 'Toni Kroos', key: 10},
    {name: 'Valverde', key: 11},
    {name: 'Lucas Vasquez', key: 12},
    {name: 'Nacho', key: 13},
    {name: 'Dani Ceballos', key: 14},
  ]);

  const pressHandler = name => {
    console.log(name);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}


//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j
