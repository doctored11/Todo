import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

interface TodoProp {
  id: string;
  title: string;
}

interface Props {
  todo: TodoProp;
  onDelete: (id: string) => void;
}

export const Todo: React.FC<Props> = ({ todo, onDelete }) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
      <Button title="Удалить" onPress={() => onDelete(todo.id)} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
  },
});
