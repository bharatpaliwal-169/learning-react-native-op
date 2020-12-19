import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import Object_state from './components/Object_state';


export default function App() {
  return (
    

    <View style={styles.container}>
      <Object_state/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  },
  text:{
    color:'#303030',
    fontSize:20,
    padding:20
  },
  // img:{
  //   width: 100,
  //   height:100,
  //   borderRadius:100/2,
  // },
});
