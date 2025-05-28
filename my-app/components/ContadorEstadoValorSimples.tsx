import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EstadoSimples() {
  // Define um estado chamado 'contador', começando em 0
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.box}>
      <Text>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
  },
});
