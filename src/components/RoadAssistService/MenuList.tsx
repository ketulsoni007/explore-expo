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
    content: 'Roadside assistance is available for eligible members and registered vehicles. Availability depends on location, provider capacity, and the selected plan.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'card-outline',
    title: 'Rules & Guidelines',
    subtitle: 'Service usage rules',
    content: 'Move to a safe location when possible, turn on hazard lights, and share accurate vehicle and location details. Do not attempt unsafe repairs on a live road.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'help-circle-outline',
    title: 'How It Works',
    subtitle: 'Step-by-step process',
    content: 'Request help with your current location, choose the required service, and receive an estimated arrival time. Confirm completion after the issue is resolved.',
  },
  {
    iconFamily: 'material-community',
    icon: 'tow-truck',
    title: 'Services We Provide',
    subtitle: 'Towing, tyre change, battery & more',
    content: 'Get help with towing, flat tyres, jump starts, fuel delivery, lockouts, and minor roadside repairs. The exact service depends on your vehicle and situation.',
  },
  {
    iconFamily: 'ionicon',
    icon: 'location-outline',
    title: 'Coverage Areas',
    subtitle: 'Where we provide assistance',
    content: 'Assistance is available across major highways, cities, and supported travel routes. Coverage may be limited in remote areas, so share a precise GPS location.',
  },
  // {
  //   iconFamily: 'ionicon',
  //   icon: 'headset-outline',
  //   title: 'Request Assistance',
  //   subtitle: 'How to raise a request',
  // },
  // {
  //   iconFamily: 'ionicon',
  //   icon: 'document-outline',
  //   title: 'Claim & Feedback',
  //   subtitle: 'Track requests & share feedback',
  // },
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
