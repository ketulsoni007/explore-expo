import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen name="free-food" options={{ drawerLabel: "Free Food", title: "Free Food" }} />
      <Drawer.Screen name="free-stay" options={{ drawerLabel: "Free Stay", title: "Free Stay" }} />
      <Drawer.Screen name="sos" options={{ drawerLabel: "SOS / Emergency", title: "SOS / Emergency" }} />
      <Drawer.Screen name="my-bookings" options={{ drawerLabel: "My Bookings", title: "My Bookings" }} />
      <Drawer.Screen name="my-vehicle" options={{ drawerLabel: "My Vehicle", title: "My Vehicle" }} />
      <Drawer.Screen name="reward-points" options={{ drawerLabel: "Reward Points", title: "Reward Points" }} />
      <Drawer.Screen name="help-support" options={{ drawerLabel: "Help & Support", title: "Help & Support" }} />
      <Drawer.Screen name="about" options={{ drawerLabel: "About", title: "About" }} />
      <Drawer.Screen name="settings" options={{ drawerLabel: "Settings", title: "Settings" }} />
    </Drawer>
  );
}
