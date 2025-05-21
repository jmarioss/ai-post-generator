import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

export default function PostsSalvosScreen() {
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Posts Salvos</Text>
      <View style={sharedStyles.row}>
        <Text>Lorem ipsum dolor</Text>
        <View style={sharedStyles.row}>
          <TouchableOpacity><Text style={sharedStyles.link}>Editar</Text></TouchableOpacity>
          <TouchableOpacity><Text style={[sharedStyles.link, { marginLeft: 10 }]}>Postar</Text></TouchableOpacity>
        </View>
      </View>
      <View style={sharedStyles.row}>
        <Text>Maecenas nec ipsum imperdiet</Text>
        <View style={sharedStyles.row}>
          <TouchableOpacity><Text style={sharedStyles.link}>Editar</Text></TouchableOpacity>
          <TouchableOpacity><Text style={[sharedStyles.link, { marginLeft: 10 }]}>Postar</Text></TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Historico')}>
          <Text style={sharedStyles.buttonText}>Ir para Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}