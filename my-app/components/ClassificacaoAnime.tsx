// Importa o React e o useState (para usar estado no componente)
import React, { useState } from 'react';
// Importa os elementos visuais do React Native
import { View, Text, Button, StyleSheet } from 'react-native';

// Define os tipos possíveis de avaliação do anime
type Avaliacao = 'nenhuma' | 'ruim' | 'legal' | 'incrivel';

// Componente principal
export default function ClassificadorAnime() {
  // Estado que armazena a avaliação escolhida, começa como 'nenhuma'
  const [avaliacao, setAvaliacao] = useState<Avaliacao>('nenhuma');

  // Função que retorna um estilo de cor com base na avaliação escolhida
  const definirCor = () => {
    switch (avaliacao) {
      case 'ruim':
        return styles.vermelho;   // fundo vermelho claro
      case 'legal':
        return styles.amarelo;    // fundo amarelo claro
      case 'incrivel':
        return styles.verde;      // fundo verde claro
      default:
        return styles.neutro;     // cor neutra padrão
    }
  };

  return (
    // View principal com estilo base + cor de fundo dinâmica
    <View style={[styles.container, definirCor()]}>
      {/* Título do anime */}
      <Text style={styles.titulo}>✨ Naruto</Text>

      {/* Subtítulo explicando o que fazer */}
      <Text style={styles.subtitulo}>Classifique o anime:</Text>

      {/* Botões para escolher a avaliação */}
      <View style={styles.botoes}>
        {/* Cada botão define uma avaliação ao ser clicado */}
        <Button title="Ruim 👎" color="#d32f2f" onPress={() => setAvaliacao('ruim')} />
        <Button title="Legal 🙂" color="#fbc02d" onPress={() => setAvaliacao('legal')} />
        <Button title="Incrível 💚" color="#388e3c" onPress={() => setAvaliacao('incrivel')} />
      </View>

      {/* Mostra a avaliação escolhida somente se for diferente de "nenhuma" */}
      {avaliacao !== 'nenhuma' && (
        <Text style={styles.msg}>
          Você achou o anime {avaliacao.toUpperCase()}!
        </Text>
      )}
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    padding: 30,          // espaço interno
    borderRadius: 15,     // cantos arredondados
    margin: 20,           // margem externa
    alignItems: 'center', // centraliza os itens
    gap: 15,              // espaço entre os elementos (estilo moderno)
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',   // deixa o título em negrito
  },
  subtitulo: {
    fontSize: 18,
  },
  botoes: {
    gap: 10,              // espaço entre os botões
  },
  msg: {
    marginTop: 15,
    fontSize: 18,
    fontStyle: 'italic',  // texto em itálico
  },
  vermelho: {
    backgroundColor: '#ffcdd2', // fundo vermelho claro
  },
  amarelo: {
    backgroundColor: '#fff9c4', // fundo amarelo claro
  },
  verde: {
    backgroundColor: '#c8e6c9', // fundo verde claro
  },
  neutro: {
    backgroundColor: '#eeeeee', // fundo cinza claro padrão
  },
});
