import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AtualizacaoAnterior() {
  const [numero, setNumero] = useState(0);

  // Usando função para garantir valor mais atualizado
  const incrementar = () => setNumero(prev => prev + 1);

  return (
    <View style={styles.container}>
      <Text>Número: {numero}</Text>
      <Button title="Incrementar com valor anterior" onPress={incrementar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10, padding: 10, borderWidth: 1, borderColor: '#ff9800' },
});
