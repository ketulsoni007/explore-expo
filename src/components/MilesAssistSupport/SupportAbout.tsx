import { useLanguage } from '@/context/LanguageContext';
import { Text, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

export default function SupportAbout() {
  const { t } = useLanguage();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{t('About This Service')}</Text>
      <Text style={styles.sectionDescription}>
        {t('Miles Assist 24/7 Support is always ready to help you with any questions, issues or assistance you may need while you are on the road.')}
      </Text>
    </View>
  );
}