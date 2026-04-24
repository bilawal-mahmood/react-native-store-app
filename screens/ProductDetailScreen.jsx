import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function ProductDetailScreen({ route, addToCart }) {
  const { product } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Image source={product.image} style={{ height: 200, width: 200 }} />
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>

      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
}