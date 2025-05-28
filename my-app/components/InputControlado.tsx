import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function InputControlado() {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text>Digite algo:</Text>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        placeholder="Escreva aqui..."
      />
      <Text>Você digitou: {texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10, padding: 10, borderWidth: 1, borderColor: '#9c27b0' },
  input: {
    borderWidth: 1,
    borderColor: '#9c27b0',
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
  },
});
