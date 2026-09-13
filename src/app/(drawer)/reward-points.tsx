import { useLanguage } from "@/context/LanguageContext";
import { Text, View } from "react-native";

export default function RewardPointsScreen() {
  const { t } = useLanguage();

  return (
    <View>
      <Text>{t("rewardPoints")}</Text>
    </View>
  );
}
