import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

export default function IdeiaScreen({ navigation}) {
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Sugestões</Text>
      <Text style={sharedStyles.sectionTitle}>Notícias do dia</Text>
      <Text style={sharedStyles.subTitle}>Tecnologia</Text>
      <Text style={sharedStyles.paragraph}>Nunc ornare turpis eget tempus dictum...</Text>
      <TouchableOpacity><Text style={sharedStyles.link}>Gerar post</Text></TouchableOpacity>
      <Text style={sharedStyles.subTitle}>Esportes</Text>
      <Text style={sharedStyles.paragraph}>Nunc ornare turpis eget tempus dictum...</Text>
      <TouchableOpacity><Text style={sharedStyles.link}>Gerar post</Text></TouchableOpacity>
      <TouchableOpacity style={sharedStyles.button} onPress={() => navigation.navigate('Historico')}>
          <Text style={sharedStyles.buttonText}>Ir para Histórico</Text>
      </TouchableOpacity>
    </View>
  );
}