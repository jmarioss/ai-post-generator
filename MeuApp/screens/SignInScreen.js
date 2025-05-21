import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

export default function SignInScreen({ navigation }) {
  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.tabContainer}>
        <TouchableOpacity
          style={sharedStyles.inactiveTab}
          onPress={() => navigation.navigate('Login')}
        >
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sharedStyles.activeTab}>
          <Text style={{ color: 'white' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={sharedStyles.input} placeholder="Nome" />
      <TextInput style={sharedStyles.input} placeholder="Email" />
      <TextInput style={sharedStyles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={sharedStyles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text style={sharedStyles.or}>Ou</Text>
      <TouchableOpacity style={sharedStyles.googleButton}>
        <Text>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Historico')}>
          <Text style={sharedStyles.buttonText}>Ir para Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}