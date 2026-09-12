import DrawerContent from "@/components/drawer/DrawerContent";
import { TranslationKey, useLanguage } from "@/context/LanguageContext";
import { Ionicons } from "@expo/vector-icons";
import { router, useGlobalSearchParams, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Logo = () => (
  <Pressable>
    <Image
      source={require("@/assets/images/mile-logo.png")}
      style={styles.logo}
      resizeMode="contain"
    />
  </Pressable>
);

const getScreenTitle = (
  pathname: string,
  category: string | string[] | undefined,
  t: (key: TranslationKey) => string,
) => {
  const titles: Record<string, string> = {
    "/(drawer)/(tabs)": t("home"),
    "/(drawer)/(tabs)/activities": t("activities"),
    "/(drawer)/(tabs)/profile": t("profile"),
    "/(drawer)/(tabs)/search": t("search"),
    "/(drawer)/(tabs)/services": t("services"),
  };

  const routeName = pathname.split("/").filter(Boolean).pop();
  const routeTitles: Record<string, string> = {
    activities: t("activities"),
    about: t("about"),
    "free-food": t("freeFood"),
    "free-stay": t("freeStay"),
    "help-support": t("helpSupport"),
    home: t("home"),
    "my-bookings": t("myBookings"),
    "my-vehicle": t("myVehicle"),
    profile: t("profile"),
    "reward-points": t("rewardPoints"),
    search: t("findFoodStay"),
    services: t("services"),
    settings: t("settings"),
    sos: t("emergency"),
    wallet: t("wallet"),
    "search-result": t("searchResults"),
    "search-detail": t("searchDetail"),
    "hotel-service": t("hotelServices"),
    "restaurant-service": t("restaurantServices"),
    "insurance-service": t("insuranceServices"),
    "road-assist-service": t("roadAssistServices"),
    "lawyer-service": t("lawyerServices"),
    "miles-support": t("milesSupport"),
    notifications: t("notifications"),
    "my-information": t("myInformation"),
    "document-verification": t("verificationDocuments"),
  };

  const normalizedCategory = Array.isArray(category) ? category[0] : category;

  if (routeName === "search-result") {
    return normalizedCategory === "hotel"
      ? t("hotelsOnRoute")
      : t("restaurantsOnRoute");
  }

  if (routeName === "search-detail") {
    return normalizedCategory === "hotel" ? t("hotelDetail") : t("restaurantDetail");
  }

  return titles[pathname] ?? routeTitles[routeName ?? ""] ?? t("home");
};

const HeaderRight = () => {
  const { language: currentLanguage, setLanguage, t } = useLanguage();
  const hasUnreadNotifications = true;
  const [isLanguageMenuVisible, setLanguageMenuVisible] = useState(false);

  const languages = ["English", "Hindi", "Gujarati"] as const;

  const onLanguagePress = () => {
    setLanguageMenuVisible((visible) => !visible);
  };

  const onLanguageSelect = (nextLanguage: (typeof languages)[number]) => {
    setLanguage(nextLanguage);
    setLanguageMenuVisible(false);
  };

  const onNotificationPress = () => {
    router.push('/(drawer)/notifications');
  };

  return (
    <>
      <View style={styles.headerRightContainer}>
        <TouchableOpacity
          onPress={onLanguagePress}
          hitSlop={8}
          style={styles.iconContainer}
          accessibilityLabel={t("selectLanguage")}
          accessibilityRole="button"
        >
          <Ionicons name="language-outline" size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onNotificationPress}
          hitSlop={8}
          style={styles.iconContainer}
          accessibilityLabel="Notifications"
          accessibilityRole="button"
        >
          <Ionicons name="notifications-outline" size={24} color="#000" />
          {hasUnreadNotifications && <View style={styles.badge} />}
        </TouchableOpacity>
      </View>

      <Modal
        visible={isLanguageMenuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setLanguageMenuVisible(false)}
      >
        <Pressable
          style={styles.languageOverlay}
          onPress={() => setLanguageMenuVisible(false)}
        >
          <View style={styles.languageMenu}>
            {languages.map((language) => (
              <Pressable
                key={language}
                onPress={() => onLanguageSelect(language)}
                style={({ pressed }) => [
                  styles.languageOption,
                  pressed && styles.languageOptionPressed,
                ]}
              >
                <Text style={styles.languageText}>{language}</Text>
                {currentLanguage === language && (
                  <Ionicons name="checkmark" size={18} color="#3366FF" />
                )}
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default function DrawerLayout() {
  const pathname = usePathname();
  const { category } = useGlobalSearchParams<{ category?: string | string[] }>();
  const { t } = useLanguage();

  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitle:
          pathname === "/"
            ? () => <Logo />
            : getScreenTitle(pathname, category, t),
        headerRight: () => <HeaderRight />,
        drawerStyle: {
          width: "82%",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: t("home"),
          title: t("home"),
        }}
      />

      <Drawer.Screen
        name="free-food"
        options={{
          drawerLabel: t("freeFood"),
          title: t("freeFood"),
        }}
      />

      <Drawer.Screen
        name="free-stay"
        options={{
          drawerLabel: t("freeStay"),
          title: t("freeStay"),
        }}
      />

      <Drawer.Screen
        name="sos"
        options={{
          drawerLabel: t("emergency"),
          title: t("emergency"),
        }}
      />

      <Drawer.Screen
        name="my-bookings"
        options={{
          drawerLabel: t("myBookings"),
          title: t("myBookings"),
        }}
      />

      <Drawer.Screen
        name="my-vehicle"
        options={{
          drawerLabel: t("myVehicle"),
          title: t("myVehicle"),
        }}
      />

      <Drawer.Screen
        name="wallet"
        options={{
          drawerLabel: t("wallet"),
          title: t("wallet"),
        }}
      />

      <Drawer.Screen
        name="reward-points"
        options={{
          drawerLabel: t("rewardPoints"),
          title: t("rewardPoints"),
        }}
      />

      <Drawer.Screen
        name="help-support"
        options={{
          drawerLabel: t("helpSupport"),
          title: t("helpSupport"),
        }}
      />

      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: t("about"),
          title: t("about"),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: t("settings"),
          title: t("settings"),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 38,
  },

  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 12,
  },

  iconContainer: {
    position: "relative",
    padding: 6,
    marginLeft: 8,
  },

  badge: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF3B30",
  },

  languageOverlay: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: "transparent",
    paddingTop: 58,
    paddingRight: 58,
  },

  languageMenu: {
    width: 150,
    paddingVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  languageOption: {
    minHeight: 44,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  languageOptionPressed: {
    backgroundColor: "#F3F6FF",
  },

  languageText: {
    fontSize: 14,
    color: "#222",
  },
});