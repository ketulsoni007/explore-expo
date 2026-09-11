import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import FreeFoodPromoCard from "./FreeFoodPromoCard";
import FreeStayPromoCard from "./FreeStayPromoCard";

const PromoCards = () => {
  return (
    <View style={styles.row}>
      <FreeFoodPromoCard onPress={() => router.push('/(drawer)/(tabs)/search')} />
      <FreeStayPromoCard onPress={() => router.push('/(drawer)/(tabs)/search')} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
});

export default PromoCards;