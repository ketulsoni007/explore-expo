// components/VideoSplash.tsx
import { VideoView, useVideoPlayer } from "expo-video";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  onReady: () => void;
  onFinish: () => void;
};

const VideoSplash = ({ onReady, onFinish }: Props) => {
  const player = useVideoPlayer(require("@/assets/videos/mile-splash-video.mp4"), (p) => {
    p.play();
  });

  useEffect(() => {
    onReady();
  }, [onReady]);

  useEffect(() => {
    const sub = player.addListener("playToEnd", onFinish);
    return () => sub.remove();
  }, [player, onFinish]);

  return (
    <View style={styles.container}>
      <VideoView
        player={player}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        nativeControls={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
});

export default VideoSplash;