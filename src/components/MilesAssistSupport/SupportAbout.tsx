import { Text, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

export default function SupportAbout() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>About This Service</Text>
      <Text style={styles.sectionDescription}>
        Miles Assist 24/7 Support is always ready to help you with any
        questions, issues or assistance you may need while you are on the road.
      </Text>
    </View>
  );
}