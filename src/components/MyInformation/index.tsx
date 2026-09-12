import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const colors = {
  primary: '#0052FF',
  background: '#FFF',
  white: '#FFFFFF',
  textDark: '#1A2B49',
  textGray: '#6B7280',
  border: '#E5E9F0',
  success: '#16A34A',
  successBg: '#E6F4EA',
  iconBg: '#EAF0FF',
};

// Placeholder data — wire up to real user data whenever available
const initialInfo = {
  fullName: 'Jay Dave',
  phone: '+91 98765 43210',
  email: 'jay.dave@email.com',
  address: 'Ahmedabad, Gujarat',
  dob: '15 Aug 1994',
  gender: 'Male',
  emergencyContact: '+91 90000 00000',
};

const MyInformationView = () => {
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(initialInfo);

  const handleChange = (key: keyof typeof initialInfo, value: string) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // TODO: call API to persist updated info
    setIsEditing(false);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Avatar header */}
      <View style={styles.avatarHeader}>
        <View style={styles.avatarWrap}>
          <Text style={styles.avatarInitials}>JD</Text>
          <TouchableOpacity style={styles.avatarEditBadge} activeOpacity={0.7}>
            <Ionicons name="camera" size={14} color={colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.userName}>{info.fullName}</Text>
          <Ionicons name="checkmark-circle" size={18} color={colors.primary} />
        </View>

        <View style={styles.verifiedTag}>
          <Ionicons name="shield-checkmark" size={13} color={colors.success} />
          <Text style={styles.verifiedTagText}>{t('Verified Driver Partner')}</Text>
        </View>
      </View>

      {/* Personal details */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>{t('Personal Details')}</Text>
        <TouchableOpacity
          style={styles.editToggle}
          activeOpacity={0.7}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Ionicons
            name={isEditing ? 'close-outline' : 'pencil-outline'}
            size={14}
            color={colors.primary}
          />
          <Text style={styles.editToggleText}>{isEditing ? t('Cancel') : t('Edit')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <InfoField
          icon="person-outline"
          label="Full Name"
          value={info.fullName}
          editable={isEditing}
          onChangeText={(v) => handleChange('fullName', v)}
        />
        <InfoField
          icon="calendar-outline"
          label="Date of Birth"
          value={info.dob}
          editable={isEditing}
          onChangeText={(v) => handleChange('dob', v)}
          isLast={false}
        />
        <InfoField
          icon="male-female-outline"
          label="Gender"
          value={info.gender}
          editable={isEditing}
          onChangeText={(v) => handleChange('gender', v)}
          isLast
        />
      </View>

      {/* Contact details */}
      <Text style={styles.sectionTitle}>{t('Contact Details')}</Text>
      <View style={styles.card}>
        <InfoField
          icon="call-outline"
          label="Phone Number"
          value={info.phone}
          editable={isEditing}
          onChangeText={(v) => handleChange('phone', v)}
          keyboardType="phone-pad"
        />
        <InfoField
          icon="mail-outline"
          label="Email Address"
          value={info.email}
          editable={isEditing}
          onChangeText={(v) => handleChange('email', v)}
          keyboardType="email-address"
        />
        <InfoField
          icon="location-outline"
          label="Address"
          value={info.address}
          editable={isEditing}
          onChangeText={(v) => handleChange('address', v)}
          isLast
        />
      </View>

      {/* Emergency contact */}
      <Text style={styles.sectionTitle}>{t('Emergency Contact')}</Text>
      <View style={styles.card}>
        <InfoField
          icon="alert-circle-outline"
          label="Emergency Contact Number"
          value={info.emergencyContact}
          editable={isEditing}
          onChangeText={(v) => handleChange('emergencyContact', v)}
          keyboardType="phone-pad"
          isLast
        />
      </View>

      {/* Miles Assist ID (read-only, non-editable) */}
      <Text style={styles.sectionTitle}>{t('Account ID')}</Text>
      <View style={styles.card}>
        <View style={styles.readOnlyRow}>
          <View style={styles.fieldIconWrap}>
            <MaterialCommunityIcons name="card-account-details-outline" size={18} color={colors.primary} />
          </View>
          <View style={styles.fieldTextWrap}>
            <Text style={styles.fieldLabel}>{t('Miles Assist ID')}</Text>
            <Text style={styles.fieldValueReadOnly}>MA12345678</Text>
          </View>
          <View style={styles.lockedBadge}>
            <Ionicons name="lock-closed" size={12} color={colors.textGray} />
          </View>
        </View>
      </View>

      {isEditing && (
        <TouchableOpacity style={styles.saveButton} activeOpacity={0.85} onPress={handleSave}>
          <Ionicons name="checkmark" size={18} color={colors.white} />
          <Text style={styles.saveButtonText}>{t('Save Changes')}</Text>
        </TouchableOpacity>
      )}

      <View style={{ paddingBottom: 40 }} />
    </ScrollView>
  );
};

export default MyInformationView;

// Reusable field row — shows plain text normally, becomes an input when editing
type InfoFieldProps = {
  icon: string;
  label: string;
  value: string;
  editable: boolean;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'phone-pad' | 'email-address';
  isLast?: boolean;
};

const InfoField = ({
  icon,
  label,
  value,
  editable,
  onChangeText,
  keyboardType = 'default',
  isLast = false,
}: InfoFieldProps) => {
  return (
    <View style={[styles.fieldRow, !isLast && styles.fieldRowBorder]}>
      <View style={styles.fieldIconWrap}>
        <Ionicons name={icon as any} size={18} color={colors.primary} />
      </View>
      <View style={styles.fieldTextWrap}>
        <Text style={styles.fieldLabel}>{label}</Text>
        {editable ? (
          <TextInput
            style={styles.fieldInput}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholderTextColor={colors.textGray}
          />
        ) : (
          <Text style={styles.fieldValue}>{value}</Text>
        )}
      </View>
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
  avatarHeader: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatarWrap: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
  avatarEditBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 14,
  },
  userName: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.textDark,
  },
  verifiedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: colors.successBg,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 8,
  },
  verifiedTagText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: colors.success,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 16,
    marginBottom: 10,
  },
  editToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  editToggleText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  fieldRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  fieldIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  fieldTextWrap: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 11.5,
    color: colors.textGray,
  },
  fieldValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: 2,
  },
  fieldValueReadOnly: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: 2,
  },
  fieldInput: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: 2,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  readOnlyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  lockedBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    marginTop: 20,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
});