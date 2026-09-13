import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

type Feature = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

const FEATURES: Feature[] = [
  { icon: 'shield-checkmark', label: 'Trusted Partners' },
  { icon: 'umbrella-outline', label: 'Affordable Plans' },
  { icon: 'document-text-outline', label: 'Quick Claims' },
  { icon: 'headset-outline', label: '24/7 Support' },
];

const FeatureGrid = () => {
  const { t } = useLanguage();

  return (
    <View style={styles.card}>
      {FEATURES.map((feature) => (
        <View key={feature.label} style={styles.item}>
          <View style={styles.iconCircle}>
            <Ionicons name={feature.icon} size={22} color={colors.primary} />
          </View>
          <Text style={styles.label}>{t(feature.label)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 16,
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