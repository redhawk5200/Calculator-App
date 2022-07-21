import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    btn: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText: {
      fontSize: 30,
      color: 'black',
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
      backgroundColor: '#7F5283',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    calculation: {
      flex: 1,
      backgroundColor: '#7A86B6',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    buttons: {
      flexDirection: 'row',
      flex: 8,
    },
    numbers: {
      flex: 3,
      backgroundColor: '#FEFBF6',
    },
    operations2: {
      flex: 1,
      backgroundColor: '#A6D1E6',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    operations1btn: {
      flex: 3,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    operations1: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#A6D1E6',
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
