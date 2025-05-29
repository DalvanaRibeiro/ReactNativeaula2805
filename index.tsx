

/*

// Importa a biblioteca principal do React
import React from 'react';

// Importa os componentes necessários da biblioteca react-native
// Agora estamos usando "View" e "Text"
import { View, Text, Image, TextInput,ScrollView, Button } from 'react-native';

let nome = 'Turma232n'
// Define o componente principal do app, com a função App
export default function App() {
  return (
    // View é um contêiner genérico, como se fosse uma <div> no HTML
    <View
      style={{
        padding: 100, // Espaço interno (dentro da View)
        backgroundColor: '#6fc1ed', // Cor de fundo azul clara
      }}
    >
     // {/* Aqui colocamos o componente Text 
      <Text style={{ fontSize: 20, color:'##2c7215' }}>
        Olá Mundo! Bem-vindo ao App da {nome} ✌😎
      </Text>
      // {/* Aqui colocamos o componente Image 
      <Image
        source={require('../../assets/images/image_232n_assets.webp')} // Caminho da imagem local
        style={{ width: 150, height: 150 }}
      />
    //  {/* Aqui colocamos o componente TextInput 

      <TextInput placeholder="Digite seu nome" style={{  marginTop: 20,borderWidth: 3, padding: 8 }} />

      <Text style={{ fontSize: 20 }}>
        Pedidos para a UC 15:
      </Text>
<View style={{ height: 250, borderWidth: 1, borderColor: '#333', borderRadius: 8, padding: 10 }}>
        <ScrollView>
          <Text>💻 Que os notebooks do Senac nos ajudem</Text>
          <Text>🚀 Que o Expo rode de boa em vossos celulares</Text>
          <Text>📡 Que a rede não nos atrapalhe</Text>
          <Text>🖥️ VS Code funcionando lindamente</Text>
          <Text>🙌 Amém!</Text>
          <Text>🤖 Que o bug seja só no inseto e não no código</Text>
          <Text>🧠 Que o cérebro entenda a diferença entre props e state</Text>
          <Text>🧘 Que o Expo não precise de 5 restarts pra funcionar</Text>
          <Text>📦 Que o "npm install" não trave a aula toda</Text>
          <Text>🎯 Que o simulador abra antes da gente desistir</Text>
          <Text>🔥 Que o hot reload seja realmente hot</Text>
          <Text>🐢 Que a internet não vá tomar um chimarrão no meio da aula</Text>
          <Text>🎨 Que os estilos não se vinguem da gente</Text>
          <Text>🧩 Que as dependências não entrem em guerra</Text>
          <Text>⛑️ Que o VS Code salve antes do desespero</Text>
          <Text>📱 Que os celulares não se revoltem com o Expo</Text>
          <Text>🔁 Que a tela branca da morte não nos visite hoje</Text>
          <Text>🛠️ Que a build funcione mesmo sem a gente saber por quê</Text>
          <Text>⏳ Que o loading não dure a aula inteira</Text>
          <Text>🙌 Amém e bora codar! 🚀</Text>
        </ScrollView>
      </View>
// {/* Aqui colocamos o componente Button 
<Button
title = "Clique aqui" onPress={() => alert('Botão clicado!')} />

    </View>
  );
}
*/// App.tsx
import React from 'react';
import { View, Alert, ScrollView } from 'react-native';
import CartaoCredito from '../../components/CardCredit';


export default function App() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      
  

      
      <CartaoCredito
        nome="Maria Souza"
        numero="**** **** **** 5678"
        validade="01/30"
        imagem={require('../../assets/images/cartao.jpg')}
      />
      <CartaoCredito
        nome="Maria Souza"
        numero="**** **** **** 5678"
        validade="01/30"
        imagem={require('../../assets/images/cartao.jpg')}
      />
      <CartaoCredito
        nome="Maria Souza"
        numero="**** **** **** 5678"
        validade="01/30"
        imagem={require('../../assets/images/cartao.jpg')}
      />
      <CartaoCredito
        nome="Maria Souza"
        numero="**** **** **** 5678"
        validade="01/30"
        imagem={require('../../assets/images/cartao.jpg')}
      />
      <CartaoCredito
        nome="Maria Souza"
        numero="**** **** **** 5678"
        validade="01/30"
        imagem={require('../../assets/images/cartao.jpg')}
      />

    </ScrollView>
  );
}

