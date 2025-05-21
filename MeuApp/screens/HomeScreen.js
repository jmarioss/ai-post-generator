import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Qual o assunto do post?</Text>
      <TextInput style={sharedStyles.input} placeholder="Digite aqui" />
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Editando')}>
        <Text style={sharedStyles.buttonText}>Gerar Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Ideia')}>
        <Text style={sharedStyles.buttonText}>Sguestões</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Historico')}>
          <Text style={sharedStyles.buttonText}>Ir para Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}