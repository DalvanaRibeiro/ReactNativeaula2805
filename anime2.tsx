// Importa o React e o hook useState para controlar o estado do componente
import React, { useState } from 'react';
// Importa os componentes básicos do React Native para criar a interface
import { View, Text, Button, StyleSheet } from 'react-native';

// Define um tipo chamado "Avaliacao", que limita as opções de avaliação possíveis
type Avaliacao = 'nenhuma' | 'ruim' | 'legal' | 'incrivel';

// Define as propriedades (props) que o componente vai receber
type Props = {
  nome: string; // O nome do anime a ser classificado
};

// Componente principal: recebe a prop "nome"
export default function ClassificadorAnime({ nome }: Props) {
  // Cria um estado chamado "avaliacao", inicialmente com valor 'nenhuma'
  const [avaliacao, setAvaliacao] = useState<Avaliacao>('nenhuma');

  // Função que retorna um estilo de fundo de acordo com a avaliação
  const definirCor = () => {
    switch (avaliacao) {
      case 'ruim':
        return styles.vermelho;   // fundo vermelho claro se avaliação for "ruim"
      case 'legal':
        return styles.amarelo;    // fundo amarelo claro se avaliação for "legal"
      case 'incrivel':
        return styles.verde;      // fundo verde claro se avaliação for "incrível"
      default:
        return styles.neutro;     // cor neutra padrão quando ainda não foi avaliado
    }
  };

  // Renderiza o componente na tela
  return (
    // View principal com estilo base + cor de fundo definida dinamicamente
    <View style={[styles.container, definirCor()]}>
      {/* Título com o nome do anime recebido via props */}
      <Text style={styles.titulo}>✨ {nome}</Text>

      {/* Subtítulo que orienta o usuário a fazer a avaliação */}
      <Text style={styles.subtitulo}>Classifique o anime:</Text>

      {/* Bloco com os botões de avaliação */}
      <View style={styles.botoes}>
        {/* Botão para avaliar como "ruim" */}
        <Button
          title="Ruim 👎"
          color="#d32f2f"
          onPress={() => setAvaliacao('ruim')}
        />

        {/* Botão para avaliar como "legal" */}
        <Button
          title="Legal 🙂"
          color="#fbc02d"
          onPress={() => setAvaliacao('legal')}
        />

        {/* Botão para avaliar como "incrível" */}
        <Button
          title="Incrível 💚"
          color="#388e3c"
          onPress={() => setAvaliacao('incrivel')}
        />
      </View>

      {/* Se uma avaliação tiver sido feita, mostra uma mensagem com o resultado */}
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
    padding: 30,            // espaço interno
    borderRadius: 15,       // cantos arredondados
    margin: 10,             // espaço externo entre os cards
    alignItems: 'center',   // centraliza o conteúdo na horizontal
    gap: 15,                // espaçamento entre os elementos internos (React Native recente)
  },
  titulo: {
    fontSize: 28,           // tamanho grande do título
    fontWeight: 'bold',     // título em negrito
  },
  subtitulo: {
    fontSize: 18,           // tamanho médio para o subtítulo
  },
  botoes: {
    gap: 10,                // espaço entre os botões
  },
  msg: {
    marginTop: 15,          // espaço acima da mensagem
    fontSize: 18,           // tamanho do texto da mensagem
    fontStyle: 'italic',    // texto em itálico
  },
  vermelho: {
    backgroundColor: '#ffcdd2', // vermelho claro
  },
  amarelo: {
    backgroundColor: '#fff9c4', // amarelo claro
  },
  verde: {
    backgroundColor: '#c8e6c9', // verde claro
  },
  neutro: {
    backgroundColor: '#eeeeee', // cinza claro padrão
  },
});
