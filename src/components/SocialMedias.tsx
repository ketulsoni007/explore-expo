import SocialReelCard, {
  CARD_WIDTH,
  SocialReelData,
} from "@/components/SocialReelCard";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CARD_GAP = 12;
const AUTO_PLAY_INTERVAL = 3000;

const SOCIAL_VIDEO_DATA: SocialReelData[] = [
  {
    id: "1",
    source: require("@/assets/videos/serving_bowl_pasta.mp4"),
    platform: "instagram",
    title: "Free Food\non your route!",
    views: "12.4K",
  },
  {
    id: "2",
    source: require("@/assets/videos/hotel_room.mp4"),
    platform: "youtube",
    title: "Free Stay\nPartner Hotels",
    views: "9.8K",
  },
  {
    id: "3",
    source: require("@/assets/videos/people_street_market.mp4"),
    platform: "instagram",
    title: "Roadside Help\nAnytime",
    views: "7.2K",
  },
  {
    id: "4",
    source: require("@/assets/videos/receptionist_handover_key.mp4"),
    platform: "youtube",
    title: "We're here\nwhen you need us",
    views: "6.1K",
  },
  {
    id: "5",
    source: require("@/assets/videos/friend_share_meal.mp4"),
    platform: "instagram",
    title: "Meals that\nbring smiles",
    views: "5.3K",
  },
];

const SocialMedias = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndexRef.current + 1;

      // Last card → first card
      if (nextIndex >= SOCIAL_VIDEO_DATA.length) {
        nextIndex = 0;
      }

      currentIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);

      flatListRef.current?.scrollToOffset({
        offset: nextIndex * (CARD_WIDTH + CARD_GAP),
        animated: true,
      });
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    const index = Math.round(
      offsetX / (CARD_WIDTH + CARD_GAP)
    );

    currentIndexRef.current = index;
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>
            Miles Assist on Social
          </Text>

          <Text style={styles.headerSubtitle}>
            Watch, follow & stay connected
          </Text>
        </View>

        <TouchableOpacity
          style={styles.viewAllButton}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <Text style={styles.viewAllText}>
            View All
          </Text>

          <Ionicons
            name="chevron-forward"
            size={16}
            color="#2563EB"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={SOCIAL_VIDEO_DATA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_GAP}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <SocialReelCard item={item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ width: CARD_GAP }} />
        )}
      />

      <View style={styles.dotsRow}>
        {SOCIAL_VIDEO_DATA.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && styles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  headerSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingTop: 2,
  },

  viewAllText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2563EB",
  },

  listContent: {
    paddingHorizontal: 16,
  },

  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D1D5DB",
  },

  dotActive: {
    width: 18,
    backgroundColor: "#2563EB",
  },
});

export default SocialMedias;