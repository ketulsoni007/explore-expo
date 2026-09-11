import { Ionicons } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';

const NARROW_BREAKPOINT = 400;

const ActivitiesFooter = () => {
  const { width } = useWindowDimensions();
  const isNarrow = width < NARROW_BREAKPOINT;

  return (
    <View
      style={[styles.card, isNarrow ? styles.cardColumn : styles.cardRow]}
    >
      <View style={styles.topRow}>
        <View style={styles.iconCircle}>
          <Ionicons name="shield-checkmark" size={26} color="#2F5CFF" />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.title}>We're With You, Every Mile!</Text>
          <Text style={styles.subtitle}>
            Keep using Miles Assist services and we'll keep making your
            journey easier.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, isNarrow && styles.buttonFullWidth]}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>Explore Services</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEF2FC',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 20,
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

export default ActivitiesFooter;