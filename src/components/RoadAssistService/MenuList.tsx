import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './colors';

type IconFamily = 'ionicon' | 'material-community';

export type MenuItem = {
  iconFamily: IconFamily;
  icon: keyof typeof Ionicons.glyphMap | keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

const MENU_ITEMS: MenuItem[] = [
  {
    iconFamily: 'ionicon',
    icon: 'document-text-outline',
    title: 'Terms & Conditions',
    subtitle: 'Read detailed T&C',
  },
  {
    iconFamily: 'ionicon',
    icon: 'card-outline',
    title: 'Rules & Guidelines',
    subtitle: 'Service usage rules',
  },
  {
    iconFamily: 'ionicon',
    icon: 'help-circle-outline',
    title: 'How It Works',
    subtitle: 'Step-by-step process',
  },
  {
    iconFamily: 'material-community',
    icon: 'tow-truck',
    title: 'Services We Provide',
    subtitle: 'Towing, tyre change, battery & more',
  },
  {
    iconFamily: 'ionicon',
    icon: 'location-outline',
    title: 'Coverage Areas',
    subtitle: 'Where we provide assistance',
  },
  {
    iconFamily: 'ionicon',
    icon: 'headset-outline',
    title: 'Request Assistance',
    subtitle: 'How to raise a request',
  },
  {
    iconFamily: 'ionicon',
    icon: 'document-outline',
    title: 'Claim & Feedback',
    subtitle: 'Track requests & share feedback',
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
  return (
    <View style={styles.card}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={item.title}
          style={[styles.row, index !== items.length - 1 && styles.divider]}
          onPress={item.onPress}
          activeOpacity={0.7}
        >
          <View style={styles.iconBox}>
            <MenuIcon item={item} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
        </TouchableOpacity>
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
});

export default MenuList;
