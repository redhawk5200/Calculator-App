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
      resultText: "",
      caltext: "0",
    }
    this.operations=['√','%','DEL','AC','+','*','/','-'];
  }

  calculationresult(){
    const text = this.state.resultText;
    if(text.search('%') != -1){
      const percent = text.replace(/%/g, '')
      let num= parseInt(percent)
      this.setState({
        caltext: num/100
      })
    }
    else if(text.search('√') != -1){
      const percent = text.replace(/√/g, '')
      let num= parseInt(percent)
      this.setState({
        caltext: Math.sqrt(num)
      })
    }
    else{
      //seperating operators
      this.setState({
        caltext: eval(text)
      })
    }
  }

  validate(){
    const text = this.state.resultText;
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '/':
      case '*':
      case '√':
        return false
    }
    return true
  }

  buttonPressed(text){
    //console.log(text)

    if(text == '='){
      return this.validate() && this.calculationresult();
    }

    this.setState({
      resultText: this.state.resultText+text
    })
  }

  operate(operation){
    switch(operation){
      case 'AC':
        this.state.resultText='0';
        this.state.caltext='0';
      case 'DEL':
        let text = this.state.resultText.split('');
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
      case '+':
      case '-':
      case '/':
      case '*':
      case '%':
      case '√':
        
        const lastChar = this.state.resultText.split('').pop()
        
        if(this.operations.indexOf(lastChar) > 0) return

        if(this.state.text == "") return
        
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  render(){
    let rows = []
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '.', '=']];

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
        <Text style={styles.opText}>{this.operations[i]}</Text></TouchableOpacity>)
    }

    let ops2=[];
    for(let i=3;i<8;i++){
      ops2.push(<TouchableOpacity onPress={()=>this.operate(this.operations[i])} style={styles.operations2btn}>
        <Text style={styles.opText}>{this.operations[i]}</Text></TouchableOpacity>)
    }

    return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calText}>{this.state.caltext}</Text>
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