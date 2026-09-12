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
    content: 'Coverage depends on your selected plan, policy period, and exclusions. Keep your policy schedule and documents available when requesting support.',
  },
  {
    icon: 'card-outline',
    title: 'Rules & Guidelines',
    subtitle: 'Service usage rules',
    content: 'Report incidents as soon as possible, provide accurate information, and wait for claim support to confirm the next steps before authorizing repairs.',
  },
  {
    icon: 'help-circle-outline',
    title: 'How It Works',
    subtitle: 'Step-by-step process',
    content: 'Choose a plan, review the coverage, and keep your policy details handy. When you need help, share the incident details so our team can guide you.',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Insurance Plans',
    subtitle: 'Explore plans & coverage',
    content: 'Plans may include roadside incidents, vehicle damage support, and driver assistance. Coverage limits, deductibles, and exclusions vary by plan and vehicle type.',
  },
  {
    icon: 'document-outline',
    title: 'Claim Process',
    subtitle: 'How to raise & track claims',
    content: 'Share your policy number, incident location, date and time, photos, and supporting documents. You will receive a claim reference to track progress.',
  },
  {
    icon: 'headset-outline',
    title: '24/7 Claim Support',
    subtitle: "We're here to help you",
    content: 'Our support team can help with emergencies, claim registration, document requirements, and status updates. Keep your vehicle and policy details ready.',
  },
];

type Props = {
  items?: MenuItem[];
};

const MenuList = ({ items = MENU_ITEMS }: Props) => {
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
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <Ionicons
              name={expandedIndex === index ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={colors.textMuted}
            />
          </TouchableOpacity>
          {expandedIndex === index && (
            <View style={styles.contentBox}>
              <Text style={styles.contentText}>{item.content}</Text>
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