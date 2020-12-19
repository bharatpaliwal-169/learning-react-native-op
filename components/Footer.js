import React from 'react';
import { View , Text , StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View style = {styles.footer}>
      <Text style = {styles.text} > Developed by Bharat Paliwal </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    top:265,
    height:60,
    padding:5,
    backgroundColor:'#c3c3c3'
  },
  text:{
    fontSize: 15,
    fontWeight:'200',
    textAlign:"right",
    padding:2,
    margin:2,
    color: "#f3f3f3"
  }
})
