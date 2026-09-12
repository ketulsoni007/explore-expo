import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

type Props = {
  youTubeVideoLink?: string;
  title?: string;
};

function extractVideoId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/
  ];
  for (const p of patterns) {
    const match = url.match(p);
    if (match) return match[1];
  }
  return null;
}

const HowToUseVideo = ({
  youTubeVideoLink = "https://youtu.be/hbfmaVD0rI0?si=WICWY6-Evq-JmSrH",
  title = "How to use"
}: Props) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const videoId = extractVideoId(youTubeVideoLink);

  if (!videoId) {
    return null;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <View style={styles.playerWrap}>
        {playing ? (
          <>
            <YoutubePlayer
              height={200}
              play={playing}
              videoId={videoId}
              onChangeState={(state: string) => {
                if (state === "ended") setPlaying(false);
              }}
              onReady={() => setLoading(false)}
              webViewStyle={styles.webview}
            />
            {loading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="small" color="#fff" />
              </View>
            )}
          </>
        ) : (
          <Pressable
            style={styles.thumbnailWrap}
            onPress={() => {
              setLoading(true);
              setPlaying(true);
            }}
          >
            <Image
              source={{ uri: thumbnailUrl }}
              style={styles.thumbnail}
              resizeMode="cover"
            />
            <View style={styles.playButtonCircle}>
              <Ionicons name="play" size={28} color="#fff" style={{ marginLeft: 3 }} />
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default HowToUseVideo;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: 16
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C2B4A',
    marginBottom: 16
  },
  playerWrap: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#000"
  },
  webview: {
    borderRadius: 16
  },
  thumbnailWrap: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  playButtonCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  }
});