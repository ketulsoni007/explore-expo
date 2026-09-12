import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
  iconBg: '#EAF0FF',
};

type DocStatus = 'verified' | 'pending' | 'missing';

type DocSlot = {
  id: string;
  title: string;
  subtitle: string;
  status: DocStatus;
  imageUri: string | null;
};

// Placeholder data — wire up to real document/upload state whenever available
const initialDocs: DocSlot[] = [
  { id: 'aadhar', title: 'Aadhar Card', subtitle: 'Government ID proof', status: 'verified', imageUri: null },
  { id: 'dl-front', title: 'Driving License — Front', subtitle: 'Clear photo of the front side', status: 'verified', imageUri: null },
  { id: 'dl-back', title: 'Driving License — Back', subtitle: 'Clear photo of the back side', status: 'pending', imageUri: null },
  { id: 'rc-book', title: 'RC Book', subtitle: 'Vehicle registration certificate', status: 'verified', imageUri: null },
  { id: 'car-front', title: 'Car Photo — Front', subtitle: 'Full front view of the vehicle', status: 'missing', imageUri: null },
  { id: 'car-back', title: 'Car Photo — Back', subtitle: 'Full rear view of the vehicle', status: 'missing', imageUri: null },
];

const statusConfig: Record<DocStatus, { label: string; color: string; bg: string; icon: string }> = {
  verified: { label: 'Verified', color: colors.success, bg: colors.successBg, icon: 'checkmark-circle' },
  pending: { label: 'Under Review', color: colors.warning, bg: colors.warningBg, icon: 'time' },
  missing: { label: 'Not Uploaded', color: colors.danger, bg: colors.dangerBg, icon: 'close-circle' },
};

const DocumentVerificationView = () => {
  const [docs, setDocs] = useState<DocSlot[]>(initialDocs);

  const verifiedCount = docs.filter((d) => d.status === 'verified').length;

  const handleUpload = (id: string) => {
    // TODO: hook up expo-image-picker / camera here, then update the doc's imageUri + status to 'pending'
    setDocs((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, status: 'pending' as DocStatus } : doc))
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Progress header */}
      <View style={styles.progressCard}>
        <View style={styles.progressIconWrap}>
          <MaterialCommunityIcons name="shield-check-outline" size={24} color={colors.primary} />
        </View>
        <View style={styles.progressTextWrap}>
          <Text style={styles.progressTitle}>
            {verifiedCount} of {docs.length} Documents Verified
          </Text>
          <Text style={styles.progressSubtitle}>
            Complete all uploads to unlock full Miles Assist benefits.
          </Text>
        </View>
      </View>
      <View style={styles.progressBarTrack}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${(verifiedCount / docs.length) * 100}%` },
          ]}
        />
      </View>

      {/* Identity documents */}
      <Text style={styles.sectionTitle}>Identity Documents</Text>
      <DocumentCard doc={docs.find((d) => d.id === 'aadhar')!} onUpload={handleUpload} />

      {/* Driving license */}
      <Text style={styles.sectionTitle}>Driving License</Text>
      <View style={styles.pairRow}>
        <DocumentCard
          doc={docs.find((d) => d.id === 'dl-front')!}
          onUpload={handleUpload}
          compact
        />
        <DocumentCard
          doc={docs.find((d) => d.id === 'dl-back')!}
          onUpload={handleUpload}
          compact
        />
      </View>

      {/* Vehicle documents */}
      <Text style={styles.sectionTitle}>Vehicle Documents</Text>
      <DocumentCard doc={docs.find((d) => d.id === 'rc-book')!} onUpload={handleUpload} />

      <Text style={styles.sectionTitle}>Vehicle Photos</Text>
      <View style={styles.pairRow}>
        <DocumentCard
          doc={docs.find((d) => d.id === 'car-front')!}
          onUpload={handleUpload}
          compact
        />
        <DocumentCard
          doc={docs.find((d) => d.id === 'car-back')!}
          onUpload={handleUpload}
          compact
        />
      </View>

      {/* Info banner */}
      <View style={styles.infoBanner}>
        <Ionicons name="information-circle-outline" size={20} color={colors.primary} />
        <Text style={styles.infoBannerText}>
          Make sure all documents are clear, well-lit, and show all four corners. Blurry or
          cropped uploads may be rejected during review.
        </Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

export default DocumentVerificationView;

// Reusable document upload card
type DocumentCardProps = {
  doc: DocSlot;
  onUpload: (id: string) => void;
  compact?: boolean;
};

const DocumentCard = ({ doc, onUpload, compact = false }: DocumentCardProps) => {
  const config = statusConfig[doc.status];

  return (
    <View style={[styles.docCard, compact && styles.docCardCompact]}>
      <View style={styles.docHeaderRow}>
        <Text style={styles.docTitle} numberOfLines={1}>
          {doc.title}
        </Text>
        <View style={[styles.statusBadge, { backgroundColor: config.bg }]}>
          <Ionicons name={config.icon as any} size={11} color={config.color} />
          <Text style={[styles.statusBadgeText, { color: config.color }]}>{config.label}</Text>
        </View>
      </View>

      {!compact && <Text style={styles.docSubtitle}>{doc.subtitle}</Text>}

      <TouchableOpacity
        style={[
          styles.uploadArea,
          compact && styles.uploadAreaCompact,
          doc.imageUri && styles.uploadAreaFilled,
        ]}
        activeOpacity={0.7}
        onPress={() => onUpload(doc.id)}
      >
        {doc.imageUri ? (
          <Image source={{ uri: doc.imageUri }} style={styles.docImage} resizeMode="cover" />
        ) : (
          <>
            <MaterialCommunityIcons name="camera-plus-outline" size={compact ? 22 : 26} color={colors.primary} />
            <Text style={styles.uploadText}>{compact ? 'Upload' : 'Tap to upload document'}</Text>
          </>
        )}
      </TouchableOpacity>

      {doc.imageUri && (
        <TouchableOpacity
          style={styles.reuploadButton}
          activeOpacity={0.7}
          onPress={() => onUpload(doc.id)}
        >
          <Ionicons name="refresh-outline" size={13} color={colors.primary} />
          <Text style={styles.reuploadText}>Re-upload</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  progressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  progressIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  progressTextWrap: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 14.5,
    fontWeight: '700',
    color: colors.textDark,
  },
  progressSubtitle: {
    fontSize: 11.5,
    color: colors.textGray,
    marginTop: 3,
    lineHeight: 16,
  },
  progressBarTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 20,
    marginBottom: 10,
  },
  pairRow: {
    flexDirection: 'row',
    gap: 12,
  },
  docCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
  },
  docCardCompact: {
    flex: 1,
  },
  docHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  docTitle: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
    color: colors.textDark,
  },
  docSubtitle: {
    fontSize: 11.5,
    color: colors.textGray,
    marginTop: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 20,
  },
  statusBadgeText: {
    fontSize: 9.5,
    fontWeight: '700',
  },
  uploadArea: {
    height: 110,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderStyle: 'dashed',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    overflow: 'hidden',
  },
  uploadAreaCompact: {
    height: 90,
  },
  uploadAreaFilled: {
    borderStyle: 'solid',
    borderColor: colors.border,
  },
  uploadText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },
  docImage: {
    width: '100%',
    height: '100%',
  },
  reuploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 8,
  },
  reuploadText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: colors.primary,
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: colors.iconBg,
    borderRadius: 14,
    padding: 14,
    marginTop: 20,
  },
  infoBannerText: {
    flex: 1,
    fontSize: 12,
    color: colors.textDark,
    lineHeight: 17,
  },
});