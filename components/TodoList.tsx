import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTodoStore } from "@/store/useTodoStore";

const TodoList = () => {
    const { todos } = useTodoStore();
    return (
        <>
            {todos.length > 0 ? (
                <FlatList
                    data={todos}
                    renderItem={({ item }) => <Text>{item.text}</Text>}
                    keyExtractor={(item) => item?.id}
                />
            ) : (
                <Text>No todo available</Text>
            )}
        </>
    );
};

export default TodoList;

const styles = StyleSheet.create({});
