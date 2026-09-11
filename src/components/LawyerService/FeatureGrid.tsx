import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './colors';

type Feature = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

const FEATURES: Feature[] = [
  { icon: 'shield-checkmark', label: 'Verified Lawyers' },
  { icon: 'call-outline', label: '24x7 Support' },
  { icon: 'document-text-outline', label: 'Legal Guidance' },
  { icon: 'lock-closed-outline', label: 'Confidential & Secure' },
];

const FeatureGrid = () => {
  return (
    <View style={styles.card}>
      {FEATURES.map((feature) => (
        <View key={feature.label} style={styles.item}>
          <View style={styles.iconCircle}>
            <Ionicons name={feature.icon} size={22} color={colors.primary} />
          </View>
          <Text style={styles.label}>{feature.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: colors.textDark,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default FeatureGrid;
