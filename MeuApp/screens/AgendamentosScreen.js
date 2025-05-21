import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

export default function AgendamentosScreen({ navigation }) {
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Posts Agendados</Text>
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Historico')}>
          <Text style={sharedStyles.buttonText}>Ir para Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}

