import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function InputWithLabel({
  label,
  value,
  onChangeText,
  secureTextEntry
}){

  return (

    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />

    </View>

  )

}

const styles = StyleSheet.create({

  container:{
    marginHorizontal:20,
    marginBottom:15
  },

  label:{
    fontSize:16,
    marginBottom:5
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:6,
    padding:10
  }

})