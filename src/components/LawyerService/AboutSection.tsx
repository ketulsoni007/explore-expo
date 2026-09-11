import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from './colors';

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About This Service</Text>
      <Text style={styles.body}>
        Miles Assist provides 24x7 legal assistance for drivers. Our experienced lawyers can
        guide you in legal issues, documentation, disputes and more.
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
