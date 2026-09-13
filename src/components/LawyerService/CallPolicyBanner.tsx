import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const CallPolicyBanner = () => {
  const { t } = useLanguage();
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="call-outline" size={20} color={colors.primary} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{t('1 Free Call Included')}</Text>
        <Text style={styles.subtitle}>
          {t('Your first call to a lawyer is free. After that, an active subscription is required to continue calling.')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FDE7EE',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 20,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    fontSize: 14.5,
    fontWeight: '700',
    color: '#1A2B49',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 12.5,
    color: '#5B6474',
    lineHeight: 18,
  },
});

export default CallPolicyBanner;