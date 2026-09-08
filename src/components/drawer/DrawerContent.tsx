import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import DriverAvailability from "../DriverAvailibility";

const COLORS = {
  navy: "#1E3A8A",
  orange: "#EA580C",
  purple: "#7C3AED",
  blue: "#2563EB",
  green: "#16A34A",
  red: "#DC2626",
  gray: "#6B7280",
  border: "#E5E7EB",
  bannerBg: "#EEF2FF",
  logoutBg: "#FEE2E2",
};

type MenuItem = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
  iconColor: string;
  circleBg?: string;
};

const topMenu: MenuItem[] = [
  { label: "Home", icon: "home", route: "/(drawer)/(tabs)", iconColor: COLORS.navy },
  { label: "Free Food", icon: "restaurant", route: "/(drawer)/free-food", iconColor: "#FFFFFF", circleBg: COLORS.orange },
  { label: "Free Stay", icon: "business", route: "/(drawer)/free-stay", iconColor: "#FFFFFF", circleBg: COLORS.purple },
  { label: "Services", icon: "grid", route: "/(drawer)/(tabs)/services", iconColor: COLORS.blue },
  { label: "Activities", icon: "trending-up", route: "/(drawer)/(tabs)/activities", iconColor: COLORS.green },
];

const bookingMenu: MenuItem[] = [
  { label: "My Bookings", icon: "calendar", route: "/(drawer)/my-bookings", iconColor: COLORS.blue },
  { label: "My Vehicle", icon: "car-sport", route: "/(drawer)/my-vehicle", iconColor: COLORS.green },
  { label: "Wallet", icon: "wallet", route: "/(drawer)/wallet", iconColor: COLORS.blue },
];

const supportMenu: MenuItem[] = [
  { label: "Help & Support", icon: "headset", route: "/(drawer)/help-support", iconColor: COLORS.blue },
  { label: "About Miles Assist", icon: "information-circle-outline", route: "/(drawer)/about", iconColor: COLORS.gray },
];

const DrawerContent = (props: any) => {
  const { width: screenWidth } = useWindowDimensions();
  const drawerWidth = screenWidth * 0.82;
  const logoWidth = drawerWidth * 1;

  const navigateTo = (route: string) => {
    props.navigation.closeDrawer();
    router.push(route as any);
  };

  const renderMenuItem = (item: MenuItem) => (
    <TouchableOpacity
      key={item.label}
      style={styles.menuItem}
      activeOpacity={0.6}
      onPress={() => navigateTo(item.route)}
    >
      {item.circleBg ? (
        <View style={[styles.iconCircle, { backgroundColor: item.circleBg }]}>
          <Ionicons name={item.icon} size={16} color={item.iconColor} />
        </View>
      ) : (
        <View style={styles.iconPlain}>
          <Ionicons name={item.icon} size={22} color={item.iconColor} />
        </View>
      )}
      <Text style={styles.menuText}>{item.label}</Text>
      <Ionicons name="chevron-forward" size={18} color="#C4C7CD" />
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Image
        source={require("@/assets/images/sidebar-logo.jpg")}
        style={[{ width: logoWidth, height: 198, marginTop: 50 }]}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <DriverAvailability fromSidebar={true} />
        <TouchableOpacity
          style={styles.profileCard}
          activeOpacity={0.7}
          onPress={() => navigateTo("/(drawer)/(tabs)/profile")}
        >
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={28} color="#FFFFFF" />
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.nameRow}>
              <Text style={styles.profileName}>Jay Dave</Text>
              <Ionicons name="checkmark-circle" size={16} color={COLORS.blue} />
            </View>
            <Text style={styles.profileId}>MA12345678</Text>
            <View style={styles.verifiedRow}>
              <Ionicons name="shield-checkmark" size={13} color={COLORS.green} />
              <Text style={styles.verifiedText}>Verified Driver Partner</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#C4C7CD" />
        </TouchableOpacity>
        <View style={styles.menuSection}>
          {topMenu.map(renderMenuItem)}
          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.6}
            onPress={() => navigateTo("/(drawer)/sos")}
          >
            <View style={styles.sosBadge}>
              <Text style={styles.sosBadgeText}>SOS</Text>
            </View>
            <Text style={[styles.menuText, { color: COLORS.red, fontWeight: "700" }]}>
              SOS / Emergency
            </Text>
            <Ionicons name="chevron-forward" size={18} color="#C4C7CD" />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.menuSection}>{bookingMenu.map(renderMenuItem)}</View>
        <View style={styles.divider} />
        <View style={styles.menuSection}>{supportMenu.map(renderMenuItem)}</View>
        <View style={styles.infoBanner}>
          <Ionicons name="shield-checkmark" size={28} color={COLORS.navy} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.infoBannerTitle}>We're Here to Help!</Text>
            <Text style={styles.infoBannerSubtitle}>
              One app. Many services. Always by your side.
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
          <Ionicons name="log-out-outline" size={20} color={COLORS.red} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerBanner: {
    alignItems: "center"
  },
  logo: {
    height: undefined,
    aspectRatio: 1,
  },
  tagline: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 16,
  },
  availabilityCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },
  availabilityTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },
  availabilitySubtitle: {
    fontSize: 11,
    color: COLORS.gray,
    marginTop: 2,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
  },
  avatarCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#93C5FD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  profileName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },
  profileId: {
    fontSize: 12,
    color: COLORS.blue,
    marginTop: 2,
  },
  verifiedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  verifiedText: {
    fontSize: 11,
    color: COLORS.green,
    fontWeight: "600",
  },
  menuSection: {
    marginBottom: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  iconPlain: {
    width: 30,
    alignItems: "center",
    marginRight: 14,
  },
  menuText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    color: "#1F2937",
  },
  sosBadge: {
    width: 30,
    height: 22,
    borderRadius: 5,
    backgroundColor: COLORS.red,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  sosBadgeText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "800",
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 8,
  },
  infoBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.bannerBg,
    borderRadius: 14,
    padding: 14,
    marginTop: 12,
  },
  infoBannerTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
  infoBannerSubtitle: {
    fontSize: 11,
    color: COLORS.gray,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: COLORS.logoutBg,
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: 16,
  },
  logoutText: {
    color: COLORS.red,
    fontWeight: "700",
    fontSize: 14,
  },
  versionText: {
    textAlign: "center",
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 16,
  },
});

export default DrawerContent;