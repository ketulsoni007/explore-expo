import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const ServiceHero = () => {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="shield-checkmark" size={40} color={colors.primary} />
      </View>
        <Text style={styles.title}>{t('Insurance')}</Text>
      <Text style={styles.subtitle}>
          {t('Get affordable insurance solutions\\nand claim support for eligible drivers.')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default ServiceHero;