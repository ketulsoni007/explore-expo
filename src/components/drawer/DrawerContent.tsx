import { TranslationKey, useLanguage } from "@/context/LanguageContext";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";

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
  bronze: "#CD7F32",
  silver: "#A8A9AD",
  gold: "#D4AF37",
};

type MenuItem = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
  iconColor: string;
  circleBg?: string;
};

const TIERS = [
  { key: "bronze", label: "Bronze", color: COLORS.bronze },
  { key: "silver", label: "Silver", color: COLORS.silver },
  { key: "gold", label: "Gold", color: COLORS.gold },
];

const topMenu: MenuItem[] = [
  { label: "Home", icon: "home", route: "/(drawer)/(tabs)", iconColor: COLORS.navy },
  { label: "Free Food", icon: "restaurant", route: "/(drawer)/free-food", iconColor: "#FFFFFF", circleBg: COLORS.orange },
  { label: "Free Stay", icon: "business", route: "/(drawer)/free-stay", iconColor: "#FFFFFF", circleBg: COLORS.purple },
  { label: "Services", icon: "grid", route: "/(drawer)/(tabs)/services", iconColor: COLORS.blue },
  { label: "Activities", icon: "trending-up", route: "/(drawer)/(tabs)/activities", iconColor: COLORS.green },
];

const bookingMenu: MenuItem[] = [
  { label: "My Bookings", icon: "medal", route: "/(drawer)/my-bookings", iconColor: COLORS.blue },
  { label: "My Vehicle", icon: "car-sport", route: "/(drawer)/my-vehicle", iconColor: COLORS.green },
  { label: "Wallet", icon: "wallet", route: "/(drawer)/wallet", iconColor: COLORS.blue },
];

const supportMenu: MenuItem[] = [
  { label: "Help & Support", icon: "headset", route: "/(drawer)/help-support", iconColor: COLORS.blue },
  { label: "About Miles Assist", icon: "information-circle-outline", route: "/(drawer)/about", iconColor: COLORS.gray },
];

const DrawerContent = (props: any) => {
  const { t } = useLanguage();
  const { width: screenWidth } = useWindowDimensions();
  const drawerWidth = screenWidth * 0.82;
  const logoWidth = drawerWidth * 1;
  const appVersion = Constants.expoConfig?.version ?? "0.0.0";

  const menuTranslations: Record<string, TranslationKey> = {
    Home: "home",
    "Free Food": "freeFood",
    "Free Stay": "freeStay",
    Services: "services",
    Activities: "activities",
    "My Bookings": "myBookings",
    "My Vehicle": "myVehicle",
    Wallet: "wallet",
    "Help & Support": "helpSupport",
    "About Miles Assist": "about",
  };

  const [isTierOpen, setIsTierOpen] = useState(false);

  const navigateTo = (route: string) => {
    props.navigation.closeDrawer();
    router.push(route as any);
  };

  const toggleTierAccordion = () => {
    setIsTierOpen((prev) => !prev);
  };

  const onTierPress = (tierKey: string) => {
    // No redirect for now
    console.log("Tier selected:", tierKey);
    setIsTierOpen(false);
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
      <Text style={styles.menuText}>{t(menuTranslations[item.label] ?? "home")}</Text>
      <Ionicons name="chevron-forward" size={18} color="#C4C7CD" />
    </TouchableOpacity>
  );

  const renderTierAccordion = (item: MenuItem) => (
    <View key={item.label}>
      <TouchableOpacity
        style={styles.menuItem}
        activeOpacity={0.6}
        onPress={toggleTierAccordion}
      >
        <View style={styles.iconPlain}>
          <Ionicons name={item.icon} size={22} color={item.iconColor} />
        </View>
        <Text style={styles.menuText}>{t('Tier')}</Text>
        <Ionicons
          name={isTierOpen ? "chevron-up" : "chevron-down"}
          size={18}
          color="#C4C7CD"
        />
      </TouchableOpacity>

      {isTierOpen && (
        <View style={styles.tierContainer}>
          {TIERS.map((tier) => (
            <TouchableOpacity
              key={tier.key}
              style={styles.tierItem}
              activeOpacity={0.6}
              onPress={() => onTierPress(tier.key)}
            >
              <View style={[styles.tierDot, { backgroundColor: tier.color }]} />
              <Text style={styles.tierLabel}>{tier.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Image
        source={require("@/assets/images/sidebar-logo.jpeg")}
        style={[{ width: logoWidth, height: 175, marginTop: 5 }]}
        resizeMode="contain"
      />
      <View style={styles.content}>
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
              <Text style={styles.verifiedText}>{t('Verified Driver Partner')}</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#C4C7CD" />
        </TouchableOpacity>
        <View style={styles.menuSection}>
          {topMenu.map(renderMenuItem)}
        </View>
        <View style={styles.divider} />
        <View style={styles.menuSection}>
          {bookingMenu.map((item) =>
            item.label === "My Bookings"
              ? renderTierAccordion(item)
              : renderMenuItem(item)
          )}
        </View>
        <View style={styles.divider} />
        <View style={styles.menuSection}>{supportMenu.map(renderMenuItem)}</View>
        <View style={styles.infoBanner}>
          <Ionicons name="shield-checkmark" size={28} color={COLORS.navy} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.infoBannerTitle}>{t("We're Here to Help!")}</Text>
            <Text style={styles.infoBannerSubtitle}>
              {t('One app. Many services. Always by your side.')}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
          <Ionicons name="log-out-outline" size={20} color={COLORS.red} />
          <Text style={styles.logoutText}>{t('Logout')}</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version {appVersion}</Text>
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
    marginBottom: 8,
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
  tierContainer: {
    paddingLeft: 44,
    paddingBottom: 6,
  },
  tierItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
  },
  tierDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  tierLabel: {
    fontSize: 13,
    color: "#374151",
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
    paddingBottom: 26,
  },
});

export default DrawerContent;