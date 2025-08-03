import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Todo = {
    id: String;
    text: String;
    isDone: Boolean;
};

type TodoStore = {
    todos: Todo[];
    getTodos: () => Promise<void>;
    addTodo: (id: String, text: String) => Promise<void>;
};

const TODO_STORE_KEY = "todos";

export const useTodoStore = create<TodoStore>((set, get) => ({
    todos: [],

    getTodos: async () => {
        const allTodos = await AsyncStorage.getItem(TODO_STORE_KEY);

        if (allTodos) {
            set(() => ({ todos: JSON.parse(allTodos) }));
        }
    },

    addTodo: async (id: String, text: String) => {
        const newTodo = { id, text, isDone: false };
        const updatedTodos = [...get().todos, newTodo];
        set(() => ({ todos: updatedTodos }));
        await AsyncStorage.setItem(
            TODO_STORE_KEY,
            JSON.stringify(updatedTodos)
        );
    },
}));
