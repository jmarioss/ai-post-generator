import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
      <TouchableOpacity style={styles.switchButtonSelected}>
        <Text style={styles.switchTextSelected}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.switchButton} onPress={() => navigation.navigate('Singin')}>
        <Text style={styles.switchText}>Sign In</Text>
      </TouchableOpacity>
      </View>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: { width: '100%', padding: 12, borderWidth: 1, marginBottom: 10, borderRadius: 6 },
  button: { backgroundColor: '#007bff', padding: 12, borderRadius: 6, width: '100%' },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  switchContainer: {
  flexDirection: 'row',
  marginBottom: 20,
  backgroundColor: '#eee',
  borderRadius: 20,
  overflow: 'hidden',
  },
  switchButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  switchButtonSelected: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#007bff',
  },
  switchText: {
    color: '#333',
  },
  switchTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
