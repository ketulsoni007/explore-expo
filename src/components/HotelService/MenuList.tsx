import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './colors';

export type MenuItem = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  content: string;
  onPress?: () => void;
};

const MENU_ITEMS: MenuItem[] = [
  {
    icon: 'document-text-outline',
    title: 'Terms & Conditions',
    subtitle: 'Read detailed T&C',
    content:
      'Show your valid Miles Assist membership and driver ID at check-in. The free stay is subject to partner availability and cannot be exchanged for cash.',
  },
  {
    icon: 'card-outline',
    title: 'Rules & Guidelines',
    subtitle: 'Service usage rules',
    content:
      'Bookings are for the registered driver only. Carry a government-issued ID, keep the room tidy, and follow the hotel’s check-in and check-out policies.',
  },
  {
    icon: 'help-circle-outline',
    title: 'How It Works',
    subtitle: 'Step-by-step process',
    content:
      'Search for a partner hotel, choose an available stay, and confirm your request. You will receive the hotel details and booking reference before arrival.',
  },
  {
    icon: 'location-outline',
    title: 'Partner Hotel Network',
    subtitle: 'View locations & availability',
    content:
      'Partner hotels are available along major routes and near transport hubs. Availability changes by location, date, and current demand, so check before travelling.',
  },
  {
    icon: 'ribbon-outline',
    title: 'Hotel Stay Policy',
    subtitle: 'Limits, duration & other policies',
    content:
      'Eligible drivers can request one complimentary night per approved journey. Early check-in, late check-out, meals, and extra guests may incur additional charges.',
  },
];

type Props = {
  items?: MenuItem[];
};

const MenuList = ({ items = MENU_ITEMS }: Props) => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <View style={styles.card}>
      {items.map((item, index) => (
        <View key={item.title} style={index !== items.length - 1 && styles.divider}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              setExpandedIndex((current) => (current === index ? null : index));
              item.onPress?.();
            }}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={{ expanded: expandedIndex === index }}
          >
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={20} color={colors.primary} />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.title}>{t(item.title)}</Text>
              <Text style={styles.subtitle}>{t(item.subtitle)}</Text>
            </View>
            <Ionicons
              name={expandedIndex === index ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={colors.textMuted}
            />
          </TouchableOpacity>
          {expandedIndex === index && (
            <View style={styles.contentBox}>
              <Text style={styles.contentText}>{t(item.content)}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12.5,
    color: colors.textMuted,
  },
  contentBox: {
    paddingHorizontal: 70,
    paddingRight: 18,
    paddingBottom: 16,
  },
  contentText: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.textMuted,
  },
});

export default MenuList;