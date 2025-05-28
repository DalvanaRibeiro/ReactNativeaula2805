// Importa o React e a ferramenta useState para controlar o estado (a "memória" da tela)
import React, { useState } from 'react';
// Importa elementos visuais do React Native
import { View, Button, StyleSheet } from 'react-native';

// Função principal do aplicativo, chamada Semaforo
export default function Semaforo() {
  // Cria uma variável chamada 'cor', que começa com o valor 'vermelho'
  // A função 'setCor' serve para mudar essa cor depois
  const [cor, setCor] = useState('vermelho');

  // Essa função retorna a cor em código hexadecimal, de acordo com o nome da cor
  const getCor = () => {
    switch (cor) {
      case 'vermelho': return '#f44336'; // vermelho
      case 'amarelo': return '#ffeb3b';  // amarelo
      case 'verde': return '#4caf50';    // verde
      default: return 'white';           // branco, caso não reconheça a cor
    }
  };

  // Aqui é a parte que "desenha" o que vai aparecer na tela
  return (
    // A cor de fundo do quadrado muda conforme o valor de 'cor'
    <View style={[styles.container, { backgroundColor: getCor() }]}>
      {/* Botão para mudar a cor para vermelho */}
      <Button title="Vermelho" onPress={() => setCor('vermelho')} />
      
      {/* Botão para mudar a cor para amarelo */}
      <Button title="Amarelo" onPress={() => setCor('amarelo')} />
      
      {/* Botão para mudar a cor para verde */}
      <Button title="Verde" onPress={() => setCor('verde')} />
    </View>
  );
}

// Estilos visuais usados no app
const styles = StyleSheet.create({
  container: {
    padding: 20,         // espaço interno
    borderRadius: 10,    // cantos arredondados
    alignItems: 'center',// centraliza os botões na horizontal
    gap: 10,             // espaço entre os botões
  },
});
