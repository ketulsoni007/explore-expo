import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AdditionalSupport = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [nestedExpanded, setNestedExpanded] = useState(false);

  return (
    <View style={styles.card}>
      {/* Header row */}
      <View style={styles.headerRow}>
        <View style={styles.iconCircle}>
          <MaterialCommunityIcons name="shield-alert-outline" size={20} color="#0F9D58" />
        </View>
        <View style={styles.headerTextWrap}>
          <Text style={styles.title}>{t('Accident Support Assurance')}</Text>
          <Text style={styles.subtitle}>{t('Personal help when you need it most')}</Text>
        </View>
      </View>

      {/* Main accordion */}
      <TouchableOpacity
        style={styles.accordionHeader}
        activeOpacity={0.7}
        onPress={() => setExpanded(!expanded)}
      >
        <Text style={styles.accordionHeaderText}>{t('What does this cover?')}</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#1A2B49"
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.accordionBody}>
          <Text style={styles.bodyText}>
            {t('For every 10 days on the road, if an accident happens, you get personal, on-ground help directly from the Miles Assist team — not just a call center. We\'re with you when it matters.')}
          </Text>

          {/* Nested accordion for T&C */}
          <TouchableOpacity
            style={styles.nestedHeader}
            activeOpacity={0.7}
            onPress={() => setNestedExpanded(!nestedExpanded)}
          >
            <View style={styles.nestedHeaderLeft}>
              <Ionicons name="document-text-outline" size={16} color="#6B7280" />
              <Text style={styles.nestedHeaderText}>{t('Terms & Conditions apply')}</Text>
            </View>
            <Ionicons
              name={nestedExpanded ? 'chevron-up' : 'chevron-down'}
              size={16}
              color="#6B7280"
            />
          </TouchableOpacity>

          {nestedExpanded && (
            <View style={styles.nestedBody}>
              <Text style={styles.nestedBodyText}>
                {t('Support eligibility is based on active trip history, policy status, and completion of the minimum trip count within the 10-day window. Coverage details, response times, and exclusions are governed by the applicable insurance partner policy. Please refer to the full Terms & Conditions section for complete details.')}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default AdditionalSupport;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E9F0',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6F4EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTextWrap: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A2B49',
  },
  subtitle: {
    fontSize: 12,
    color: '#7A8699',
    marginTop: 2,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEF1F5',
  },
  accordionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A2B49',
  },
  accordionBody: {
    paddingBottom: 8,
  },
  bodyText: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 19,
    marginBottom: 10,
  },
  nestedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F8FA',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  nestedHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nestedHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  nestedBody: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  nestedBodyText: {
    fontSize: 12,
    color: '#8B94A3',
    lineHeight: 18,
  },
});