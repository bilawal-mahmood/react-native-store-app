import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  ScrollView,
  SafeAreaView
} from 'react-native';

export default function ProductDetailScreen({ route, addToCart }) {
  const { product } = route.params;
  const scale = useRef(new Animated.Value(1)).current;

  const handleAddToCart = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      })
    ]).start();

    addToCart(product);
    Alert.alert('Success', product.name + ' added to cart!');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        <Image
          source={product.image} style={styles.image}
        />

        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>

        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddToCart}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});