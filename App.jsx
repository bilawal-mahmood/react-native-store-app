import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import WishlistScreen from './screens/WishlistScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [cart, setCart] = useState([]);

  // ✅ Improved cart logic (handles quantity)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#007bff',

          // ✅ Icons
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Cart') iconName = 'cart';
            else if (route.name === 'Profile') iconName = 'person';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Home */}
        <Tab.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} addToCart={addToCart} />
          )}
        </Tab.Screen>

        {/* Cart with badge */}
        <Tab.Screen
          name="Cart"
          options={{
            tabBarBadge: cart.length > 0 ? cart.length : null,
          }}
        >
          {(props) => <CartScreen {...props} cart={cart} />}
        </Tab.Screen>

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Tabs */}
        <Stack.Screen
          name="Main"
          component={Tabs}
          options={{ headerShown: false }}
        />

        {/* Product Detail */}
        <Stack.Screen name="ProductDetail">
          {(props) => (
            <ProductDetailScreen {...props} addToCart={addToCart} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}