//to change a data type dynamically you have to import {useState} from react library
import React, {useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Abdul Wahab');
  const [age, setAge] = useState(24);
  return (
    <View style={styles.container}>
      <Text>Enter your name: </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        placeholder="Enter your name"
        keyboardType="default"
      />
      <Text>Enter your age: </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setAge(text)}
        placeholder="Enter your Age"
        keyboardType="numeric"
      />
      <Text>
        My name is {name} and my age is {age} years.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    margin: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 150,
  },
});

//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j
