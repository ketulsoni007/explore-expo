import { useLanguage } from "@/context/LanguageContext";
import { Text, View } from "react-native";

export default function SettingsScreen() {
  const { t } = useLanguage();

  return (
    <View>
      <Text>{t("settings")}</Text>
    </View>
  );
}
