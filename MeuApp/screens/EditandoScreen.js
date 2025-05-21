import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';
export default function EditandoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post</Text>
      <TextInput multiline placeholder="Texto gerado pela IA..." style={styles.textArea} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendamentos')}>
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 150,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
    borderRadius: 6,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { flex: 1, backgroundColor: '#007bff', padding: 14, borderRadius: 6, marginRight: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  title: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  }
});
