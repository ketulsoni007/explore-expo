import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const colors = {
  primary: '#0052FF',
  background: '#FFF',
  white: '#FFFFFF',
  textDark: '#1A2B49',
  textGray: '#6B7280',
  border: '#E5E9F0',
  iconBg: '#EAF0FF',
};

const SUPPORT_PHONE_NUMBER = '+911234567890'; // replace with real support number

const categories = [
  { id: 'general', title: 'General Queries', icon: 'help-circle-outline' },
  { id: 'trips', title: 'Trips & Earnings', icon: 'document-text-outline' },
  { id: 'account', title: 'Account & Safety', icon: 'shield-checkmark-outline' },
  { id: 'services', title: 'Services Support', icon: 'construct-outline' },
];

const menuItems = [
  {
    id: 'how-it-works',
    title: 'How It Works',
    subtitle: 'Step-by-step process to get help',
    icon: <MaterialCommunityIcons name="headset" size={20} color={colors.primary} />,
    content:
      'Choose a support category, describe your issue, and send your request. Our team will connect you with the right specialist and keep you updated until it is resolved.',
  },
  {
    id: 'channels',
    title: 'Support Channels',
    subtitle: 'Choose the way you want to connect',
    icon: <Ionicons name="chatbox-ellipses-outline" size={20} color={colors.primary} />,
    content:
      'Connect through in-app chat, phone support, or email. For urgent driver and roadside issues, use the support button so the team can prioritize your request.',
  },
  {
    id: 'my-requests',
    title: 'My Requests',
    subtitle: 'View your support ticket history',
    icon: <Ionicons name="document-text-outline" size={20} color={colors.primary} />,
    content:
      'Review your previous support requests, check their current status, and open a request to see updates or messages from the support team.',
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    subtitle: 'Read detailed T&C',
    icon: <Ionicons name="document-text-outline" size={20} color={colors.primary} />,
    content:
      'Please provide accurate contact and request details. Support availability and resolution times can vary by service, location, partner availability, and urgency.',
  },
];

// Placeholder FAQ content — swap in real questions/answers whenever ready
const faqItems = [
  {
    id: 'faq-1',
    question: 'How do I contact Miles Assist support?',
    answer:
      'You can call our 24x7 helpline directly from this page, or raise a request through "Contact Support Now" and our team will get back to you shortly.',
  },
  {
    id: 'faq-2',
    question: 'What is the average response time?',
    answer:
      'Most queries are responded to within a few minutes. Complex issues may take a little longer to fully resolve.',
  },
  {
    id: 'faq-3',
    question: 'Is support available on weekends and holidays?',
    answer:
      'Yes, our support team is available 24x7, including weekends and public holidays.',
  },
  {
    id: 'faq-4',
    question: 'Can I track my previous support requests?',
    answer:
      'Yes, all your past requests and their status can be viewed under "My Requests" on this page.',
  },
];

