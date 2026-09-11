import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This Service</Text>
      <Text style={styles.body}>
        Miles Assist offers insurance solutions designed for drivers with affordable premiums and
        easy claim support. Stay protected on every trip with our trusted partners.
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