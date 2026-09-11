import {
    Ionicons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { supportStyles as styles } from './supportStyles';

const menuItems = [
  {
    id: 'how-it-works',
    title: 'How It Works',
    subtitle: 'Step-by-step process to get help',
    icon: <MaterialCommunityIcons name="headset" size={20} color="#0052FF" />,
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
  },
  {
    id: 'response-time',
    title: 'Average Response Time',
    subtitle: 'We respond within minutes',
    icon: <Ionicons name="time-outline" size={20} color="#0052FF" />,
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions',
    icon: <Ionicons name="help-circle-outline" size={20} color="#0052FF" />,
  },
  {
    id: 'terms',
    title: 'Terms & Conditions',
    subtitle: 'Read detailed T&C',
    icon: <Ionicons name="document-text-outline" size={20} color="#0052FF" />,
  },
];

export default function SupportListMenu() {
  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.menuItem,
            index !== menuItems.length - 1 && styles.menuItemBorder,
          ]}
          activeOpacity={0.7}
        >
          <View style={styles.menuIconBg}>{item.icon}</View>

          <View style={styles.menuTextContent}>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#6B7280" />
        </TouchableOpacity>
      ))}
    </View>
  );
}