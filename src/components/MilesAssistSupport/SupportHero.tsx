import { useLanguage } from '@/context/LanguageContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const SupportHero = () => {
  const { t } = useLanguage();
  return (
    <View style={styles.heroContainer}>
      <View style={styles.heroIconCircle}>
        <MaterialCommunityIcons name="headset" size={48} color="#0052FF" />
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>24/7</Text>
        </View>
      </View>
      <Text style={styles.heroTitle}>{t('24/7 Support')}</Text>
      <Text style={styles.heroSubtitle}>
        {t("We're here for you, anytime, anywhere.\nGet help whenever you need it.")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  heroIconCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#E8F0FE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  heroBadge: {
    position: 'absolute',
    top: 24,
    backgroundColor: '#0052FF',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  heroBadgeText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '800',
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0B1B3F',
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#5B6376',
    textAlign: 'center',
    lineHeight: 18,
  },
});

export default SupportHero;