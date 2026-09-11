import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './colors';

export type MenuItem = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

const MENU_ITEMS: MenuItem[] = [
  { icon: 'document-text-outline', title: 'Terms & Conditions', subtitle: 'Read detailed T&C' },
  { icon: 'card-outline', title: 'Rules & Guidelines', subtitle: 'Service usage rules' },
  { icon: 'help-circle-outline', title: 'How It Works', subtitle: 'Step-by-step process' },
  {
    icon: 'shield-checkmark-outline',
    title: 'Insurance Plans',
    subtitle: 'Explore plans & coverage',
  },
  { icon: 'document-outline', title: 'Claim Process', subtitle: 'How to raise & track claims' },
  { icon: 'headset-outline', title: '24/7 Claim Support', subtitle: "We're here to help you" },
];

type Props = {
  items?: MenuItem[];
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
            <Ionicons name={item.icon} size={20} color={colors.primary} />
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