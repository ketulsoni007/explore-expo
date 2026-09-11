import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const SupportHighlights = () => {
  const highlights = [
    {
      id: '1',
      title: '24/7 Available',
      icon: <Ionicons name="shield-checkmark-outline" size={22} color="#0052FF" />,
    },
    {
      id: '2',
      title: 'Expert Support',
      icon: <MaterialCommunityIcons name="headset" size={22} color="#0052FF" />,
    },
    {
      id: '3',
      title: 'Multiple Channels',
      icon: <Ionicons name="chatbox-ellipses-outline" size={22} color="#0052FF" />,
    },
    {
      id: '4',
      title: 'Driver First',
      icon: <Feather name="user" size={22} color="#0052FF" />,
    },
  ];

  return (
    <View style={styles.highlightsContainer}>
      {highlights.map((item) => (
        <View key={item.id} style={styles.highlightCard}>
          <View style={styles.highlightIconBg}>{item.icon}</View>
          <Text style={styles.highlightText} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  highlightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#F0F3FA',
  },
  highlightCard: {
    flex: 1,
    alignItems: 'center',
  },
  highlightIconBg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EFF4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  highlightText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0B1B3F',
    textAlign: 'center',
  },
});

export default SupportHighlights;