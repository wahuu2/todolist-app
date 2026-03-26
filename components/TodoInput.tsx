import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { useState } from "react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Alert, TouchableOpacity ,TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function TodoInput() {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);
    const [newTodo,setNewTodo]=useState("");
    const addTodo = useMutation(api.todos.addTodo);
    const handleAddTodo = async () => {
        if(newTodo.trim()){
            try {
                await addTodo ({text:newTodo.trim()})
                setNewTodo("")
            } catch (error) {
                console.log("Error adding a todo",error);
                Alert.alert("Error","Failed to add todo");
                
            }
        }
    };

     return (
        <ThemedView style={homeStyles.inputSection}>
            <ThemedView style={homeStyles.inputWrapper}>
                <TextInput
                 style={homeStyles.input}
                 placeholder="What needs to be done?"
                 value={newTodo}
                 onChangeText={setNewTodo}
                 onSubmitEditing={handleAddTodo}
                 placeholderTextColor={colors.textMuted}
                />
                <TouchableOpacity 
                 onPress={handleAddTodo} 
                 activeOpacity={0.8} 
                 disabled={!newTodo.trim()}>
                    <LinearGradient 
                     colors={!newTodo.trim()?colors.gradients.primary:colors.gradients.muted}
                     style={[homeStyles.addButton,!newTodo.trim() && homeStyles.addButtonDisabled]}>
                        <Ionicons name="add"size={24}color="#ffffff"/>
                    </LinearGradient>
                </TouchableOpacity>
            </ThemedView>
        </ThemedView>  
    );
}
