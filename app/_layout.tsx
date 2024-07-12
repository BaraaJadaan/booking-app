import { Stack, Tabs } from "expo-router";
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <QueryClientProvider client={queryClient}>
    <GluestackUIProvider config={config}>
    <Stack  >
    <Stack.Screen
    name="index"
    options={{
      headerShown: false,
      presentation: "modal",
    }}
    />
    </Stack>
    </GluestackUIProvider>
    </QueryClientProvider>
    </GestureHandlerRootView>

  );
}
