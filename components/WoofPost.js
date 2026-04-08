import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Title from './Title';

export default function WoofPost({ image, title, description }){
  return(
    <View style={styles.post}>

      <Image source={{uri:image}} style={styles.image}/>

      <View style={styles.content}>
        <Title>{title}</Title>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  post:{
    flexDirection:'row',
    marginBottom:20
  },

  image:{
    flex:1,
    height:100,
    borderRadius:10
  },

  content:{
    flex:2,
    marginLeft:10,
    justifyContent:'center'
  },

  description:{
    marginTop:5,
    color:'#666'
  }

})