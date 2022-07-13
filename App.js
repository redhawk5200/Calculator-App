//to change a data type dynamically you have to import {useState} from react library
import React, {useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [fruit, setFruit] = useState([
    {name: 'Apple', key: 1},
    {name: 'Mango', key: 2},
    {name: 'Banana', key: 3},
    {name: 'Orange', key: 4},
    {name: 'Mango', key: 5},
  ]);
  return (
    <View style={styles.container}>
      {fruit.map(item => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    padding: 10,
    margin: 20,
  },
  item: {
    fontSize: 22,
    backgroundColor: 'yellow',
    marginTop: 20,
    padding: 20,
  },
});

//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j