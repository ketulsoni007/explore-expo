import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const ServiceHero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons name="scale-balance" size={40} color={colors.primary} />
      </View>
      <Text style={styles.title}>Lawyer</Text>
      <Text style={styles.subtitle}>
        Connect with legal experts for guidance{'\n'}and support during legal emergencies.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textDark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default ServiceHero;
