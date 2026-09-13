import { useLanguage } from "@/context/LanguageContext";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";

const WhatYouGetCard = ({ styles, theme, perks }: any) => {
  const { t } = useLanguage();

  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionHeaderRow}>
        <Ionicons name="gift-outline" size={18} color={theme.primary} />
        <Text style={styles.sectionHeaderText}>{t('What You Get (100% Free)')}</Text>
      </View>

      <FlatList
        data={perks}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.title}
        contentContainerStyle={styles.perksListContent}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }: any) => (
          <View style={[styles.perkCard, { backgroundColor: theme.primaryBg }]}>
            <Ionicons name={item.icon} size={18} color={theme.primary} />
            <Text style={styles.perkTitle}>{t(item.title)}</Text>
            <Text style={styles.perkSubtitle}>{t(item.subtitle)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default WhatYouGetCard;