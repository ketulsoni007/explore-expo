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
      'Show your valid Miles Assist membership and driver ID when you arrive. The complimentary meal is subject to partner availability and cannot be exchanged for cash.',
  },
  {
    icon: 'card-outline',
    title: 'Rules & Guidelines',
    subtitle: 'Service usage rules',
    content:
      'The meal benefit is for the registered driver only. Use the benefit during the listed service hours and follow the restaurant’s seating and ordering guidelines.',
  },
  {
    icon: 'help-circle-outline',
    title: 'How It Works',
    subtitle: 'Step-by-step process',
    content:
      'Find a partner restaurant on your route, show your booking or membership details, and place your eligible meal order. Confirm the benefit with restaurant staff before ordering extras.',
  },
  {
    icon: 'location-outline',
    title: 'Partner Restaurant Network',
    subtitle: 'Find restaurants near you',
    content:
      'Our partner network includes restaurants and highway stops near major routes. Availability may vary by location, opening hours, and the restaurant’s current capacity.',
  },
  {
    icon: 'ribbon-outline',
    title: 'Food Safety & Hygiene',
    subtitle: 'Our food quality standards',
    content:
      'Partner restaurants are expected to maintain clean preparation areas, safe food handling, and hygienic serving practices. Report any concern to Miles Assist support.',
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