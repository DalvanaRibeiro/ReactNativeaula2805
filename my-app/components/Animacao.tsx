import React, { useRef, useState } from 'react';
import { Animated, View, Button, StyleSheet, Text } from 'react-native';

export default function ComponenteAnimadoComEstado() {
  // Estado para controlar se o conteúdo está visível ou não
  const [visivel, setVisivel] = useState(false);
  // Valor animado que controlará a opacidade
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const alternarVisibilidade = () => {
    if (visivel) {
      // Se está visível, anima para desaparecer
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setVisivel(false)); // Só esconde após terminar a animação
    } else {
      setVisivel(true); // Mostra imediatamente
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={visivel ? 'Ocultar Mensagem' : 'Mostrar Mensagem'}
        onPress={alternarVisibilidade}
      />

      {visivel && (
        <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
          <Text style={styles.texto}>🎉 Mensagem com Animação</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  box: {
    padding: 20,
    backgroundColor: '#81C784',
    borderRadius: 12,
  },
  texto: {
    fontSize: 16,
    color: '#fff',
  },
});
