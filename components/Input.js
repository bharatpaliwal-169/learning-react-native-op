import React , {useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function Object_state() {
  
  const [person,setPerson] = useState({
    name: 'Harry',
    age: 24
  })
  return (
    <View>
      <Text style={styles.text}> This is {person.name}</Text>
      <Text style={styles.text}> his age is : {person.age} </Text>
      <Text>Enter Name:</Text>
      <TextInput style={styles.input} placeholder='e.g: Ram Prasad' 
                  multiline onChangeText={(value)=>setPerson({...person,name: value})}></TextInput>
      <Text>Enter Age:</Text>
      <TextInput style={styles.input} placeholder='e.g: 999' 
                  keyboardType='numeric' onChangeText={(value)=>setPerson({...person,age: value})}></TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'#303030',
    fontSize:30,
    padding:10
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    margin:12,
    padding:8,
    width:200
  },
});
