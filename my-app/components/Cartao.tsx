import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface CartaoProps {
  titulo: string;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

export default function Cartao({ titulo, children, style }: CartaoProps) {
  return (
    <View style={[styles.cartao, style]}>
      <Text style={styles.titulo}>{titulo}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    borderColor: '#3f51b5',
    backgroundColor: '#e8eaf6',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#303f9f',
  },
});
