import DrawerContent from "@/components/drawer/DrawerContent";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Logo = () => (
  <Image
    source={require("@/assets/images/mile-logo.png")}
    style={styles.logo}
    resizeMode="contain"
  />
);

const NotificationBell = () => {
  const hasUnreadNotifications = true;

  const onNotificationPress = () => {};

  return (
    <TouchableOpacity
      onPress={onNotificationPress}
      hitSlop={10}
      style={styles.iconContainer}
    >
      <Ionicons
        name="notifications-outline"
        size={26}
        color="#000"
      />

      {hasUnreadNotifications && (
        <View style={styles.badge} />
      )}
    </TouchableOpacity>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitle: () => <Logo />,
        headerRight: () => <NotificationBell />,
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
    width: 150,
    height: 40,
  },

  iconContainer: {
    position: "relative",
    marginRight: 16,
    padding: 5,
  },

  badge: {
    position: "absolute",
    top: 1,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF3B30",
  },
});