import React from "react";
import { StyleSheet, Text, View } from "react-native";
7;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catalog</Text>
    </View>
  );
}