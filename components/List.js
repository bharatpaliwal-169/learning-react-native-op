import React,{useState} from 'react';
import {Text,View ,StyleSheet ,  ScrollView , TouchableOpacity} from 'react-native';
import data from '../database';

export default function List() {
  const  [people,setPeople] = useState(data);
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((person)=> {
          return(
            <View key={person.id} >
              <TouchableOpacity>
                <Text style={styles.item}> {person.name} </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal:  20,
    paddingTop: 40
  },
  item:{
    marginTop: 24,
    padding:30,
    backgroundColor:'pink',
    fontSize: 24,
    marginHorizontal:20
  }
})