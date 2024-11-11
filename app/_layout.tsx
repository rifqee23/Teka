import { Stack, Slot } from "expo-router";

// Import your global CSS file
import "@/globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Slot />
    </Stack>
  );
}
