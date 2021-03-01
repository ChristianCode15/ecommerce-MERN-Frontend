import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductView from './screens/product/ProductView';
import Header from './shared/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    <ProductView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
