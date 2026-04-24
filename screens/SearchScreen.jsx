import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function SearchScreen() {
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search..."
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 10 }}
      />
      <Text>You typed: {text}</Text>
    </View>
  );
}