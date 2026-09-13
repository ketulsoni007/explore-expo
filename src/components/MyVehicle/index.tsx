import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const colors = {
  primary: '#0052FF',
  background: '#FFF',
  white: '#FFFFFF',
  textDark: '#1A2B49',
  textGray: '#6B7280',
  border: '#E5E9F0',
  success: '#16A34A',
  successBg: '#E6F4EA',
  warning: '#D97706',
  warningBg: '#FEF3E2',
  danger: '#DC2626',
  dangerBg: '#FDE7EE',
};

// Placeholder data — wire this up to real vehicle data whenever available
const vehicle = {
  make: 'Maruti Suzuki',
  model: 'Swift Dzire',
  plateNumber: 'GJ01AB1234',
  type: 'Sedan',
  fuelType: 'Petrol',
  year: '2021',
  color: 'White',
  verified: true,
};

const documents = [
  {
    id: 'rc',
    title: 'Registration Certificate (RC)',
    status: 'verified',
    expiry: null,
    icon: 'file-document-outline',
  },
  {
    id: 'insurance',
    title: 'Vehicle Insurance',
    status: 'expiring',
    expiry: 'Expires on 28 Sep 2026',
    icon: 'shield-check-outline',
  },
  {
    id: 'puc',
    title: 'Pollution Certificate (PUC)',
    status: 'verified',
    expiry: 'Valid till 12 Jan 2027',
    icon: 'leaf',
  },
  {
    id: 'permit',
    title: 'Commercial Permit',
    status: 'missing',
    expiry: null,
    icon: 'card-account-details-outline',
  },
];

const statusConfig = {
  verified: { label: 'Verified', color: colors.success, bg: colors.successBg, icon: 'checkmark-circle' },
  expiring: { label: 'Expiring Soon', color: colors.warning, bg: colors.warningBg, icon: 'alert-circle' },
  missing: { label: 'Not Uploaded', color: colors.danger, bg: colors.dangerBg, icon: 'close-circle' },
};

const MyVehicleView = () => {
  const { t } = useLanguage();
  return (
    <ScrollView style={styles.container}>
      {/* Header card */}
      <View style={styles.headerCard}>
        <View style={styles.headerTop}>
          <View style={styles.vehicleIconWrap}>
            <MaterialCommunityIcons name="car" size={32} color={colors.primary} />
          </View>
          <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
            <Ionicons name="pencil" size={14} color={colors.primary} />
            <Text style={styles.editButtonText}>{t('Edit')}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.vehicleName}>
          {vehicle.make} {vehicle.model}
        </Text>

        <View style={styles.plateRow}>
          <View style={styles.plateChip}>
            <Text style={styles.plateChipText}>{vehicle.plateNumber}</Text>
          </View>
          {vehicle.verified && (
            <View style={styles.verifiedTag}>
              <Ionicons name="checkmark-circle" size={14} color={colors.success} />
              <Text style={styles.verifiedTagText}>{t('Verified')}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Quick stats */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <MaterialCommunityIcons name="car-side" size={20} color={colors.primary} />
          <Text style={styles.statLabel}>{t('Type')}</Text>
          <Text style={styles.statValue}>{t(vehicle.type)}</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialCommunityIcons name="gas-station-outline" size={20} color={colors.primary} />
          <Text style={styles.statLabel}>{t('Fuel')}</Text>
          <Text style={styles.statValue}>{t(vehicle.fuelType)}</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="calendar-outline" size={20} color={colors.primary} />
          <Text style={styles.statLabel}>{t('Year')}</Text>
          <Text style={styles.statValue}>{vehicle.year}</Text>
        </View>
        <View style={styles.statCard}>
          <MaterialCommunityIcons name="palette-outline" size={20} color={colors.primary} />
          <Text style={styles.statLabel}>{t('Color')}</Text>
          <Text style={styles.statValue}>{t(vehicle.color)}</Text>
        </View>
      </View>

      {/* Documents section */}
      <Text style={styles.sectionTitle}>{t('Vehicle Documents')}</Text>
      <View style={styles.documentsCard}>
        {documents.map((doc, index) => {
          const config = statusConfig[doc.status as keyof typeof statusConfig];
          return (
            <TouchableOpacity
              key={doc.id}
              style={[
                styles.documentRow,
                index !== documents.length - 1 && styles.documentRowBorder,
              ]}
              activeOpacity={0.7}
            >
              <View style={styles.documentIconWrap}>
                <MaterialCommunityIcons name={doc.icon as any} size={20} color={colors.primary} />
              </View>

              <View style={styles.documentTextWrap}>
                <Text style={styles.documentTitle}>{t(doc.title)}</Text>
                {doc.expiry && <Text style={styles.documentSubtitle}>{t(doc.expiry)}</Text>}
              </View>

              <View style={[styles.statusBadge, { backgroundColor: config.bg }]}>
                <Ionicons name={config.icon as any} size={12} color={config.color} />
                <Text style={[styles.statusBadgeText, { color: config.color }]}>
                  {t(config.label)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Info banner */}
      <View style={styles.infoBanner}>
        <Ionicons name="information-circle-outline" size={20} color={colors.primary} />
        <Text style={styles.infoBannerText}>
          {t('Keep your documents updated to avoid service interruptions and stay eligible for Miles Assist benefits.')}
        </Text>
      </View>

      {/* Action button */}
      <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
        <MaterialCommunityIcons name="upload-outline" size={18} color={colors.white} />
        <Text style={styles.primaryButtonText}>{t('Update Documents')}</Text>
      </TouchableOpacity>
      <View style={{ paddingBottom: 60 }} />
    </ScrollView>
  );
};

export default MyVehicleView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  headerCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vehicleIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EAF0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  editButtonText: {
    color: colors.primary,
    fontSize: 12.5,
    fontWeight: '600',
  },
  vehicleName: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 14,
  },
  plateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  plateChip: {
    backgroundColor: colors.textDark,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
  },
  plateChipText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  verifiedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  verifiedTagText: {
    color: colors.success,
    fontSize: 12.5,
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statCard: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 8,
  },
  statValue: {
    fontSize: 14.5,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 8,
    marginBottom: 10,
  },
  documentsCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  documentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  documentRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  documentIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#EAF0FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  documentTextWrap: {
    flex: 1,
  },
  documentTitle: {
    fontSize: 13.5,
    fontWeight: '600',
    color: colors.textDark,
  },
  documentSubtitle: {
    fontSize: 11.5,
    color: colors.textGray,
    marginTop: 2,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusBadgeText: {
    fontSize: 10.5,
    fontWeight: '700',
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: '#EAF0FF',
    borderRadius: 14,
    padding: 14,
    marginTop: 16,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 12.5,
    color: colors.textDark,
    lineHeight: 18,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    marginTop: 18,
    marginBottom: 24,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});