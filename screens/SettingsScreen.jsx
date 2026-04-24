import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  const [dark, setDark] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings</Text>

      <TouchableOpacity onPress={() => setDark(!dark)}>
        <Text>{dark ? "Dark Mode" : "Light Mode"}</Text>
      </TouchableOpacity>
    </View>
  );
}