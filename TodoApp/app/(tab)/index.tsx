import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

const todo = () => {
    return (
        <View style={[styles.container]}>
            <TodoForm />
            <TodoList />
        </View>
    );
};

export default todo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 12,
    },
});
