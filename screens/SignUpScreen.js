import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import InputWithLabel from '../components/Inputs';

export default function SignUpScreen({ navigation }) {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        petName: '',
        breed: '',
        favoriteToy: '',
      }}
      onSubmit={(values) => {
        if (values.password !== values.confirmPassword) {
          Alert.alert('Erro', 'As senhas não coincidem');
          return;
        }

        Alert.alert('Sucesso', 'Cadastro realizado');
        navigation.navigate('Main');
      }}>
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Woofstagram</Text>

          <InputWithLabel
            label="E-mail"
            value={values.email}
            onChangeText={handleChange('email')}
          />

          <InputWithLabel
            label="Senha"
            value={values.password}
            secureTextEntry
            onChangeText={handleChange('password')}
          />

          <InputWithLabel
            label="Confirmar senha"
            value={values.confirmPassword}
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
          />

          <InputWithLabel
            label="Nome do Pet"
            value={values.petName}
            onChangeText={handleChange('petName')}
          />

          <InputWithLabel
            label="Raça"
            value={values.breed}
            onChangeText={handleChange('breed')}
          />

          <InputWithLabel
            label="Brinquedo favorito"
            value={values.favoriteToy}
            onChangeText={handleChange('favoriteToy')}
          />

          <View style={{ margin: 20 }}>
            <Button title="Cadastrar" onPress={handleSubmit} />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  title: { fontSize: 32, textAlign: 'center', marginBottom: 20 },
});
