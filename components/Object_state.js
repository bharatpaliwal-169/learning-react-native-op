import React , {useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Object_state() {
  
  const [person,setPerson] = useState({
    name: 'Harry',
    age: 24
  })

  const handleClick = () =>{
    if(person.age == 24){
      setPerson({...person,age: 50})
    }else{
      setPerson({...person,age: 24})
    }
  }

  return (
    <View>
      <Text style={styles.text}>
        This is {person.name}
      </Text>
      <Text style={styles.text}> his age is : {person.age} </Text>
      <Button title='Click Me' onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color:'#303030',
    fontSize:30,
    padding:10
  },
});
