import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const COLORS = {
  green: "#16A34A",
  red: "#DC2626",
  darkBlue: "#0F172A",
  navy: "#1E293B",
  border: "#E5E7EB",
  white: "#FFFFFF",
};

type PickupPointProps = {
  isHotel: boolean;
  pickupLocation: string;
  dropLocation: string;
  onSwap?: () => void;
};

const PickupPoint = ({ isHotel, pickupLocation, dropLocation, onSwap }: PickupPointProps) => {
  const { t } = useLanguage();
  const routeImage = isHotel
    ? require("@/assets/images/hotel-on-route.png")
    : require("@/assets/images/rest-on-route.png");

  return (
    <View style={styles.card}>
      <View style={styles.contentPadding}>
        <View style={styles.headerRow}>
          <View style={styles.pointBlock}>
            <View style={styles.labelRow}>
              <View style={[styles.dot, { backgroundColor: COLORS.green }]} />
             <Text style={[styles.pointLabel, { color: COLORS.green }]}>{t('Pickup')}</Text>
            </View>
            <Text style={styles.pointValue}>{pickupLocation}</Text>
          </View>
          <TouchableOpacity
            style={styles.swapButton}
            onPress={onSwap}
            hitSlop={10}
            activeOpacity={0.7}
          >
            <Ionicons name="swap-horizontal" size={20} color={COLORS.navy} />
          </TouchableOpacity>
          <View style={[styles.pointBlock, styles.pointBlockRight]}>
            <View style={styles.labelRow}>
              <View style={[styles.dot, { backgroundColor: COLORS.red }]} />
             <Text style={[styles.pointLabel, { color: COLORS.red }]}>{t('Drop')}</Text>
            </View>
            <Text style={styles.pointValue}>{dropLocation}</Text>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
      <Image source={routeImage} style={styles.routeImage} resizeMode="cover" />
    </View>
  );
};

export default PickupPoint;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
    marginVertical: 16,
  },

  contentPadding: {
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  pointBlock: {
    flex: 1,
  },

  pointBlockRight: {
    alignItems: "flex-end",
  },

  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  pointLabel: {
    fontSize: 14,
    fontWeight: "700",
  },

  pointValue: {
    fontSize: 13,
    color: COLORS.darkBlue,
    marginTop: 4,
    fontWeight: "500",
  },

  swapButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginTop: 14
  },

  routeImage: {
    width: "100%",
    height: 120,
  },
});