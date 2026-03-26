import { View, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useTheme";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  // Use "bg" since that's the key in your ColorScheme
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "bg"
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
