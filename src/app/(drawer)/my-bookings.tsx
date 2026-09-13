import { useLanguage } from "@/context/LanguageContext";
import { Text, View } from "react-native";

export default function MyBookingsScreen() {
  const { t } = useLanguage();

  return (
    <View>
      <Text>{t("myBookings")}</Text>
    </View>
  );
}
