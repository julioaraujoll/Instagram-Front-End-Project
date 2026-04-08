import React from 'react';
import { View, Button } from 'react-native';

export default function SignInScreen({navigation}){

  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button
        title="Criar conta"
        onPress={()=> navigation.navigate('SignUp')}
      />
    </View>
  )

}