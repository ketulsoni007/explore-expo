import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = {
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  border: '#E5E9F0',
  green: '#16A34A',
  greenBg: '#DCFCE7',
};

const MenuRow = ({ item, isLast }: any) => {
  return (
    <TouchableOpacity style={[styles.menuRow, !isLast && styles.menuRowBorder]}>
      <View style={[styles.menuIconWrap, { backgroundColor: item.bg }]}>
        {item.icon}
      </View>
      
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{item.title}</Text>
        <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
      </View>

      {item.badge && (
        <View style={styles.menuBadge}>
          <Text style={styles.menuBadgeText}>{item.badge}</Text>
        </View>
      )}

      <Ionicons name="chevron-forward" size={18} color={COLORS.textSecondary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  menuIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  menuContent: {
    flex: 1,
    marginLeft: 12,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  menuSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  menuBadge: {
    backgroundColor: COLORS.greenBg,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 6,
  },
  menuBadgeText: {
    fontSize: 11,
    color: COLORS.green,
    fontWeight: '600',
  },
});

export default MenuRow;