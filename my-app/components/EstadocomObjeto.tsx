import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function EstadoObjeto() {
  // Estado é um objeto com duas propriedades
  const [usuario, setUsuario] = useState({ nome: 'Maria', idade: 20 });

  return (
    <View>
      <Text>Nome: {usuario.nome}</Text>
      <Text>Idade: {usuario.idade}</Text>
      <Button title="Fazer aniversário" onPress={() =>
        setUsuario({ ...usuario, idade: usuario.idade + 1 })
      } />
    </View>
  );
}
