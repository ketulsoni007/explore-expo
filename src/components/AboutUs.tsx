import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const colors = {
  primary: '#0052FF',
  navy: '#1A2B49',
  orange: '#FF6B00',
  background: '#FFF',
  white: '#FFFFFF',
  textDark: '#1A2B49',
  textGray: '#6B7280',
  border: '#E5E9F0',
  iconBg: '#EAF0FF',
};

const APP_VERSION = '1.0.0';

const stats = [
  { id: 'drivers', label: 'Active Drivers', value: '25K+', icon: 'account-group-outline' },
  { id: 'partners', label: 'Partner Locations', value: '500+', icon: 'handshake-outline' },
  { id: 'cities', label: 'Cities Covered', value: '120+', icon: 'map-marker-radius-outline' },
  { id: 'support', label: 'Support', value: '24x7', icon: 'headset' },
];

const values = [
  {
    id: 'safety',
    title: 'Driver Safety First',
    description: 'Every service we build starts with one question: does this make drivers safer?',
    icon: 'shield-checkmark-outline',
  },
  {
    id: 'trust',
    title: 'Verified & Trusted Partners',
    description: 'Every hotel, restaurant, lawyer, and support partner is vetted before joining us.',
    icon: 'checkmark-circle-outline',
  },
  {
    id: 'availability',
    title: 'Always Available',
    description: '24x7 support means help is never more than a call away, wherever the road takes you.',
    icon: 'time-outline',
  },
];

const legalLinks = [
  {
    id: 'terms',
    title: 'Terms & Conditions',
    icon: 'document-text-outline',
    content:
      'Miles Assist services are provided to eligible registered drivers and depend on partner availability. Use the app responsibly, provide accurate information, and review service-specific limits before making a request.',
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: 'lock-closed-outline',
    content:
      'We use account, vehicle, location, and service information to provide support, process requests, and improve the app. Information is shared only with relevant service partners when needed to fulfil your request.',
  },
  {
    id: 'licenses',
    title: 'Open Source Licenses',
    icon: 'code-slash-outline',
    content:
      'Miles Assist uses open-source libraries to provide navigation, interface, media, and platform features. Their respective license terms and notices apply to the software included in this app.',
  },
];

const socialLinks = [
  { id: 'instagram', title: 'Instagram', icon: 'logo-instagram', url: 'https://instagram.com' },
  { id: 'youtube', title: 'YouTube', icon: 'logo-youtube', url: 'https://youtube.com' },
  { id: 'facebook', title: 'Facebook', icon: 'logo-facebook', url: 'https://facebook.com' },
];

