import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import WhatYouGetCard from "./WhatYouGetCard";

type DetailInformationProps = {
  isHotel: boolean;
  aboutText?: string;
  distanceFromRoute?: string;
  estimatedTime?: string;
  phoneNumber?: string;
};

const HOTEL_THEME = {
  primary: "#2563EB",
  primaryBg: "#EFF3FF",
};

const RESTAURANT_THEME = {
  primary: "#EA580C",
  primaryBg: "#FFF3EC",
};

const HOTEL_PERKS = [
  { icon: "person-outline" as const, title: "Single Room", subtitle: "Subject to availability" },
  { icon: "sparkles-outline" as const, title: "Clean Rooms", subtitle: "Hygienic & well maintained" },
  { icon: "moon-outline" as const, title: "Rest & Relax", subtitle: "Peaceful environment" },
  { icon: "wifi-outline" as const, title: "Basic Amenities", subtitle: "Wi-Fi, Water, Charging Point" },
];

const RESTAURANT_PERKS = [
  { icon: "cafe-outline" as const, title: "Breakfast", subtitle: "7 AM – 11 AM" },
  { icon: "fast-food-outline" as const, title: "Lunch", subtitle: "11 AM – 4 PM" },
  { icon: "moon-outline" as const, title: "Dinner", subtitle: "7 PM – 10 PM" },
  { icon: "cafe-outline" as const, title: "Tea / Water", subtitle: "Always Available" },
];

