import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Heading({ children }){
  return(
    <Text style={styles.heading}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:24,
    fontWeight:'bold',
    marginVertical:15
  }
})