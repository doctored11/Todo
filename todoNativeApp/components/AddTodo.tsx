import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

interface TodoProps {
  title?: string;
  onSubmit: (text: string) => void;
}

export const AddTodo: React.FC<TodoProps> = (prop) => {
  const [text, setText] = useState("");
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
      ></TextInput>
      <Button
        title={prop.title || "добавить"}
        onPress={() => prop.onSubmit(text)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#ffggdd",
  },
});
