import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 6,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    height: 150,
    padding: 10,
    textAlignVertical: 'top',
    borderRadius: 6,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  item: {
    marginBottom: 10,
    fontSize: 16,
  },
  title: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
  }
});
