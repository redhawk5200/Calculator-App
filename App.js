//to change a data type dynamically you have to import {useState} from react library
import React, {useState} from 'react';

//here we import the properties like text, buttons etc from react native
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('This is the old name');
  const [person, setPerson] = useState({name: 'Abdur Rafay', age: 20});

  //creating a function changeme to run when user clicks the button
  const clickme = () => {
    setName('This is the new name');
    setPerson({name: 'Abdul Wahab', age: 22});
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>
        My name is {person.name} and age is {person.age}
      </Text>
      <View style={styles.button}>
        {/*the button will initiate the method clickme when the user will click it using the property onPress of the button*/}
        <Button
          title="change"
          color="green"
          onPress={clickme}
          touchSoundDisabled={false}
        />
      </View>
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
    backgroundColor: 'red',
    padding: 10,
    margin: 20,
  },
});

//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j
