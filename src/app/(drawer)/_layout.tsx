import DrawerContent from "@/components/drawer/DrawerContent";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";

const Logo = () => (
  <Pressable onPress={() => router.push('/(drawer)/(tabs)')}>
    <Image
      source={require("@/assets/images/mile-logo.png")}
      style={styles.logo}
      resizeMode="contain"
    />
  </Pressable>
);

const HeaderRight = () => {
  const hasUnreadNotifications = true;

  const onLanguagePress = () => {
    // Handle language toggle / modal
  };

  const onNotificationPress = () => {
    // Navigate to notifications screen or handle click
  };

  return (
    <View style={styles.headerRightContainer}>
      {/* Language Icon */}
      <TouchableOpacity
        onPress={onLanguagePress}
        hitSlop={8}
        style={styles.iconContainer}
      >
        <Ionicons
          name="language-outline"
          size={24}
          color="#000"
        />
      </TouchableOpacity>

      {/* Notification Bell */}
      <TouchableOpacity
        onPress={onNotificationPress}
        hitSlop={8}
        style={styles.iconContainer}
      >
        <Ionicons
          name="notifications-outline"
          size={24}
          color="#000"
        />
        {hasUnreadNotifications && <View style={styles.badge} />}
      </TouchableOpacity>
    </View>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitle: () => <Logo />,
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
});