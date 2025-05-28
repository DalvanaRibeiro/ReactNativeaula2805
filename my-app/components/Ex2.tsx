import React, { useState } from 'react'; // Importa o React e o hook useState para controlar estado
import { View, TextInput, Text, StyleSheet } from 'react-native'; // Importa componentes básicos do React Native

export default function InputControlado() {
  // Cria um estado chamado "nome" para guardar o que o usuário digita
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      {/* Texto pedindo para o usuário digitar o nome */}
      <Text style={styles.label}>Verificador de Nome:</Text>
      <Text style={styles.label}>Digite seu nome:</Text>

      {/* Caixa de texto onde o usuário digita */}
      <TextInput
        style={styles.input}          // Aplica estilo à caixa de texto
        placeholder="Nome"            // Texto que aparece quando não tem nada digitado
        value={nome}                  // Mostra o valor atual do estado "nome" na caixa
        onChangeText={setNome}        // Atualiza o estado "nome" toda vez que o texto mudar
      />

      {/* Se o nome tiver pelo menos 1 caractere, mas menos que 3, mostra a mensagem */}
      {nome.length > 0 && nome.length < 3 && (
        <Text style={styles.alerta}>⚠️ Nome muito curto</Text> // Mensagem de aviso em vermelho
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },           // Espaçamento interno da tela
  label: { fontSize: 16 },              // Tamanho do texto do rótulo
  input: {                             // Estilo da caixa de texto
    borderWidth: 1,                    // Borda fina ao redor da caixa
    borderColor: '#aaa',               // Cor da borda cinza clara
    padding: 10,                      // Espaço interno entre borda e texto
    marginTop: 10,                    // Espaço acima da caixa
    marginBottom: 10,                 // Espaço abaixo da caixa
  },
  alerta: { color: 'red' },            // Texto em vermelho para o alerta
});
