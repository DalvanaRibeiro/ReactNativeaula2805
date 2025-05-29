// Importação dos componentes e tipos do React e React Native
import React from 'react';
import {
  View, // (Não está sendo usado neste código, pode ser removido)
  Text, // Componente para exibir texto na tela
  ImageBackground, // Componente que permite usar uma imagem como plano de fundo
  StyleSheet, // Objeto que permite criar estilos de forma otimizada
  ImageSourcePropType // Tipo para indicar que a imagem recebida é uma fonte compatível com imagens
} from 'react-native';

// Definindo os tipos das propriedades que o componente irá receber
type Props = {
  nome: string; // Nome do titular do cartão
  numero: string; // Número do cartão de crédito
  validade: string; // Data de validade do cartão
  imagem: ImageSourcePropType; // Imagem de fundo do cartão (pode ser um caminho local ou remoto)
};

// Componente funcional chamado CartaoCredito, com tipagem definida pelo tipo Props
const CartaoCredito: React.FC<Props> = ({ nome, numero, validade, imagem }) => {
  return (
    // ImageBackground é usado para aplicar uma imagem como plano de fundo do cartão
    <ImageBackground
      source={imagem} // A imagem de fundo é passada como prop
      style={styles.cartao} // Estilo principal do cartão
      imageStyle={styles.imagemFundo} // Estilo aplicado apenas à imagem de fundo
    >
      {/* Exibe o nome do titular do cartão */}
      <Text style={styles.texto}>{nome}</Text>

      {/* Exibe o número do cartão */}
      <Text style={styles.texto}>{numero}</Text>

      {/* Exibe a validade do cartão com o prefixo "Validade:" */}
      <Text style={styles.texto}>Validade: {validade}</Text>
    </ImageBackground>
  );
};

export default CartaoCredito; // Exporta o componente para que possa ser usado em outros arquivos

// Declaração dos estilos com StyleSheet
const styles = StyleSheet.create({
  cartao: {
    width: '100%', // Ocupa toda a largura disponível
    height: 180, // Altura fixa do cartão
    marginBottom: 20, // Espaçamento inferior entre cartões ou outros elementos
    justifyContent: 'center', // Centraliza os textos verticalmente dentro do cartão
    padding: 20, // Espaçamento interno para os textos não encostarem nas bordas
    borderRadius: 12, // Cantos arredondados para dar aparência moderna
    overflow: 'hidden', // Garante que nada ultrapasse os cantos arredondados
  },
  imagemFundo: {
    borderRadius: 12, // Arredonda os cantos da imagem de fundo também
    resizeMode: 'cover', // A imagem cobre todo o espaço, mantendo a proporção
  },
  texto: {
    color: 'white', // Cor do texto branca para aparecer sobre a imagem
    fontSize: 18, // Tamanho da fonte razoável para boa leitura
    fontWeight: '600', // Peso da fonte médio-forte (semi-bold)
  },
});
