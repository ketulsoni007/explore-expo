import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type PromoCardItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  iconBgColor: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaColor: string;
  cardBgColor: string;
  illustration: ImageSourcePropType;
  illustrationPosition: "left" | "right";
  onPress?: () => void;
};

const PromoCardItem = ({
  icon,
  iconBgColor,
  title,
  description,
  ctaLabel,
  ctaColor,
  cardBgColor,
  illustration,
  illustrationPosition,
  onPress,
}: PromoCardItemProps) => {
  return (
    <View style={[styles.card, { backgroundColor: cardBgColor }]}>
      <Image
        source={illustration}
        style={[
          styles.illustration,
          illustrationPosition === "left" ? { left: -14 } : { right: -14 },
        ]}
        resizeMode="contain"
      />

      <View style={[styles.iconCircle, { backgroundColor: iconBgColor }]}>
        <Ionicons name={icon} size={20} color="#FFFFFF" />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity
        style={[styles.ctaButton, { backgroundColor: ctaColor }]}
        activeOpacity={0.85}
        onPress={onPress}
      >
        <Text style={styles.ctaText}>{ctaLabel}</Text>
        <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
    overflow: "hidden",
    position: "relative",
    minHeight: 210,
  },
  illustration: {
    position: "absolute",
    top: 0,
    width: 120,
    height: 85,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: "#475569",
    lineHeight: 17,
    marginBottom: 14,
  },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 12,
    paddingVertical: 11,
    marginTop: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  ctaText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },
});

export default PromoCardItem;