const DetailInformation = ({
  isHotel,
  aboutText = isHotel
    ? "Highway Comfort Inn offers clean, comfortable and safe rooms for drivers to rest and relax. Fresh linen, clean washrooms and a peaceful environment."
    : "Shree Krishna Dhaba is known for its delicious home-style Gujarati food. Freshly prepared meals, great taste and a warm welcome for all drivers.",
  distanceFromRoute = isHotel ? "5.1 km" : "2.4 km",
  estimatedTime = isHotel ? "8 min drive" : "5 min drive",
  phoneNumber = "+911234567890",
}: DetailInformationProps) => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const theme = isHotel ? HOTEL_THEME : RESTAURANT_THEME;
  const perks = isHotel ? HOTEL_PERKS : RESTAURANT_PERKS;

  const onToggleAbout = () => setIsAboutExpanded((prev) => !prev);

  const onNavigate = () => {
    const origin = "Naroda, Ahmedabad, Gujarat";
    const destination = "Nadiad, Gujarat";

    const encodedOrigin = encodeURIComponent(origin);
    const encodedDestination = encodeURIComponent(destination);

    // Universal Google Maps URL — works on iOS, Android, and web fallback
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodedOrigin}&destination=${encodedDestination}&travelmode=driving`;

    Linking.openURL(url).catch(() => {
      // Fallback in case the URL fails to open for some reason
      console.warn("Unable to open Google Maps");
    });
  };

  const onCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="clipboard-outline" size={18} color={theme.primary} />
          <Text style={styles.sectionHeaderText}>About This Place</Text>
        </View>
        <Text style={styles.aboutText} numberOfLines={isAboutExpanded ? undefined : 3}>
          {aboutText}
        </Text>
        <TouchableOpacity onPress={onToggleAbout} activeOpacity={0.7} style={styles.readMoreRow}>
          <Text style={[styles.readMoreText, { color: theme.primary }]}>
            {isAboutExpanded ? "Read Less" : "Read More"}
          </Text>
          <Ionicons
            name={isAboutExpanded ? "chevron-up" : "chevron-down"}
            size={14}
            color={theme.primary}
          />
        </TouchableOpacity>
      </View>
      <WhatYouGetCard styles={styles} theme={theme} perks={perks} />
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="location-outline" size={18} color={theme.primary} />
          <Text style={styles.sectionHeaderText}>Location & Direction</Text>
        </View>
        <TouchableOpacity style={styles.mapPreview} activeOpacity={0.85} onPress={onNavigate}>
          <View style={styles.mapDotStart} />
          <View style={[styles.mapRouteLine, { backgroundColor: theme.primary }]} />
          <Ionicons name="location" size={22} color={theme.primary} style={styles.mapPinEnd} />
          <View style={[styles.mapNavigateButton, { backgroundColor: theme.primary }]}>
            <Ionicons name="navigate" size={16} color="#FFFFFF" />
          </View>
        </TouchableOpacity>

        <View style={[styles.statsRow, { backgroundColor: theme.primaryBg }]}>
          <View style={styles.statBlock}>
            <Text style={[styles.statLabel, { color: theme.primary }]}>Distance</Text>
            <Text style={styles.statValue}>{distanceFromRoute} from your route</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBlock}>
            <Text style={[styles.statLabel, { color: theme.primary }]}>Estimated Time</Text>
            <Text style={styles.statValue}>{estimatedTime}</Text>
          </View>
        </View>

        <View style={styles.verifiedNoteRow}>
          <Ionicons name="shield-checkmark-outline" size={15} color={theme.primary} />
          <Text style={styles.verifiedNoteText}>
            Only verified partners  •  100% Free for eligible drivers
          </Text>
        </View>

        <View style={styles.ctaRow}>
          <TouchableOpacity
            style={[styles.navigateButton, { borderColor: theme.primary }]}
            activeOpacity={0.8}
            onPress={onNavigate}
          >
            <Ionicons name="navigate-outline" size={17} color={theme.primary} />
            <Text style={[styles.navigateButtonText, { color: theme.primary }]}>Navigate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.callButton, { backgroundColor: theme.primary }]}
            activeOpacity={0.85}
            onPress={onCall}
          >
            <Ionicons name="call" size={17} color="#FFFFFF" />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailInformation;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },

  sectionCard: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 16,
    marginTop: 16,
  },

  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  sectionHeaderText: {
    fontSize: 15.5,
    fontWeight: "800",
    color: "#0F172A",
  },

  aboutText: {
    fontSize: 13.5,
    color: "#334155",
    lineHeight: 20,
    marginTop: 10,
  },

  readMoreRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 6,
  },

  readMoreText: {
    fontSize: 13,
    fontWeight: "700",
  },

  perksGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
  },

  perkCard: {
    width: 120,
    borderRadius: 14,
    padding: 12,
    alignItems: 'center'
  },

  perkTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 8,
  },

  perksListContent: {
    marginTop: 12,
    paddingRight: 4,
  },

  perkSubtitle: {
    fontSize: 11.5,
    color: "#6B7280",
    marginTop: 2,
  },

  mapPreview: {
    height: 90,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    overflow: "hidden",
  },

  mapDotStart: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#334155",
  },

  mapRouteLine: {
    flex: 1,
    height: 2,
    marginHorizontal: 8,
  },

  mapPinEnd: {},

  mapNavigateButton: {
    position: "absolute",
    right: 14,
    top: "50%",
    marginTop: -18,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  statsRow: {
    flexDirection: "row",
    borderRadius: 14,
    marginTop: 12,
    paddingVertical: 12,
  },

  statBlock: {
    flex: 1,
    alignItems: "center",
  },

  statLabel: {
    fontSize: 12,
    fontWeight: "700",
  },

  statValue: {
    fontSize: 12,
    color: "#334155",
    marginTop: 4,
    textAlign: "center",
  },

  statDivider: {
    width: 1,
    backgroundColor: "#D1D5DB",
  },

  verifiedNoteRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 14,
  },

  verifiedNoteText: {
    fontSize: 12,
    color: "#334155",
    flex: 1,
  },

  ctaRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
  },

  navigateButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 13,
  },

  navigateButtonText: {
    fontSize: 14,
    fontWeight: "700",
  },

  callButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    borderRadius: 12,
    paddingVertical: 13,
  },

  callButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});