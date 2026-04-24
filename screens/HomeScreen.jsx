import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import { products } from '../constants/products';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', { product: item })
            }
            style={styles.card}
          >
            <Image
              source={item.image}   // ✅ for local images
              style={styles.image}
            />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,

    // shadow (for Android + iOS)
    elevation: 3,
  },

  image: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    fontSize: 14,
    color: 'green',
  },
});