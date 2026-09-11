import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

export default function SupportSatisfactionBanner() {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.bannerLeft}>
        <View style={styles.bannerIconBg}>
          <Ionicons name="shield-checkmark" size={20} color="#0052FF" />
        </View>

        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>
            Your Satisfaction, Our Priority
          </Text>
          <Text style={styles.bannerSubtitle}>
            Our support team is available 24/7{'\n'}
            to ensure you have a smooth experience.
          </Text>
        </View>
      </View>

      <Ionicons name="checkmark-circle" size={26} color="#0052FF" />
    </View>
  );
}