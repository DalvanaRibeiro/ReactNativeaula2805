// Importa o React e algumas ferramentas do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// Função principal do aplicativo, chamada ListaTarefas
export default function ListaTarefas() {
  // Cria um estado chamado 'tarefa' para guardar o texto digitado pelo usuário
  const [tarefa, setTarefa] = useState('');
  // Cria uma lista chamada 'lista' que vai guardar todas as tarefas adicionadas
  const [lista, setLista] = useState<string[]>([]);

  // Função chamada quando o botão "Adicionar" é apertado
  const adicionarTarefa = () => {
    // Se o usuário não digitou nada, não faz nada
    if (tarefa.trim() === '') return;
    // Adiciona a tarefa na lista
    setLista([...lista, tarefa]);
    // Limpa o campo de texto
    setTarefa('');
  };

  // Aqui é a parte que "desenha" a tela
  return (
    <View>
      {/* Título da lista */}
      <Text style={styles.titulo}>📋 Lista de Tarefas</Text>
      
      {/* Campo para digitar uma nova tarefa */}
      <TextInput
        style={styles.input}
        value={tarefa} // mostra o que o usuário está digitando
        onChangeText={setTarefa} // atualiza o texto enquanto o usuário digita
        placeholder="Digite uma tarefa" // dica dentro do campo de texto
      />
      
      {/* Botão para adicionar a tarefa */}
      <Button title="Adicionar" onPress={adicionarTarefa} />
      
      {/* Lista que mostra todas as tarefas já adicionadas */}
      <FlatList
        data={lista} // usa a lista de tarefas como fonte
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>} // mostra cada tarefa com um ponto na frente
        keyExtractor={(_, index) => index.toString()} // ajuda o React a identificar cada item da lista
      />
    </View>
  );
}

// Estilos visuais usados no aplicativo
const styles = StyleSheet.create({
  titulo: {
    fontSize: 20, // tamanho da letra
    fontWeight: 'bold', // negrito
    marginVertical: 10, // espaço acima e abaixo
  },
  input: {
    borderWidth: 1, // espessura da borda
    borderColor: '#999', // cor da borda
    padding: 10, // espaço interno
    marginBottom: 10, // espaço abaixo do campo
  },
  item: {
    fontSize: 16, // tamanho do texto das tarefas
    marginVertical: 2, // espaço entre as tarefas
  },
});
