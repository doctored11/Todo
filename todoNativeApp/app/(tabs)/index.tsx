import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Navbar } from "@/components/Navbar";
import { AddTodo } from "@/components/AddTodo";
import { Todo } from "@/components/Todo";

interface Todo {
  id: string;
  title: string;
}

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now() + "" + Math.random(),
      title: title,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.main}>
      <Navbar title="Td app" />
      <View style={styles.container}>
        <Text style={styles.text}> Hello React ❤️ </Text>
        <AddTodo onSubmit={addTodo}></AddTodo>
        <View>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} onDelete={removeTodo} />;
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text: {
    fontSize: 32,
  },
  main: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
