import {
    Ionicons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

export default function SupportActionFooter() {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.primaryButton}
        activeOpacity={0.85}
      >
        <MaterialCommunityIcons name="headset" size={20} color="#FFFFFF" />
        <Text style={styles.primaryButtonText}>Contact Support Now</Text>
        <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        activeOpacity={0.7}
      >
        <Ionicons name="call-outline" size={18} color="#0052FF" />
        <Text style={styles.secondaryButtonText}>
          Need Help? Call Support: 24x7
        </Text>
      </TouchableOpacity>
    </View>
  );
}