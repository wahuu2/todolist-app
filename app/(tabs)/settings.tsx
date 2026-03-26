import { Image } from "expo-image";
import { Platform, StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import ProgressStats from "@/components/ProgressStats";
import DangerZone from "@/components/DangerZone";
import Preferences from "@/components/Preferences";

export default function SettingsScreen() {
  const { colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={settingsStyles.container}>
      <SafeAreaView style={settingsStyles.safeArea}>
        {/* HEADER */}
        <ThemedView style={settingsStyles.header}>
          <ThemedView style={settingsStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <ThemedText style={settingsStyles.title}>Settings</ThemedText>
          </ThemedView>
        </ThemedView>

        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={settingsStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          <Preferences />
          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
