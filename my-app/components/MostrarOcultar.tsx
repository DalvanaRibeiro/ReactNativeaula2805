import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MostrarOcultar() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={visivel ? 'Ocultar conteúdo' : 'Mostrar conteúdo'}
        onPress={() => setVisivel(!visivel)}
      />
      {visivel && (
        <Text style={{ marginTop: 10 }}>
          Agora você está vendo este conteúdo que antes estava escondido!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 10, padding: 10, borderWidth: 1, borderColor: '#f44336' },
});
