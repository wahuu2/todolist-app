import { createHomeStyles } from "@/assets/styles/home.styles";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export function Header() {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);

  const completedCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const totalCount = todos ? todos.length : 0;
  const progressPercentage = totalCount > 0 
    ? Math.min((completedCount / totalCount) * 100, 100) 
    : 0;

  return (
    <ThemedView style={homeStyles.header}>
      <ThemedView style={homeStyles.titleContainer}>
        <LinearGradient 
          colors={colors.gradients.primary} 
          style={homeStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color="#ffffff" />
        </LinearGradient>
        <ThemedView style={homeStyles.titleTextContainer}>
          <ThemedText style={homeStyles.title}>Today&apos;s Tasks</ThemedText>
          <ThemedText style={homeStyles.subtitle}>
            {completedCount} of {totalCount} completed
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={homeStyles.progressContainer}>
        <ThemedView style={homeStyles.progressBarContainer}>
          <ThemedView style={homeStyles.progressBar}>
            <LinearGradient 
              colors={colors.gradients.success}
              style={[
                homeStyles.progressFill, 
                { width: `${progressPercentage}%` }
              ]}
            />
          </ThemedView>
          <ThemedText style={homeStyles.progressText}>
            {Math.round(progressPercentage)}%
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}
