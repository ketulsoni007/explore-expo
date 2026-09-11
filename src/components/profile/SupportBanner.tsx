import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

const NARROW_BREAKPOINT = 400;

const SupportBanner = () => {
  const { width } = useWindowDimensions();
  const isNarrow = width < NARROW_BREAKPOINT;

  return (
    <View
      style={[styles.card, isNarrow ? styles.cardColumn : styles.cardRow]}
    >
      <View style={styles.topRow}>
        <View style={styles.iconCircle}>
           <Ionicons name="headset-outline" size={20} color={'#2F5CFF'} />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.title}>We're here to help!</Text>
          <Text style={styles.subtitle}>
            Our support team is available 24/7
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, isNarrow && styles.buttonFullWidth]}
        activeOpacity={0.85}
      >
        <Ionicons name="headset" size={16} color="#fff" />
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF2FC',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardColumn: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D9E3FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  textContent: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0B1B3F',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#5B6376',
    lineHeight: 17,
  },
  button: {
    backgroundColor: '#2F5CFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginLeft: 12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:6
  },
  buttonFullWidth: {
    marginLeft: 0,
    marginTop: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});

export default SupportBanner;