import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTodoStore } from "@/store/useTodoStore";

const TodoForm = () => {
    const { getTodos, addTodo, todos } = useTodoStore();

    const [text, setText] = useState("");

    useEffect(() => {
        getTodos();
    }, []);

    const handleAddTodo = () => {
        if (text.trim()) {
            const id = Date.now().toString();
            addTodo(id, text);
            setText("");
        }
    };

    return (
        <>
            <TextInput
                placeholder="Enter your task to do"
                style={[styles.inputbox]}
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity style={[styles.button]} onPress={handleAddTodo}>
                <Text style={{ color: "#fff", fontSize: 18 }}>
                    Add your Todo
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default TodoForm;

const styles = StyleSheet.create({
    inputbox: {
        borderWidth: 1,
        borderColor: "#c0c0c0",
        marginTop: 10,
        paddingHorizontal: 10,
        height: 54,
        fontSize: 18,
        width: "100%",
        borderRadius: 10,
    },
    button: {
        height: 54,
        backgroundColor: "purple",
        marginTop: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
});
