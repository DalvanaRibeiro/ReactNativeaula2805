import React, { useState } from 'react';
// Importa React e o hook useState para controlar o estado no componente

import { View, Text, Button, StyleSheet } from 'react-native';
// Importa componentes básicos do React Native para construir a interface

export default function Pontuacao() {
  // Componente principal chamado Pontuacao

  // Cria um estado chamado "pontos" que começa com 0
  // setPontos é a função para atualizar o valor desse estado
  const [pontos, setPontos] = useState(0);

  // Função que aumenta os pontos em 10 toda vez que é chamada
  // Usamos a forma com callback para garantir que sempre usamos o valor atualizado de pontos
  const aumentar = () => {
    setPontos((pontosAnteriores) => pontosAnteriores + 10);
  };

  return (
    <View style={styles.container}>
      {/* Mostra na tela a quantidade atual de pontos */}
      <Text style={styles.pontos}>⭐ Pontos: {pontos}</Text>

      {/* Botão que, ao ser pressionado, chama a função para aumentar os pontos */}
      <Button title="Aumentar Pontos +10" onPress={aumentar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,          // Espaço interno para afastar do canto da tela
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },
  pontos: { 
    fontSize: 24,         // Tamanho maior da fonte para destaque
    marginBottom: 10,     // Espaço abaixo do texto para separar do botão
  },
});
