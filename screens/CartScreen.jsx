import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function CartScreen({ cart }) {
  return (
    <View>
      <Text style={{ fontSize: 20, margin: 10 }}>Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>
            {item.name} - ${item.price}
          </Text>
        )}
      />
    </View>
  );
}