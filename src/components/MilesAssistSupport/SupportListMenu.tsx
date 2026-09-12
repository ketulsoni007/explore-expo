import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

const menuItems = [
  {
    id: 'how-it-works',
    title: 'How It Works',
    subtitle: 'Step-by-step process to get help',
    icon: <MaterialCommunityIcons name="headset" size={20} color="#0052FF" />,
    content:
      'Choose a support category, describe your issue, and send your request. Our team will review it, connect you with the right specialist, and keep you updated until it is resolved.',
  },
  {
    id: 'channels',
    title: 'Support Channels',
    subtitle: 'Choose the way you want to connect',
    icon: (
      <Ionicons
        name="chatbox-ellipses-outline"
        size={20}
        color="#0052FF"
      />
    ),
    content:
      'Connect through in-app chat, phone support, or email. For urgent driver and roadside issues, use the support button so the team can prioritize your request.',
  },
  {
    id: 'response-time',
    title: 'Average Response Time',
    subtitle: 'We respond within minutes',
    icon: <Ionicons name="time-outline" size={20} color="#0052FF" />,
    content:
      'Most requests receive an initial response within a few minutes. Complex cases may take longer while our team checks documents or coordinates with a service partner.',
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    subtitle: 'Read detailed T&C',
    icon: <Ionicons name="document-text-outline" size={20} color="#0052FF" />,
    content:
      'Please provide accurate contact and request details. Support availability and resolution times can vary by service, location, partner availability, and the urgency of your request.',
  },
];

// Placeholder FAQ content — swap in the real questions/answers whenever you have them
const faqItems = [
  {
    id: 'faq-1',
    question: 'How do I contact support?',
    answer:
      'You can reach support anytime through the "Contact Support Now" button or by calling the 24x7 helpline listed on this page.',
  },
  {
    id: 'faq-2',
    question: 'What is the average response time?',
    answer:
      'Most queries are responded to within a few minutes. Complex issues may take a little longer to resolve fully.',
  },
  {
    id: 'faq-3',
    question: 'Is support available on weekends?',
    answer:
      'Yes, our support team is available 24x7, including weekends and public holidays.',
  },
  {
    id: 'faq-4',
    question: 'Can I track my previous support requests?',
    answer:
      'Yes, all your past requests and their status can be viewed under the "My Requests" section in the app.',
  },
];

export default function SupportListMenu() {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  return (
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
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>

            <Ionicons
              name={openMenuId === item.id ? 'chevron-up' : 'chevron-down'}
              size={18}
              color="#6B7280"
            />
          </TouchableOpacity>
          {openMenuId === item.id && (
            <View style={localStyles.menuAnswerWrap}>
              <Text style={localStyles.menuAnswerText}>{item.content}</Text>
            </View>
          )}
        </View>
      ))}

      {/* FAQ — expands in place instead of navigating */}
      <TouchableOpacity
        style={styles.menuItem}
        activeOpacity={0.7}
        onPress={() => setFaqOpen(!faqOpen)}
      >
        <View style={styles.menuIconBg}>
          <Ionicons name="help-circle-outline" size={20} color="#0052FF" />
        </View>

        <View style={styles.menuTextContent}>
          <Text style={styles.menuTitle}>Frequently Asked Questions</Text>
          <Text style={styles.menuSubtitle}>Find answers to common questions</Text>
        </View>

        <Ionicons
          name={faqOpen ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#6B7280"
        />
      </TouchableOpacity>

      {faqOpen && (
        <View style={localStyles.faqList}>
          {faqItems.map((faq, index) => {
            const isOpen = openQuestionId === faq.id;
            return (
              <View
                key={faq.id}
                style={[
                  localStyles.faqItem,
                  index !== faqItems.length - 1 && localStyles.faqItemBorder,
                ]}
              >
                <TouchableOpacity
                  style={localStyles.faqQuestionRow}
                  activeOpacity={0.7}
                  onPress={() => toggleQuestion(faq.id)}
                >
                  <Text style={localStyles.faqQuestionText}>{faq.question}</Text>
                  <Ionicons
                    name={isOpen ? 'remove' : 'add'}
                    size={18}
                    color="#0052FF"
                  />
                </TouchableOpacity>

                {isOpen && (
                  <View style={localStyles.faqAnswerWrap}>
                    <Text style={localStyles.faqAnswerText}>{faq.answer}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  faqList: {
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom:12,
    borderRadius: 8
  },
  faqItem: {
    paddingVertical: 10,
  },
  faqItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9F0',
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
    color: '#1A2B49',
    marginRight: 12,
  },
  faqAnswerWrap: {
    marginTop: 8,
    paddingRight: 24,
  },
  faqAnswerText: {
    fontSize: 12.5,
    color: '#5B6474',
    lineHeight: 18,
  },
  menuAnswerWrap: {
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 1,
  },
  menuAnswerText: {
    fontSize: 12.5,
    color: '#5B6474',
    lineHeight: 18,
  },
});