// Importando componentes
import React from 'react'
import {View, Text, ImageBackground, StyleSheet, ImageSourcePropType } from 'react-native'

// Definindo os tipos das propriedades que o componente irá receber
type Props = {
    nome: string, // nome do titular
    numero: string, // número do cartão
    validade: string,
    imagem: ImageSourcePropType // imagem de fundo do cartão
}
// Componente funcional chamado CataoCredito, com a tipagem definida pelo tipo Props
const CartaoCredito: React.FC<Props> = ({nome, numero, validade, imagem}) => {return(
    // ImagemBackground é usando para aplicar uma imagem como plano de fundo do cartão
    <ImageBackground
    source={imagem} // a imagem de fundo é passada como prop
    style={styles.cartao} // estilo principal do cartao
    imageStyle={styles.imagemFundo}
>
    {/** Exibe o nome do titular do cartão */}
    <Text style={styles.texto}>{nome}</Text>
    {/** Exibe o número do cartão */}
    <Text style={styles.texto}>{numero}</Text>
    {/** Exibe a validade do cartão com prefixo "Validade:" */}
    <Text style={styles.texto}>Validade: {validade}</Text>

</ImageBackground>
)
}
export default CartaoCredito

const styles = StyleSheet.create({
    cartao:{
        width:'100%',
        height:180,
        marginBottom:20,
        justifyContent:'center',
        padding: 20,
        borderRadius:12,
        overflow:'hidden'
    },
    imagemFundo:{
        borderRadius:12,
        resizeMode:'cover' // A imagem cobre todo o espaço, matendo a proporção
    },
    texto:{
        color:'white',
        fontSize:18,
        fontWeight:'600'
    }
})