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

*/{/*}
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
       
       <ListaTarefas/>

       <Anime />*/}

       // App.tsx
// App.tsx
import React from 'react';
import { View, ScrollView, StyleSheet, Text  } from 'react-native';
import ClassificadorAnime from '../../components/anime2';
import MostrarOcultar from '../../components/MostrarOcultar2';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={{ fontSize: 20 }}>
        Classificador de Anime:
          
        </Text>
      {/* Avaliação do anime */}
      <ClassificadorAnime nome="One Piece" />

      {/* Informações do anime (escritas diretamente no App.tsx) */}
      <MostrarOcultar>
        <Text style={styles.texto}>
          🏴‍☠️ *One Piece* é uma série de anime e mangá que segue as aventuras de Monkey D. Luffy e sua tripulação pirata em busca do tesouro lendário "One Piece".
        </Text>
        <Text style={styles.texto}>
          📅 Estreia: 1999{"\n"}🎬 Episódios: Mais de 1000{"\n"}✍️ Criador: Eiichiro Oda
        </Text>
      </MostrarOcultar>
       {/* Avaliação do anime */}
      <ClassificadorAnime nome="One Piece" />

      {/* Informações do anime (escritas diretamente no App.tsx) */}
      <MostrarOcultar>
        <Text style={styles.texto}>
          🏴‍☠️ *One Piece* é uma série de anime e mangá que segue as aventuras de Monkey D. Luffy e sua tripulação pirata em busca do tesouro lendário "One Piece".
        </Text>
        <Text style={styles.texto}>
          📅 Estreia: 1999{"\n"}🎬 Episódios: Mais de 1000{"\n"}✍️ Criador: Eiichiro Oda
        </Text>
      </MostrarOcultar>
       {/* Avaliação do anime */}
      <ClassificadorAnime nome="One Piece" />

      {/* Informações do anime (escritas diretamente no App.tsx) */}
      <MostrarOcultar>
        <Text style={styles.texto}>
          🏴‍☠️ *One Piece* é uma série de anime e mangá que segue as aventuras de Monkey D. Luffy e sua tripulação pirata em busca do tesouro lendário "One Piece".
        </Text>
        <Text style={styles.texto}>
          📅 Estreia: 1999{"\n"}🎬 Episódios: Mais de 1000{"\n"}✍️ Criador: Eiichiro Oda
        </Text>
      </MostrarOcultar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
      backgroundColor: '#e0f2f1',
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
});