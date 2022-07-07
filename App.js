import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Abdul Wahab Khan.
      </Text>
      <Text style={styles.textStyle}>
        This is React Native.
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
  textStyle: {
    fontSize: 30,
    color: 'purple',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});


//<Text>Hello world kadnoasoasdajoidasj</Text>
//<StatusBar style="auto" />j