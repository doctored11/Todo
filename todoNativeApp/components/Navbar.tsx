import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NavbarProps {
  title?: string; 
}

export const Navbar: React.FC<NavbarProps> = ({ title = "Todo App" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width:"100%",
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, 
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
