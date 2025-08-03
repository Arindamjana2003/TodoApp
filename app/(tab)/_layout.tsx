import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const Layout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "purple" }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "document-text"
                                    : "document-text-outline"
                            }
                            size={26}
                            color={color}
                        />
                    ),
                    headerTitle: "ToDo",
                    tabBarLabel: "Todo",
                    headerStyle: { backgroundColor: "purple", height: 100 },
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 27,
                        color: "white",
                        fontWeight: 500,
                    },
                }}
            />
            <Tabs.Screen
                name="quiz"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "bulb" : "bulb-outline"}
                            size={26}
                            color={color}
                        />
                    ),
                    headerTitle: "Quiz",
                    tabBarLabel: "Quiz",
                }}
            />
        </Tabs>
    );
};

export default Layout;
