// Importa o React (para criar o componente) e o useState (para armazenar o estado do tema)
import React, { useState } from 'react';
// Importa elementos visuais do React Native
import { View, Text, Button, StyleSheet } from 'react-native';

// Componente principal chamado TemaToggle
export default function TemaToggle() {
  // Cria uma variável chamada "escuro" que começa como "false"
  // ou seja, o tema começa como claro
  const [escuro, setEscuro] = useState(false);

  // Define o estilo de fundo com base no valor de "escuro"
  // Se escuro for true, usa o estilo escuro, senão usa o estilo claro
  const estilo = escuro ? styles.escuro : styles.claro;

  // Aqui é o que aparece na tela
  return (
    // View principal com estilo do container + tema atual
    <View style={[styles.container, estilo]}>
      {/* Mostra qual é o tema atual com um emoji */}
      <Text style={styles.texto}>
        Tema: {escuro ? 'Escuro 🌙' : 'Claro ☀️'}
      </Text>

      {/* Botão para trocar o tema */}
      <Button
        title="Trocar Tema"
        onPress={() => setEscuro(!escuro)} // Inverte o valor de "escuro"
      />
    </View>
  );
}

// Estilos visuais
const styles = StyleSheet.create({
  container: {
    padding: 20,         // espaço interno
    borderRadius: 10,    // cantos arredondados
    alignItems: 'center',// centraliza os itens
  },
  texto: {
    fontSize: 18,        // tamanho do texto
    marginBottom: 10,    // espaço abaixo do texto
  },
  claro: {
    backgroundColor: '#e0f7fa', // cor clara de fundo
  },
  escuro: {
    backgroundColor: '#263238', // cor escura de fundo
    color: 'white',             // cor do texto (nota: isso não afeta o <Text> aqui diretamente)
  },
});
