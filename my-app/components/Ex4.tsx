import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Componente principal que exibe uma pergunta e permite mostrar ou esconder a resposta
export default function PerguntaResposta() {
  // Cria uma variável de estado chamada "mostrarResposta" que começa como falsa (resposta oculta)
  // useState guarda o valor e permite atualizá-lo depois
  const [mostrarResposta, setMostrarResposta] = useState(false);

  // Função que troca o valor de "mostrarResposta" entre true e false
  // Quando chamada, ela inverte o estado atual (se estava escondido, mostra; se estava mostrando, esconde)
  const toggleResposta = () => {
    setMostrarResposta(!mostrarResposta);
  };

  return (
    // View é uma área na tela onde colocamos o conteúdo
    <View style={styles.container}>
      {/* Exibe a pergunta */}
      <Text style={styles.pergunta}>❓ Qual é a capital do Brasil?</Text>

      {/* Botão que, quando clicado, chama a função para mostrar ou esconder a resposta */}
      {/* O texto do botão muda conforme o estado: mostra "Mostrar Resposta" ou "Ocultar Resposta" */}
      <Button
        title={mostrarResposta ? 'Ocultar Resposta' : 'Mostrar Resposta'}
        onPress={toggleResposta}
      />

      {/* Se "mostrarResposta" for verdadeiro (true), este texto com a resposta aparece na tela */}
      {mostrarResposta && (
        <Text style={styles.resposta}>🇧🇷 A capital do Brasil é Brasília.</Text>
      )}
    </View>
  );
}

// Estilos para deixar o visual organizado e bonito
const styles = StyleSheet.create({
  container: {
    padding: 20,        // Espaço interno para não ficar colado nas bordas
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  pergunta: {
    fontSize: 20,        // Tamanho maior para a pergunta
    marginBottom: 10,    // Espaço abaixo da pergunta para separar do botão
    fontWeight: 'bold',  // Deixa a pergunta em negrito para destacar
  },
  resposta: {
    marginTop: 15,       // Espaço acima da resposta para separar do botão
    fontSize: 18,        // Tamanho um pouco menor que a pergunta
    color: 'green',      // Cor verde para a resposta
  },
});