const HelpAndSupportView = () => {
  const { t } = useLanguage();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  const handleCallSupport = () => {
    Linking.openURL(`tel:${SUPPORT_PHONE_NUMBER}`);
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={styles.heroIconWrap}>
          <MaterialCommunityIcons name="headset" size={32} color={colors.primary} />
        </View>
        <Text style={styles.heroTitle}>{t('Help & Support')}</Text>
        <Text style={styles.heroSubtitle}>
          {t("We're here for you, anytime, anywhere. Get help whenever you need it.")}
        </Text>

        {/* Category grid */}
        <View style={styles.categoryGrid}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat.id} style={styles.categoryCard} activeOpacity={0.7}>
              <View style={styles.categoryIconWrap}>
                <Ionicons name={cat.icon as any} size={20} color={colors.primary} />
              </View>
              <Text style={styles.categoryText}>{t(cat.title)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu list */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <View key={item.id}>
              <TouchableOpacity
                style={[styles.menuItem, styles.menuItemBorder]}
                activeOpacity={0.7}
                onPress={() =>
                  setOpenMenuId((current) => (current === item.id ? null : item.id))
                }
                accessibilityRole="button"
                accessibilityState={{ expanded: openMenuId === item.id }}
              >
                <View style={styles.menuIconBg}>{item.icon}</View>
                <View style={styles.menuTextContent}>
                  <Text style={styles.menuTitle}>{t(item.title)}</Text>
                  <Text style={styles.menuSubtitle}>{t(item.subtitle)}</Text>
                </View>
                <Ionicons
                  name={openMenuId === item.id ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color={colors.textGray}
                />
              </TouchableOpacity>
              {openMenuId === item.id && (
                <View style={styles.menuAnswerWrap}>
                  <Text style={styles.menuAnswerText}>{t(item.content)}</Text>
                </View>
              )}
            </View>
          ))}

          {/* FAQ — expands in place */}
          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => setFaqOpen(!faqOpen)}
          >
            <View style={styles.menuIconBg}>
              <Ionicons name="help-circle-outline" size={20} color={colors.primary} />
            </View>
            <View style={styles.menuTextContent}>
              <Text style={styles.menuTitle}>{t('Frequently Asked Questions')}</Text>
              <Text style={styles.menuSubtitle}>{t('Find answers to common questions')}</Text>
            </View>
            <Ionicons name={faqOpen ? 'chevron-up' : 'chevron-down'} size={18} color={colors.textGray} />
          </TouchableOpacity>

          {faqOpen && (
            <View style={styles.faqList}>
              {faqItems.map((faq, index) => {
                const isOpen = openQuestionId === faq.id;
                return (
                  <View
                    key={faq.id}
                    style={[
                      styles.faqItem,
                      index !== faqItems.length - 1 && styles.faqItemBorder,
                    ]}
                  >
                    <TouchableOpacity
                      style={styles.faqQuestionRow}
                      activeOpacity={0.7}
                      onPress={() => toggleQuestion(faq.id)}
                    >
                      <Text style={styles.faqQuestionText}>{t(faq.question)}</Text>
                      <Ionicons name={isOpen ? 'remove' : 'add'} size={18} color={colors.primary} />
                    </TouchableOpacity>

                    {isOpen && (
                      <View style={styles.faqAnswerWrap}>
                        <Text style={styles.faqAnswerText}>{t(faq.answer)}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </View>

        {/* Satisfaction banner */}
        <View style={styles.satisfactionBanner}>
          <View style={styles.satisfactionIconWrap}>
            <Ionicons name="shield-checkmark" size={20} color={colors.primary} />
          </View>
          <View style={styles.satisfactionTextWrap}>
            <Text style={styles.satisfactionTitle}>{t('Your Satisfaction, Our Priority')}</Text>
            <Text style={styles.satisfactionSubtitle}>
              {t('Our support team is available 24/7 to ensure you have a smooth experience.')}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
          <MaterialCommunityIcons name="headset" size={18} color={colors.white} />
          <Text style={styles.primaryButtonText}>{t('Contact Support Now')}</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.white} />
        </TouchableOpacity>

        <View style={{ paddingBottom: 60 }} />
      </ScrollView>
    </View>
  );
};

export default HelpAndSupportView;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  heroIconWrap: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: 12,
  },
  heroSubtitle: {
    fontSize: 13.5,
    color: colors.textGray,
    textAlign: 'center',
    marginTop: 6,
    paddingHorizontal: 20,
    lineHeight: 19,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginTop: 20,
  },
  categoryCard: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  categoryIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: 8,
    textAlign: 'center',
  },
  menuContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 18,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuIconBg: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuTextContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 13.5,
    fontWeight: '600',
    color: colors.textDark,
  },
  menuSubtitle: {
    fontSize: 11.5,
    color: colors.textGray,
    marginTop: 2,
  },
  menuAnswerWrap: {
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuAnswerText: {
    fontSize: 12.5,
    color: colors.textGray,
    lineHeight: 18,
  },
  faqList: {
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  faqItem: {
    paddingVertical: 10,
  },
  faqItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  faqQuestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  faqQuestionText: {
    flex: 1,
    fontSize: 13.5,
    fontWeight: '600',
    color: colors.textDark,
    marginRight: 12,
  },
  faqAnswerWrap: {
    marginTop: 8,
    paddingRight: 24,
  },
  faqAnswerText: {
    fontSize: 12.5,
    color: colors.textGray,
    lineHeight: 18,
  },
  satisfactionBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: colors.iconBg,
    borderRadius: 14,
    padding: 14,
    marginTop: 18,
  },
  satisfactionIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  satisfactionTextWrap: {
    flex: 1,
  },
  satisfactionTitle: {
    fontSize: 13.5,
    fontWeight: '700',
    color: colors.textDark,
  },
  satisfactionSubtitle: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 3,
    lineHeight: 17,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    width: '100%',
    marginTop: 18,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  }
});