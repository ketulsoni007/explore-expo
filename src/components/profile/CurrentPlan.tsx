import { useLanguage } from '@/context/LanguageContext';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = {
  card: '#FFFFFF',
  primary: '#1E5FEC',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  border: '#E5E9F0',
  green: '#10B981',
  blueBg: '#EEF4FE',
};

interface CurrentPlanProps {
  onViewPlanPress?: () => void;
}

const CurrentPlan: React.FC<CurrentPlanProps> = ({ onViewPlanPress }) => {
  const { t } = useLanguage();
  return (
    <View style={styles.card}>
      {/* Left Shield Icon */}
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="shield-check" size={26} color={COLORS.primary} />
      </View>

      {/* Center Details */}
      <View style={styles.contentContainer}>
        {/* Top Row: Title + Pill */}
        <View style={styles.topRow}>
          <Text style={styles.planTitle}>{t('Current Plan')}</Text>
          <View style={styles.planPill}>
            <Text style={styles.planPillText}>{t('Free Plan')}</Text>
          </View>
        </View>

        {/* Bottom Row: Price + Billing Info */}
        <View style={styles.bottomRow}>
          <Text style={styles.price}>
            <Text style={styles.priceSymbol}>₹ </Text>
            199 <Text style={styles.priceUnit}>/ {t('Month')}</Text>
          </Text>

          <View style={styles.billingRow}>
            <View style={styles.billingDot} />
            <Text style={styles.billingText}>{t('Next billing on 25 Sep 2026')}</Text>
          </View>
        </View>
      </View>

      {/* Right Action Button */}
      <TouchableOpacity 
        style={styles.actionButton} 
        onPress={onViewPlanPress}
        activeOpacity={0.7}
      >
        <Text style={styles.actionButtonText}>{t('View Plan')}</Text>
        <Feather name="chevron-right" size={16} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
    marginBottom:16
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.blueBg,
    alignItems: 'center',
    justifyContent:'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  planTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginRight: 8,
  },
  planPill: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  planPillText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },
  priceSymbol: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  priceUnit: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  billingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  billingDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.green,
    marginRight: 5,
  },
  billingText: {
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
  },
  actionButtonText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 13,
    marginRight: 2,
  },
});

export default CurrentPlan;