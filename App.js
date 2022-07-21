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

export default class App extends React.Component{
  
  constructor(){
    super()
    this.state={
      resultText: ""
    }
    this.operations=['√','%','DEL','AC','+','x','÷','='];
  }

  calculationofText(){
    const text = this.state.resultText;
    //seperating operators

  }

  buttonPressed(text){
    console.log(text)

    if(text === '='){
      return this.calculationofText(this.state.resultText);
    }

    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operation){
    switch(operation){
      case 'DEL':
        let text = this.state.resultText.split('');
        text.pop();
        this.setState({
          resultText: text.join('')
        })
        break
      case '+':
      case '-':
      case '÷':
      case 'x':
        
        const lastChar = this.state.resultText.split('').pop()
        
        if(this.operations.indexOf(lastChar) > 0) return


        if(this.state.text === ""){ 
          return
        }
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  render(){
    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.', '-']];

    for(let i=0; i<4; i++){
      let row = []
      for(let j=0; j<3; j++){
        row.push(<TouchableOpacity onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    
    let ops1=[];
    for(let i=0;i<3;i++){
      ops1.push(<TouchableOpacity  onPress={()=>this.operate(this.operations[i])} style={styles.operations1btn}>
        <Text style={styles.btnText}>{this.operations[i]}</Text></TouchableOpacity>)
    }

    let ops2=[];
    for(let i=3;i<8;i++){
      ops2.push(<TouchableOpacity onPress={()=>this.operate(this.operations[i])} style={styles.btn}>
        <Text style={styles.btnText}>{this.operations[i]}</Text></TouchableOpacity>)
    }

    return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calText}>121</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.operations1}>
                  {ops1}
              </View>
                {rows}
            </View>
            <View style={styles.operations2}>
                {ops2}
            </View>
          </View>
        </View>  
    );
  }
}


//<Text>Hello world </Text>
////<StatusBar style="auto" />j
