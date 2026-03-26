import { createSettingsStyles } from "@/assets/styles/settings.styles";
import {useTheme} from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";

export default function Preferences () {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
      <ThemedText style={settingsStyles.sectionTitle}>Preferences</ThemedText>

      {/* DARK MODE */}
      <ThemedView style={settingsStyles.settingItem}>
        <ThemedView style={settingsStyles.settingLeft}>
          <LinearGradient colors={colors.gradients.primary} style={settingsStyles.settingIcon}>
            <Ionicons name="moon" size={18} color="#fff" />
          </LinearGradient>
          <ThemedText style={settingsStyles.settingText}>Dark Mode</ThemedText>
        </ThemedView>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </ThemedView>

      {/* NOTIFICATONS */}
      <ThemedView style={settingsStyles.settingItem}>
        <ThemedView style={settingsStyles.settingLeft}>
          <LinearGradient colors={colors.gradients.warning} style={settingsStyles.settingIcon}>
            <Ionicons name="notifications" size={18} color="#fff" />
          </LinearGradient>
          <ThemedText style={settingsStyles.settingText}>Notifications</ThemedText>
        </ThemedView>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={colors.border}
        />
      </ThemedView>

      {/* AUTO-SYNC */}
      <ThemedView style={settingsStyles.settingItem}>
        <ThemedView style={settingsStyles.settingLeft}>
          <LinearGradient colors={colors.gradients.success} style={settingsStyles.settingIcon}>
            <Ionicons name="notifications" size={18} color="#fff" />
          </LinearGradient>
          <ThemedText style={settingsStyles.settingText}>Auto Sync</ThemedText>
        </ThemedView>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={colors.border}
        />
      </ThemedView>
    </LinearGradient>
  );
};