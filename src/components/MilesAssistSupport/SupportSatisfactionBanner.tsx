import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

export default function SupportSatisfactionBanner() {
  const { t } = useLanguage();

  return (
    <View style={styles.bannerContainer}>
      <View style={styles.bannerLeft}>
        <View style={styles.bannerIconBg}>
          <Ionicons name="shield-checkmark" size={20} color="#0052FF" />
        </View>

        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>{t('Your Satisfaction, Our Priority')}</Text>
          <Text style={styles.bannerSubtitle}>
            {t('Our support team is available 24/7 to ensure you have a smooth experience.')}
          </Text>
        </View>
      </View>

      <Ionicons name="checkmark-circle" size={26} color="#0052FF" />
    </View>
  );
}