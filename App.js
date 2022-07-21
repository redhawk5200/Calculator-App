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

  let rows = []
  let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', '=']];

  for(let i=0; i<4; i++){
    let row = []
    for(let j=0; j<3; j++){
      row.push(<TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
    }
    rows.push(<View style={styles.row}>{row}</View>)
  }

  let operations=['+','-','*','/','sqrt'];
  let ops=[];
  for(let i=0;i<5;i++){
    ops.push(<TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{operations[i]}</Text></TouchableOpacity>)
  }

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
              {rows}
          </View>
          <View style={styles.operations}>
              {ops}
          </View>
        </View>
      </View>  
  );
}


//<Text>Hello world </Text>
////<StatusBar style="auto" />j