const AboutUs = () => {
  const { t } = useLanguage();
  const [openLegalId, setOpenLegalId] = useState<string | null>(null);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Brand Image */}
      <Image source={require('@/assets/images/ma-splash-logo.png')} style={styles.brandImage} resizeMode="contain" />

      {/* Mission statement */}
      <View style={styles.missionCard}>
        <Text style={styles.missionTitle}>{t('Our Mission')}</Text>
        <Text style={styles.missionText}>
          {t("Miles Assist exists to make life on the road easier for drivers. From free food and\nstay to insurance, legal support, and emergency help — we're building one platform\nthat stands beside drivers at every mile of their journey.")}
        </Text>
      </View>

      {/* Stats grid */}
      <View style={styles.statsGrid}>
        {stats.map((stat) => (
          <View key={stat.id} style={styles.statCard}>
            <View style={styles.statIconWrap}>
              <MaterialCommunityIcons name={stat.icon as any} size={20} color={colors.primary} />
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{t(stat.label)}</Text>
          </View>
        ))}
      </View>

      {/* Values */}
      <Text style={styles.sectionTitle}>{t('What We Stand For')}</Text>
      <View style={styles.valuesCard}>
        {values.map((value, index) => (
          <View
            key={value.id}
            style={[styles.valueRow, index !== values.length - 1 && styles.valueRowBorder]}
          >
            <View style={styles.valueIconWrap}>
              <Ionicons name={value.icon as any} size={20} color={colors.primary} />
            </View>
            <View style={styles.valueTextWrap}>
              <Text style={styles.valueTitle}>{t(value.title)}</Text>
              <Text style={styles.valueDescription}>{t(value.description)}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Legal links */}
      <Text style={styles.sectionTitle}>{t('Legal')}</Text>
      <View style={styles.linksCard}>
        {legalLinks.map((link, index) => (
              <View key={link.id}>
                <TouchableOpacity
                  style={styles.linkRow}
                  activeOpacity={0.7}
                  onPress={() =>
                    setOpenLegalId((current) => (current === link.id ? null : link.id))
                  }
                  accessibilityRole="button"
                  accessibilityState={{ expanded: openLegalId === link.id }}
                >
                  <View style={styles.linkIconWrap}>
                    <Ionicons name={link.icon as any} size={18} color={colors.primary} />
                  </View>
                  <Text style={styles.linkTitle}>{t(link.title)}</Text>
                  <Ionicons
                    name={openLegalId === link.id ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={colors.textGray}
                  />
                </TouchableOpacity>
                {openLegalId === link.id && (
                  <View style={styles.legalContent}>
                    <Text style={styles.legalContentText}>{link.content}</Text>
                  </View>
                )}
                {index !== legalLinks.length - 1 && <View style={styles.linkRowBorder} />}
              </View>
        ))}
      </View>

      {/* Social links */}
      <Text style={styles.sectionTitle}>{t('Follow Us')}</Text>
      <View style={styles.socialRow}>
        {socialLinks.map((social) => (
          <TouchableOpacity
            key={social.id}
            style={styles.socialButton}
            activeOpacity={0.7}
            onPress={() => openLink(social.url)}
          >
            <Ionicons name={social.icon as any} size={22} color={colors.primary} />
            <Text style={styles.socialText}>{t(social.title)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contact card */}
      <View style={styles.contactCard}>
        <Ionicons name="mail-outline" size={20} color={colors.primary} />
        <View style={styles.contactTextWrap}>
          <Text style={styles.contactTitle}>{t('Get in Touch')}</Text>
          <Text style={styles.contactSubtitle}>support@milesassist.com</Text>
        </View>
      </View>

      {/* Version footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Miles Assist</Text>
        <Text style={styles.versionText}>Version {APP_VERSION}</Text>
        <Text style={styles.copyrightText}>© 2026 Miles Assist. All rights reserved.</Text>
      </View>
      <View style={{ paddingBottom: 40 }} />
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  brandImage:{
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  missionCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    marginBottom: 8,
  },
  missionText: {
    fontSize: 13.5,
    color: colors.textGray,
    lineHeight: 20,
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
    alignItems: 'center',
  },
  statIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 11.5,
    color: colors.textGray,
    marginTop: 2,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 8,
    marginBottom: 10,
  },
  valuesCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  valueRow: {
    flexDirection: 'row',
    padding: 14,
  },
  valueRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  valueIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  valueTextWrap: {
    flex: 1,
  },
  valueTitle: {
    fontSize: 13.5,
    fontWeight: '700',
    color: colors.textDark,
  },
  valueDescription: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 3,
    lineHeight: 17,
  },
  linksCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 14,
  },
  linkRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  linkIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  linkTitle: {
    flex: 1,
    fontSize: 13.5,
    fontWeight: '600',
    color: colors.textDark,
  },
  legalContent: {
    paddingHorizontal: 60,
    paddingRight: 16,
    paddingBottom: 14,
  },
  legalContentText: {
    color: colors.textGray,
    fontSize: 13,
    lineHeight: 19,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 16,
  },
  socialText: {
    fontSize: 11.5,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: 6,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.iconBg,
    borderRadius: 14,
    padding: 16,
    marginTop: 18,
    gap: 12,
  },
  contactTextWrap: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 13.5,
    fontWeight: '700',
    color: colors.textDark,
  },
  contactSubtitle: {
    fontSize: 12.5,
    color: colors.primary,
    marginTop: 2,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    marginTop: 28,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textDark,
  },
  versionText: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 4,
  },
  copyrightText: {
    fontSize: 11,
    color: colors.textGray,
    marginTop: 8,
  },
});