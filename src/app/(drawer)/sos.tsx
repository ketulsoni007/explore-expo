import { useLanguage } from "@/context/LanguageContext";
import { Text, View } from "react-native";

export default function SosScreen() {
  const { t } = useLanguage();

  return (
    <View>
      <Text>{t("emergency")}</Text>
    </View>
  );
}
