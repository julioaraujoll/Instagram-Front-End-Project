import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import InputWithLabel from './components/Inputs';

export default function App() {
  return (
    <Formik
      initialValues={{ 
        email: '', password: '', confirmPassword: '', 
        petName: '', birthday: '', breed: '', favoriteToy: '' 
      }}
      onSubmit={(values) => {
        if (values.password !== values.confirmPassword) {
          Alert.alert("Erro", "As senhas não coincidem!");
        } else {
          Alert.alert("Sucesso!", `Pet ${values.petName} cadastrado!`);
          console.log(values);
        }
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Woofstagram</Text>
          
          <InputWithLabel 
            label="E-mail" placeholder="seu@email.com"
            value={values.email} onChangeText={handleChange('email')} 
          />
          
          <InputWithLabel 
            label="Senha" placeholder="Digite uma senha"
            value={values.password} onChangeText={handleChange('password')}
            secureTextEntry={true} 
          />

          <InputWithLabel 
            label="Confirme a Senha" placeholder="Digite a senha novamente"
            value={values.confirmPassword} onChangeText={handleChange('confirmPassword')}
            secureTextEntry={true} 
          />

          <InputWithLabel 
            label="Nome do Pet" placeholder="Ex: Pipoca"
            value={values.petName} onChangeText={handleChange('petName')} 
          />

          <InputWithLabel 
            label="Raça" placeholder="Ex: Poodle"
            value={values.breed} onChangeText={handleChange('breed')} 
          />

          <InputWithLabel 
            label="Brinquedo Favorito" placeholder="Ex: Bolinha"
            value={values.favoriteToy} onChangeText={handleChange('favoriteToy')} 
          />

          <View style={styles.buttonContainer}>
            <Button onPress={handleSubmit} title="Cadastrar" color="#000" />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  buttonContainer: { padding: 20, marginBottom: 50 }
});