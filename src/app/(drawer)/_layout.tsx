import DrawerContent from "@/components/drawer/DrawerContent";
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

const getScreenTitle = (pathname: string, category?: string | string[]) => {
  const titles: Record<string, string> = {
    "/(drawer)/(tabs)": "Home",
    "/(drawer)/(tabs)/activities": "Activities",
    "/(drawer)/(tabs)/profile": "Profile",
    "/(drawer)/(tabs)/search": "Search",
    "/(drawer)/(tabs)/services": "Services",
  };

  const routeName = pathname.split("/").filter(Boolean).pop();
  const routeTitles: Record<string, string> = {
    activities: "Activities",
    about: "About us",
    "free-food": "Free Food",
    "free-stay": "Free Stay",
    "help-support": "Help & Support",
    home: "Home",
    "my-bookings": "My Bookings",
    "my-vehicle": "My Vehicle",
    profile: "Profile",
    "reward-points": "Reward Points",
    search: "Find Food & Stay",
    services: "Services",
    settings: "Settings",
    sos: "SOS / Emergency",
    wallet: "Wallet",
    "search-result": "Search Results",
    "search-detail" : "Search Detail",
    "hotel-service" : "Services",
    "restaurant-service" : "Services",
    "insurance-service" : "Services",
    "road-assist-service" : "Services",
    "lawyer-service" : "Services",
    "miles-support" : "Services",
    "notifications" : "Notifications",
    "my-information" : "My Information",
    "document-verification" : "Verification & Documents"
  };

  const normalizedCategory = Array.isArray(category) ? category[0] : category;

  if (routeName === "search-result") {
    return normalizedCategory === "hotel"
      ? "Hotels on your route"
      : "Restaurants on your route";
  }

  if (routeName === "search-detail") {
    return normalizedCategory === "hotel" ? "Hotel detail" : "Restaurant detail";
  }

  return titles[pathname] ?? routeTitles[routeName ?? ""] ?? "Home";
};

const HeaderRight = () => {
  const hasUnreadNotifications = true;
  const [isLanguageMenuVisible, setLanguageMenuVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Hindi", "Gujarati"];

  const onLanguagePress = () => {
    setLanguageMenuVisible((visible) => !visible);
  };

  const onLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
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
          accessibilityLabel="Select language"
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
                {selectedLanguage === language && (
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

  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitle:
          pathname === "/"
            ? () => <Logo />
            : getScreenTitle(pathname, category),
        headerRight: () => <HeaderRight />,
        drawerStyle: {
          width: "82%",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />

      <Drawer.Screen
        name="free-food"
        options={{
          drawerLabel: "Free Food",
          title: "Free Food",
        }}
      />

      <Drawer.Screen
        name="free-stay"
        options={{
          drawerLabel: "Free Stay",
          title: "Free Stay",
        }}
      />

      <Drawer.Screen
        name="sos"
        options={{
          drawerLabel: "SOS / Emergency",
          title: "SOS / Emergency",
        }}
      />

      <Drawer.Screen
        name="my-bookings"
        options={{
          drawerLabel: "My Bookings",
          title: "My Bookings",
        }}
      />

      <Drawer.Screen
        name="my-vehicle"
        options={{
          drawerLabel: "My Vehicle",
          title: "My Vehicle",
        }}
      />

      <Drawer.Screen
        name="wallet"
        options={{
          drawerLabel: "Wallet",
          title: "Wallet",
        }}
      />

      <Drawer.Screen
        name="reward-points"
        options={{
          drawerLabel: "Reward Points",
          title: "Reward Points",
        }}
      />

      <Drawer.Screen
        name="help-support"
        options={{
          drawerLabel: "Help & Support",
          title: "Help & Support",
        }}
      />

      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "About",
          title: "About",
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
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