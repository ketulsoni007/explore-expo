import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const COLORS = {
  available: "#16A34A",
  availableBg: "#DCFCE7",
  unavailable: "#9CA3AF",
  unavailableBg: "#9CA3AF",
  title: "#0F172A",
  subtitle: "#6B7280",
  border: "#E5E7EB",
  cardBg: "#FFFFFF",
};

type DriverAvailabilityProps = {
  fromSidebar?: boolean
}

const DriverAvailability = ({fromSidebar = false} : DriverAvailabilityProps) => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <View style={[styles.card,{marginHorizontal: fromSidebar ? 0 : 16, marginBottom:fromSidebar ? 10 : 0}]}>
      <View
        style={[
          styles.iconCircle,
          { backgroundColor: isAvailable ? COLORS.available : COLORS.unavailable },
        ]}
      >
        <Ionicons name="car" size={22} color="#FFFFFF" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Driving Availability</Text>
        <Text style={styles.subtitle}>
          {isAvailable
            ? "You are currently available to receive requests."
            : "You are currently not receiving requests."}
        </Text>
      </View>

      <View style={styles.switchContainer}>
        <Switch
          value={isAvailable}
          onValueChange={setIsAvailable}
          trackColor={{ false: COLORS.unavailableBg, true: COLORS.availableBg }}
          thumbColor={isAvailable ? COLORS.available : "#FFFFFF"}
          ios_backgroundColor={COLORS.unavailableBg}
        />
        <Text
          style={[
            styles.statusLabel,
            { color: isAvailable ? COLORS.available : COLORS.unavailable },
          ]}
        >
          {isAvailable ? "Available" : "Unavailable"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 10,
    marginTop: 12,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: COLORS.title,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.subtitle,
    lineHeight: 16,
  },
  switchContainer: {
    alignItems: "center",
  },
  statusLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
});

export default DriverAvailability;