/*import React from 'react'
import {View, Alert, ScrollView} from 'react-native'
import CartaoCredito from '../../components/CardCredit'

export default function App(){
  return(
    <ScrollView style={{flex:1, backgroundColor:'#f0f0f0'}}>

      <CartaoCredito
      nome="Maria Souza"
      numero="1234 3445 554 5566"
      validade="01/30"
      imagem={require('../../assets/images/cartao.jpg')}
      />
      <CartaoCredito
      nome="Maria Souza"
      numero="1234 3445 554 5566"
      validade="01/30"
      imagem={require('../../assets/images/cartao.jpg')}
      />
      <CartaoCredito
      nome="Maria Souza"
      numero="1234 3445 554 5566"
      validade="01/30"
      imagem={require('../../assets/images/cartao.jpg')}
      />

      </ScrollView>

  )
}

*/
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import EstadoSimples from '../../components/ContadorEstadoValorSimples';
import EstadoObjeto from '../../components/EstadocomObjeto';
import AtualizacaoAnterior from '../../components/AtualizacaoAnterior';
import InputControlado from '../../components/InputControlado';
import MostrarOcultar from '../../components/MostrarOcultar';
import Cartao from '../../components/Cartao';
import ComponenteAnimadoComEstado from '../../components/Animacao';
import ListaTarefas from '@/components/ListaTarefas';
import Semafaro from '@/components/Semafaro';
import Tema from '@/components/Tema';
import Anime from '@/components/ClassificacaoAnime';
import Ex1 from '@/components/Ex1';
import Ex2 from '@/components/Ex2';
import Ex3 from '@/components/Ex3';
import Ex4 from '@/components/Ex4';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
    {/*}
      <Cartao titulo="1. Estado com valor simples">
        <EstadoSimples />
      </Cartao>

      <Cartao titulo="2. Estado com objeto">
        <EstadoObjeto />
      </Cartao>
   
       <Cartao titulo="3. Atualização com valor anterior">
        <AtualizacaoAnterior />
      </Cartao>

      <Cartao titulo="4. Input controlado">
        <InputControlado />
      </Cartao>

      <Cartao titulo="5. Mostrar/Ocultar conteúdo">
        <MostrarOcultar />
      </Cartao>
      
      <Cartao titulo="6. Componente reutilizável com children">
        <EstadoSimples />
        Você pode colocar outros componentes ou texto aqui dentro 
      </Cartao>

       <ComponenteAnimadoComEstado />
       <Semafaro /> 
       <Tema />
       
       <ListaTarefas/>*/}

       <Anime />
       


       

       <Ex1 />
       <Ex2 />
       <Ex3 />
       <Ex4 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffcc',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});
