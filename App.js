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

  return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
              <TouchableOpacity><Text>0</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
          </View>
        </View>
      </View>  
  );
}


//<Text>Hello world </Text>
////<StatusBar style="auto" />j
