import { Ionicons } from "@expo/vector-icons";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView, type VideoView as VideoViewType } from "expo-video";
import { useRef } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export type SocialPlatform = "instagram" | "youtube";

export type SocialReelData = {
    id: string;
    source: number;
    platform: SocialPlatform;
    title: string;
    views: string;
};

type SocialReelCardProps = {
    item: SocialReelData;
};

const PLATFORM_ICON: Record<SocialPlatform, { name: keyof typeof Ionicons.glyphMap; color: string }> = {
    instagram: { name: "logo-instagram", color: "#E1306C" },
    youtube: { name: "logo-youtube", color: "#FF0000" },
};

const SocialReelCard = ({ item }: SocialReelCardProps) => {
    const videoViewRef = useRef<VideoViewType>(null);
    const player = useVideoPlayer(item.source, (p) => {
        p.loop = true;
        p.muted = false;
    });

    const { isPlaying } = useEvent(player, "playingChange", {
        isPlaying: player.playing,
    });

    const handlePress = () => {
        videoViewRef.current?.enterFullscreen();
        player.play();
    };

    const platformMeta = PLATFORM_ICON[item.platform];

    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={handlePress}
        >
            <VideoView
                ref={videoViewRef}
                player={player}
                style={styles.video}
                contentFit="cover"
                surfaceType="textureView"
                nativeControls={false}
                onFullscreenExit={() => {
                    player.pause();
                }}
            />
            <View style={styles.platformBadge}>
                <Ionicons name={platformMeta.name} size={18} color={platformMeta.color} />
            </View>
            {!isPlaying && (
                <View style={styles.playOverlay}>
                    <View style={styles.playButton}>
                        <Ionicons name="play" size={22} color="#FFFFFF" style={{ marginLeft: 3 }} />
                    </View>
                </View>
            )}
            <View style={styles.bottomScrim} pointerEvents="none" />
            <View style={styles.bottomContent}>
                <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                </Text>
                <View style={styles.viewsRow}>
                    <Ionicons name="eye-outline" size={12} color="#FFFFFF" />
                    <Text style={styles.viewsText}>{item.views}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const CARD_WIDTH = 150;
const CARD_HEIGHT = 240;

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 18,
        overflow: "hidden",
        backgroundColor: "#000000",
        position: "relative",
    },
    video: {
        width: "100%",
        height: "100%",
    },
    platformBadge: {
        position: "absolute",
        top: 10,
        left: 10,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    playOverlay: {
        ...StyleSheet.absoluteFill,
        alignItems: "center",
        justifyContent: "center",
    },
    playButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "rgba(0,0,0,0.45)",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomScrim: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "55%",
    },
    bottomContent: {
        position: "absolute",
        bottom: 10,
        left: 12,
        right: 12,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "700",
        lineHeight: 17,
        marginBottom: 6,
    },
    viewsRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    viewsText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "500",
    },
});

export default SocialReelCard;
export { CARD_HEIGHT, CARD_WIDTH };

