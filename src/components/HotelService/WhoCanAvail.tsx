import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const ITEMS = [
  'Active Miles Assist drivers',
  'Completed minimum number of trips',
  'No active policy violations',
];

const WhoCanAvail = () => {
  const { t } = useLanguage();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('Who Can Avail')}</Text>
      {ITEMS.map((item) => (
        <View key={item} style={styles.row}>
          <Ionicons name="checkmark-circle" size={18} color={colors.primary} style={styles.icon} />
          <Text style={styles.text}>{t(item)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  heading: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 14.5,
    color: colors.textDark,
  },
});

export default WhoCanAvail;