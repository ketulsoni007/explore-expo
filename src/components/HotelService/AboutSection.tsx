import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This Service</Text>
      <Text style={styles.body}>
        Miles Assist partners with verified hotels across India to provide eligible drivers with
        comfortable stays at no cost. Whether it's a long trip, delay, or emergency, we've got you
        covered.
      </Text>
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
    marginBottom: 10,
  },
  body: {
    fontSize: 14.5,
    lineHeight: 22,
    color: colors.textMuted,
  },
});

export default AboutSection;