import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Input from './components/Input';
// import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import FlatListEg from './components/FlatListEg';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatListEg />
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
