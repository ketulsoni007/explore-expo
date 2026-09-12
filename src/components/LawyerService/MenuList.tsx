import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './colors';

type IconFamily = 'ionicon' | 'material-community';

export type MenuItem = {
  iconFamily: IconFamily;
  icon: keyof typeof Ionicons.glyphMap | keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  subtitle: string;
  content: string;
  onPress?: () => void;
};

const MENU_ITEMS: MenuItem[] = [
  {
    iconFamily: 'ionicon',
    icon: 'document-text-outline',
    title: 'Terms & Conditions',
    subtitle: 'Read detailed T&C',
    content: 'Legal guidance is provided by verified partners and may vary by case. Review the service scope and any applicable fees before confirming a consultation.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'card-outline',
    title: 'Rules & Guidelines',
    subtitle: 'Service usage rules',
    content: 'Share accurate information and relevant documents. Do not share sensitive details in public channels, and follow the lawyer’s advice about urgent legal deadlines.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'help-circle-outline',
    title: 'How It Works',
    subtitle: 'Step-by-step process',
    content: 'Choose a support area, describe your issue, and submit the required details. We will match you with a legal partner and share the next steps for your consultation.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'person-outline',
    title: 'Legal Support Areas',
    subtitle: 'See issues we can help with',
    content: 'Support may include traffic violations, accident documentation, insurance disputes, vehicle paperwork, employment concerns, and other driver-related legal questions.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'people-outline',
    title: 'Our Lawyer Network',
    subtitle: 'Meet our verified legal experts',
    content: 'Our network includes verified legal professionals with experience in motor vehicle, traffic, insurance, and driver-support matters. Availability depends on location and specialization.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'headset-outline',
    title: 'How to Connect',
    subtitle: 'Multiple ways to get help',
    content: 'Request a consultation through the app or contact support with your preferred time. Keep your case summary and relevant documents ready for a faster connection.',
  },
  {
    iconFamily: 'material-community',
    icon: 'shield-lock-outline',
    title: 'Privacy & Confidentiality',
    subtitle: 'Your privacy is our priority',
    content: 'Your case information is shared only with the assigned support team and legal partner when needed. We use it to provide assistance, maintain records, and improve service quality.',
  },
];

type Props = {
  items?: MenuItem[];
};

const MenuIcon = ({ item }: { item: MenuItem }) => {
  if (item.iconFamily === 'material-community') {
    return (
      <MaterialCommunityIcons
        name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap}
        size={20}
        color={colors.primary}
      />
    );
  }
  return (
    <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={20} color={colors.primary} />
  );
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
              <MenuIcon item={item} />
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
