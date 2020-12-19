import React from 'react';
import { View , Text , StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style = {styles.header}>
      <Text style = {styles.text} > My App </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height:100,
    padding:15,
    backgroundColor:'#a3a3a3'
  },
  text:{
    fontSize: 30,
    fontWeight:'bold',
    textAlign:"center",
    padding:2,
    margin:2,
    color: "#000"
  }
})
