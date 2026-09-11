import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = {
  primary: '#1E5FEC',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  green: '#10B981',
  greenBg: '#E6F8EF',
  cardBg: '#F3F7FE',
  avatarBg: '#E8F0FE',
  copyBtnBg: '#EEF4FE',
  white: '#FFFFFF',
  border: '#E8EDF5',
};

type InfoRowProps = {
  icon: React.ReactNode;
  text: string;
};

const InfoRow = ({ icon, text }: InfoRowProps) => (
  <View style={styles.infoRow}>
    <View style={styles.infoIconWrap}>{icon}</View>
    <Text style={styles.infoRowText}>{text}</Text>
  </View>
);

const ProfileHeader = () => {
  return (
    <View style={styles.profileCard}>
      {/* Absolute Background Illustration */}
      <Image
        source={require('@/assets/images/profile-illustration.png')}
        style={styles.bgIllustration}
        resizeMode="cover"
      />

      {/* Foreground Content Container */}
      <View style={styles.contentWrapper}>
        {/* Top Header Section */}
        <View style={styles.topHeader}>
          {/* Avatar */}
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>

          {/* Miles Assist ID (Top Right) */}
          <View style={styles.milesIdContainer}>
            <View style={styles.milesIdTextWrap}>
              <Text style={styles.milesIdLabel}>Miles Assist ID</Text>
              <Text style={styles.milesIdValue}>MA12345678</Text>
            </View>
            <TouchableOpacity style={styles.copyButton} activeOpacity={0.7}>
              <Feather name="copy" size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content Body */}
        <View style={styles.bodyRow}>
          {/* Driver Details Left Side */}
          <View style={styles.driverInfo}>
            {/* Name & Badge */}
            <View style={styles.nameRow}>
              <Text style={styles.name}>Jay Dave</Text>
              <Ionicons name="checkmark-circle" size={22} color={COLORS.primary} style={styles.verifiedIcon} />
            </View>

            {/* Verified Partner Row */}
            <View style={styles.partnerRow}>
              <MaterialCommunityIcons name="shield-check" size={16} color={COLORS.primary} />
              <Text style={styles.verifiedPartner}>Verified Driver Partner</Text>
            </View>

            {/* Contact Details */}
            <InfoRow
              icon={<Ionicons name="call" size={14} color={COLORS.textSecondary} />}
              text="+91 98765 43210"
            />
            <InfoRow
              icon={<Ionicons name="mail" size={14} color={COLORS.textSecondary} />}
              text="jay.dave@email.com"
            />
            <InfoRow
              icon={<Ionicons name="location" size={14} color={COLORS.textSecondary} />}
              text="Ahmedabad, Gujarat"
            />

            {/* Verified Pill */}
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark" size={14} color={COLORS.green} />
              <Text style={styles.verifiedBadgeText}>Verified</Text>
            </View>
          </View>

          {/* Duty Completed Card Right Side */}
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.dutyBox}>
              <View style={styles.dutyHeader}>
                <View style={styles.dutyIconWrap}>
                  <MaterialCommunityIcons name="shield-check-outline" size={18} color={COLORS.green} />
                </View>
                <Text style={styles.dutyLabel}>Duty Completed</Text>
              </View>
              <Text style={styles.dutyNumber}>20</Text>
              <Text style={styles.dutySubLabel}>Total Duties</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    padding: 16,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  bgIllustration: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 400,
    height: 180,
    opacity: 0.35, // Low opacity prevents interference with text readability
    zIndex: 1,
  },
  contentWrapper: {
    zIndex: 2, // Keeps text, buttons, and badges in front of the graphic
    position: 'relative',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.avatarBg,
    alignItems: 'center',
    justifyContent:'center'
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primary,
  },
  milesIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  milesIdTextWrap: {
    alignItems: 'flex-end',
    marginRight: 8,
  },
  milesIdLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  milesIdValue: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.primary,
    marginTop: 2,
  },
  copyButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: COLORS.copyBtnBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  driverInfo: {
    flex: 1,
    paddingRight: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },
  verifiedIcon: {
    marginLeft: 6,
  },
  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
  verifiedPartner: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoIconWrap: {
    width: 18,
    alignItems: 'center',
  },
  infoRowText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginLeft: 6,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.greenBg,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 6,
  },
  verifiedBadgeText: {
    fontSize: 12,
    color: COLORS.green,
    fontWeight: '700',
    marginLeft: 4,
  },
  dutyBox: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    width: 130,
    borderWidth: 1,
    borderColor: '#F0F4FA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  dutyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dutyIconWrap: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: COLORS.greenBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  dutyLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  dutyNumber: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.textPrimary,
    lineHeight: 30,
  },
  dutySubLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginTop: 2,
  },
});

export default ProfileHeader;