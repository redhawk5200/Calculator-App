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
} from 'react-native';

export default function App() {
  const [fruit, setFruit] = useState([
    {name: 'Apple', key: 1},
    {name: 'Mango', key: 2},
    {name: 'Banana', key: 3},
    {name: 'Orange', key: 4},
    {name: 'Mango', key: 5},
    {name: 'Apple', key: 6},
    {name: 'Mango', key: 7},
    {name: 'Banana', key: 8},
    {name: 'Orange', key: 9},
    {name: 'Mango', key: 10},
    {name: 'Apple', key: 11},
    {name: 'Mango', key: 12},
    {name: 'Banana', key: 13},
    {name: 'Orange', key: 14},
    {name: 'Mango', key: 15},
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={fruit}
        renderItem={({item})=> (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />
      {/*<ScrollView>
        {fruit.map(item => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>*/}
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
