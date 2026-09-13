import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const FeatureGrid = () => {
  const { t } = useLanguage();

  return (
    <View style={styles.card}>
      <View style={styles.item}>
        <View style={styles.iconCircle}>
          <Ionicons name="shield-checkmark" size={22} color={colors.primary} />
        </View>
        <Text style={styles.label}>{t('24x7 Support')}</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="tow-truck" size={22} color={colors.primary} />
        </View>
        <Text style={styles.label}>{t('Quick Response')}</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.iconCircle}>
          <Ionicons name="build-outline" size={22} color={colors.primary} />
        </View>
        <Text style={styles.label}>{t('On-Road Assistance')}</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.iconCircle}>
          <Ionicons name="location" size={22} color={colors.primary} />
        </View>
        <Text style={styles.label}>{t('Pan India Coverage')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: colors.textDark,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default FeatureGrid;
