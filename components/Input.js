import React , {useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function Object_state() {
  
  const [person,setPerson] = useState({
    name: 'Harry',
    age: 24
  })
  return (
    <View style={styles.container}>
      <Text style={styles.text}> This is {person.name}</Text>
      <Text style={styles.text}> his age is : {person.age} </Text>
      <Text style={styles.inputText}>Enter Name:</Text>
      <TextInput style={styles.input} placeholder='e.g: Ram Prasad' 
                  multiline onChangeText={(value)=>setPerson({...person,name: value})}></TextInput>
      <Text style={styles.inputText}>Enter Age:</Text>
      <TextInput style={styles.input} placeholder='e.g: 999' 
                  keyboardType='numeric' onChangeText={(value)=>setPerson({...person,age: value})}></TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor:"#f2f2f2",
    textAlign:"center",
    
  },
  text:{
    color:'#303030',
    fontSize:20,
    padding:8
  },
  input:{
    borderWidth:1,
    borderColor:"#777",
    marginTop:12,
    marginLeft:10,
    padding:8,
    width:200
  },
  inputText:{
    color:'#000',
    fontSize:15,
    padding:10
  },
});
