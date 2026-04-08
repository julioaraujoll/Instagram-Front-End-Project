import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';

export default function WoofCard({ name, avatar }){
  return(
    <View style={styles.card}>
      <Avatar url={avatar}/>
      <Title>{name}</Title>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#ddd',
    borderRadius:10,
    padding:15,
    marginRight:15,
    alignItems:'center'
  }
})