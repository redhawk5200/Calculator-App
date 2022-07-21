import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    resText: {
      fontSize: 24,
      color: 'white',
    },
    calText:{
      fontSize: 30,
      color: 'white',
    },
    result: {
      flex: 2,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    calculation: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    buttons: {
      flexDirection: 'row',
      flex: 7,
    },
    numbers: {
      flex: 3,
      backgroundColor: 'yellow',
    },
    operations: {
      flex: 1,
      backgroundColor: 'pink',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
