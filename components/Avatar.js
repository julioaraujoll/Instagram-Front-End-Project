import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar({ url }){
  return (
    <Image source={{ uri:url }} style={styles.avatar}/>
  )
}

const styles = StyleSheet.create({
  avatar:{
    width:80,
    height:80,
    borderRadius:40
  }
})