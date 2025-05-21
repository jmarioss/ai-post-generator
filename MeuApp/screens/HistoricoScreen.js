import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

export default function HistoricoScreen() {
  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>Histórico de Posts</Text>
    </View>
  );
}
