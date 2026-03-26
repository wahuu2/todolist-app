import { ThemeProvider } from '@/hooks/useTheme';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(
  process.env.EXPO_PUBLIC_CONVEX_URL!, 
  { unsavedChangesWarning: false }
);

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ConvexProvider>
  );
}
