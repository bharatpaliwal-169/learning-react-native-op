import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import Input from './components/Input';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    

    <View style={styles.container}>
      <Header />
      <Input />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
