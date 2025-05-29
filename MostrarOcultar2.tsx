// Importa o React e o hook useState, que permite controlar valores dentro do componente
import React, { useState } from 'react';

// Importa componentes básicos do React Native para a interface
import { View, Text, Button, StyleSheet } from 'react-native';

// Define o tipo das propriedades (props) que esse componente aceita
type Props = {
  // children é o conteúdo que será passado de fora e exibido quando o botão for clicado
  children: React.ReactNode;
};

// Declara o componente funcional com o nome MostrarOcultar
// Ele recebe children como conteúdo interno (pode ser texto, componente, imagem, etc)
export default function MostrarOcultar({ children }: Props) {
  // Cria um estado chamado "visivel", que começa como falso
  // Esse estado determina se o conteúdo estará visível ou não
  const [visivel, setVisivel] = useState(false);

  // Retorna a interface do componente
  return (
    // Container principal com estilos
    <View style={styles.container}>
      
      {/* Botão que alterna o estado entre mostrar e ocultar */}
      <Button
        // Muda o texto do botão dependendo se o conteúdo está visível ou não
        title={visivel ? 'Ocultar conteúdo' : 'Mostrar conteúdo'}
        // Quando o botão é pressionado, o estado é invertido (true vira false e vice-versa)
        onPress={() => setVisivel(!visivel)}
      />

      {/* Se visivel for true, então mostramos o conteúdo passado como children */}
      {visivel && (
        // Container do conteúdo revelado
        <View style={styles.conteudo}>
          {children}
        </View>
      )}
    </View>
  );
}

// Define os estilos usando StyleSheet
const styles = StyleSheet.create({
  // Estilo para o container principal
  container: {
    marginVertical: 10,       // margem acima e abaixo
    padding: 10,              // preenchimento interno
    borderWidth: 1,           // espessura da borda
    borderColor: '#f44336',   // cor vermelha da borda
    borderRadius: 8,          // cantos arredondados
  },
  // Estilo para o conteúdo que aparece após clicar em "Mostrar"
  conteudo: {
    marginTop: 10,            // espaço acima do conteúdo
  },
});
