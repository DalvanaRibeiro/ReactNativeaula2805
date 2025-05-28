import React, { useState } from 'react'; 
// Importa o React e o hook useState, que serve para criar estados e controlar dados que mudam no componente

import { View, Text, TextInput, StyleSheet } from 'react-native'; 
// Importa componentes básicos do React Native para construir a interface: View (caixa), Text (texto), TextInput (caixa de texto) e StyleSheet (estilos)

export default function EstadoObjeto() {
  // Função principal que define o componente chamado EstadoObjeto

  // Cria um estado chamado "usuario" que é um objeto com duas propriedades: nome e idade
  // O valor inicial é { nome: 'Usuário', idade: 20 }
  // setUsuario é a função que usamos para atualizar esse estado
  const [usuario, setUsuario] = useState({ nome: 'Usuário', idade: 20 });

  return (
    <View style={styles.container}>
      {/* Mostra o nome do usuário */}
      <Text style={styles.titulo}>👤 Nome: {usuario.nome}</Text>

      {/* Mostra a idade do usuário */}
      <Text style={styles.titulo}>🎂 Idade: {usuario.idade}</Text>

      {/* Caixa de texto para o usuário digitar o nome */}
      <TextInput
        style={styles.input}                   // Aplica estilo na caixa de texto
        placeholder="Digite o nome"            // Texto que aparece quando está vazio
        value={usuario.nome}                   // Mostra o nome atual do usuário na caixa
        onChangeText={(novoNome) =>            // Quando o texto mudar, pega o novo nome
          setUsuario({                         // Atualiza o estado "usuario" copiando o objeto antigo...
            ...usuario,                       // ...com o operador spread "..." para manter outras propriedades iguais
            nome: novoNome                   // ...e substitui apenas o campo "nome" pelo novo texto digitado
          })
        }
      />

      {/* Caixa de texto para o usuário digitar a idade */}
      <TextInput
        style={styles.input}
        placeholder="Digite a idade"
        keyboardType="numeric"                 // Abre teclado numérico para facilitar digitar números
        value={usuario.idade.toString()}      // Mostra a idade atual convertida para texto (pois TextInput usa texto)
        onChangeText={(novaIdade) =>
          setUsuario({
            ...usuario,                       // Mantém os outros dados do usuário iguais
            // Atualiza a idade convertendo o texto digitado em número
            // Se o texto não for um número válido, coloca 0 para evitar erro
            idade: parseInt(novaIdade) || 0
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },  // Espaço interno na tela para afastar do canto
  titulo: { fontSize: 18, marginBottom: 10 }, // Tamanho e espaçamento dos textos que mostram nome e idade
  input: {                    // Estilo das caixas de texto
    borderWidth: 1,           // Borda fina
    borderColor: '#aaa',      // Cor cinza clara na borda
    padding: 10,              // Espaço dentro da caixa para o texto não ficar grudado na borda
    marginBottom: 10,         // Espaço embaixo para separar as caixas
  },
});
