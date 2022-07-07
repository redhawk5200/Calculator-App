import React from 'react';

//here we import the properties like text, buttons etc from react native 
import {StyleSheet, Text, View, StatusBar, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='Click me' color="red" onPress={()=>alert('Welcome to my first app')} disabled={false}>

      </Button>
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
});


//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j