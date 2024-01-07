import {StyleSheet,Text,View,TextInput,TouchableOpacity, Alert,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

    const TodoHeader = () => {
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
        Alert.alert("Necesitas ingresar una tarea");
        setTodo("");
        return;
    }

    dispatch(
        addTask({
        task: todo,
        })
    );
        setTodo("");
    };

    return (
    <View>
        <Text
        style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 10,
        }}
        >
        Lista de Tareas
        </Text>
        <View
        style={{
            justifyContent: "center",
            alignItems: "center",
        }}
        >
          {/* TextInput */}
        <TextInput
            style={{
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                margin: 10,
                width: "90%",
                borderRadius: 5,
            }}
            placeholder="Ingresa una tarea..."
            onChangeText={setTodo}
            value={todo}
        />
          {/* Button */}
        <TouchableOpacity
            style={{
                backgroundColor: "black",
                padding: 10,
                margin: 10,
                width: "90%",
                borderRadius: 5,
                alignItems: "center",
            }}
            onPress={onSubmitTask}
        >
            <Text style={{ color: "white" }}>Agregar</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
};

export default TodoHeader;

const styles = StyleSheet.create({});