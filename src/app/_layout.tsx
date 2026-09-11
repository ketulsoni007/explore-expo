// app/_layout.tsx
import VideoSplash from "@/components/VideoSplash";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [videoDone, setVideoDone] = useState(false);

  const handleSplashHide = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  if (!videoDone) {
    return (
      <VideoSplash
        onReady={handleSplashHide}
        onFinish={() => setVideoDone(true)}
      />
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}