import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const COLORS = {
  darkBlue: "#0F172A",
  blueText: "#334155",
  blue: "#2563EB",
  gray: "#6B7280",
  lightGray: "#9CA3AF",
  border: "#E5E7EB",
  green: "#16A34A",
  star: "#2563EB",
  white: "#FFFFFF",
  badgeBg: "#2563EB",
  orange: "#EA580C"
};

type RouteResultProps = {
  isHotel: boolean;
  pickupLocation?: string;
  dropLocation?: string;
  onSwap?: () => void;
};

type ListingItem = {
  id: string;
  name: string;
  location: string;
  distance: string;
  rate: number;
  reviewCount: number;
  isAvailable: boolean;
  image: any;
};

const HOTEL_DATA: ListingItem[] = [
  {
    id: "1",
    name: "Hotel Silver Inn",
    location: "Near Nadiad Highway, Nadiad",
    distance: "2.3",
    rate: 4.6,
    reviewCount: 126,
    isAvailable: true,
    image: require("@/assets/images/hotel-1.jpg"),
  },
  {
    id: "2",
    name: "Highway Stay Hotel",
    location: "NH 48, Anand",
    distance: "5.0",
    rate: 4.3,
    reviewCount: 98,
    isAvailable: true,
    image: require("@/assets/images/hotel-2.jpg"),
  },
  {
    id: "3",
    name: "Sai Palace",
    location: "Main Road, Vadodara",
    distance: "7.6",
    rate: 4.2,
    reviewCount: 75,
    isAvailable: true,
    image: require("@/assets/images/hotel-3.jpg"),
  },
  {
    id: "4",
    name: "Comfort Stay Inn",
    location: "NH 48, Bharuch",
    distance: "10.2",
    rate: 4.5,
    reviewCount: 63,
    isAvailable: true,
    image: require("@/assets/images/hotel-1.jpg"),
  },
  {
    id: "5",
    name: "Hotel Relax Inn",
    location: "NH 48, Vadodara",
    distance: "12.5",
    rate: 4.1,
    reviewCount: 51,
    isAvailable: true,
    image: require("@/assets/images/hotel-2.jpg"),
  },
];

const RESTAURENT_DATA: ListingItem[] = [
  {
    id: "1",
    name: "Shree Krishna Caffe",
    location: "North Highway, Nadiad",
    distance: "2.3",
    rate: 4.6,
    reviewCount: 84,
    isAvailable: true,
    image: require("@/assets/images/rest-1.jpg"),
  },
  {
    id: "2",
    name: "Shiv Caffe",
    location: "North Highway, Nadiad",
    distance: "4.5",
    rate: 4.1,
    reviewCount: 23,
    isAvailable: true,
    image: require("@/assets/images/rest-2.jpg"),
  },
  {
    id: "3",
    name: "Riyansh Caffe",
    location: "North Highway, Nadiad",
    distance: "5",
    rate: 3.2,
    reviewCount: 50,
    isAvailable: true,
    image: require("@/assets/images/rest-3.jpg"),
  },
  {
    id: "4",
    name: "ShivShakti Dhaba",
    location: "North Highway, Nadiad",
    distance: "6",
    rate: 4.2,
    reviewCount: 80,
    isAvailable: true,
    image: require("@/assets/images/rest-1.jpg"),
  },
  {
    id: "5",
    name: "Highway Dhaba",
    location: "North Highway, Nadiad",
    distance: "7.3",
    rate: 4.7,
    reviewCount: 67,
    isAvailable: true,
    image: require("@/assets/images/rest-2.jpg"),
  },
];

const RouteResult = ({
  isHotel,
  pickupLocation = "Ahmedabad, Gujarat",
  dropLocation = "Vadodara, Gujarat",
  onSwap,
}: RouteResultProps) => {
  const data = isHotel ? HOTEL_DATA : RESTAURENT_DATA;
  const countLabel = isHotel ? "Hotels" : "Restaurants";

  const onToggleExpand = (id: string) => {
    // TODO: expand card to show more details
  };

  const onCardPress = (id: string) => {
    router.push({
      pathname: "/(drawer)/search-detail",
      params: { category: isHotel ? "hotel" : "restaurant" }
    });
  };

  return (
    <View>
      <Text style={styles.resultsCount}>
        {data.length} {countLabel} Found
      </Text>
      <View style={styles.list}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => onCardPress(item.id)}
          >
            <View style={styles.thumbnailWrapper}>
              <Image source={item.image} style={styles.thumbnail} resizeMode="cover" />
              <View style={{...styles.freeBadge,backgroundColor: isHotel ? COLORS.blue : COLORS.orange}}>
                <Text style={styles.freeBadgeText}>100% Free</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.location} numberOfLines={1}>
                {item.location}
              </Text>
              <View style={styles.distanceRow}>
                <Ionicons name="location-outline" size={13} color={isHotel ? COLORS.blue : COLORS.orange} />
                <Text style={{...styles.distanceText,color: isHotel ? COLORS.blue : COLORS.orange}}>
                  {item.distance} km from your route
                </Text>
              </View>
              <View style={styles.metaRow}>
                <Ionicons name="star" size={13} color={isHotel ? COLORS.star : COLORS.orange} />
                <Text style={styles.rateText}>{item.rate.toFixed(1)}</Text>
                <Text style={styles.reviewCountText}>({item.reviewCount})</Text>
                {item.isAvailable && (
                  <View style={styles.availableRow}>
                    <View style={styles.availableDot} />
                    <Text style={styles.availableText}>Open</Text>
                  </View>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={{...styles.expandButton,borderColor: isHotel ? COLORS.blue : COLORS.orange}}
              onPress={() => onToggleExpand(item.id)}
              hitSlop={8}
            >
              <Ionicons name="chevron-down" size={18} color={isHotel ? COLORS.blue : COLORS.orange} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RouteResult;

const styles = StyleSheet.create({

  resultsCount: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.darkBlue,
    marginBottom: 14,
  },

  list: {
    gap: 14,
  },

  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 18,
    padding: 12,
    alignItems: "flex-start",
  },

  thumbnailWrapper: {
    position: "relative",
  },

  thumbnail: {
    width: 92,
    height: 92,
    borderRadius: 12,
  },

  freeBadge: {
    position: "absolute",
    top: 6,
    left: 6,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  freeBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    color: COLORS.white,
  },

  details: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 2,
  },

  name: {
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.darkBlue,
  },

  location: {
    fontSize: 12.5,
    color: COLORS.gray,
    marginTop: 3,
  },

  distanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },

  distanceText: {
    fontSize: 12,
    fontWeight: "600",
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },

  rateText: {
    fontSize: 12.5,
    fontWeight: "700",
    color: COLORS.darkBlue,
  },

  reviewCountText: {
    fontSize: 12,
    color: COLORS.lightGray,
    marginRight: 6,
  },

  availableRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  availableDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.green,
  },

  availableText: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.green,
  },

  expandButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
});