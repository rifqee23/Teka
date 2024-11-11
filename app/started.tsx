// app/started.tsx

import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function Started() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red", // Sesuaikan warna background
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: "#ffffff", // Warna teks
  },
});
