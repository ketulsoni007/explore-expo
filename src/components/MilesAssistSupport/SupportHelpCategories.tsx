import { useLanguage } from '@/context/LanguageContext';
import {
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from '@expo/vector-icons';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

const categories = [
  {
    id: 'general',
    title: 'General Queries',
    icon: <Ionicons name="help-circle-outline" size={22} color="#0052FF" />,
  },
  {
    id: 'trips',
    title: 'Trips & Earnings',
    icon: <Ionicons name="document-text-outline" size={22} color="#0052FF" />,
  },
  {
    id: 'safety',
    title: 'Account & Safety',
    icon: <Ionicons name="shield-checkmark-outline" size={22} color="#0052FF" />,
  },
  {
    id: 'services',
    title: 'Services Support',
    icon: <MaterialCommunityIcons name="tow-truck" size={22} color="#0052FF" />,
  },
  {
    id: 'more',
    title: 'And More',
    icon: <MaterialIcons name="more-horiz" size={22} color="#0052FF" />,
  },
];

export default function SupportHelpCategories() {
  const { t } = useLanguage();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{t('What We Help With')}</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoriesGrid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard} activeOpacity={0.7}>
            <View style={styles.categoryIcon}>{item.icon}</View>
            <Text style={styles.categoryText}>{t(item.title)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}