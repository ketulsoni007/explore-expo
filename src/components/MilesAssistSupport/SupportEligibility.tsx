import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

const criteria = [
  'Active Miles Assist drivers',
  'Completed minimum number of trips',
  'No active policy violations',
];

export default function SupportEligibility() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Who Can Avail</Text>

      {criteria.map((criterion) => (
        <View key={criterion} style={styles.checkRow}>
          <Ionicons name="checkmark-circle" size={18} color="#0052FF" />
          <Text style={styles.checkText}>{criterion}</Text>
        </View>
      ))}
    </View>
  );
}