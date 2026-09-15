import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const HygieneBanner = () => {
  const { t } = useLanguage();
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Ionicons name="shield-checkmark-outline" size={22} color={colors.primary} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{t('100% Hygienic & Safe')}</Text>
        <Text style={styles.subtitle}>
          {t('All partner restaurants follow strict hygiene and quality standards.')}
        </Text>
      </View>
      <View style={styles.checkBadge}>
        <Ionicons name="checkmark" size={16} color={colors.white} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: colors.primaryLight,
    borderRadius: 16,
    padding: 16,
  },
  iconBox: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12.5,
    color: colors.textMuted,
    lineHeight: 18,
  },
  checkBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});

export default HygieneBanner;