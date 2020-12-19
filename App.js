import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello App Development via React native
      </Text>
      <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img} ></Image>
      <Button title='Click Me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454b4f',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
  },
  text:{
    color:'#c4d7e4',
    fontSize:20
  },
  img:{
    width: 100,
    height:100,
    borderRadius:100/2,
  },
});
