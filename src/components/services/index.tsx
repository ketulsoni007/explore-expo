import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ServiceHeader from './ServiceHeader';
import ServiceKnowMoreTagLine from './ServiceKnowMoreTagLine';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  route?: string; // Optional route path
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hotels',
    title: 'Hotels',
    description: 'Find partner hotels offering free stay for eligible drivers.',
    iconBg: '#EDE9FE',
    iconColor: '#7C3AED',
    route: '/(drawer)/hotel-service',
    icon: (
      <MaterialCommunityIcons
        name="office-building"
        size={22}
        color="#7C3AED"
      />
    ),
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    description:
      'Find partner restaurants offering free meals for eligible drivers.',
    iconBg: '#FDEAD9',
    iconColor: '#F07615',
    route: '/(drawer)/restaurant-service',
    icon: (
      <MaterialCommunityIcons
        name="silverware-fork-knife"
        size={22}
        color="#F07615"
      />
    ),
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Get affordable insurance solutions and claim support.',
    iconBg: '#D6F5E3',
    iconColor: '#1CA24E',
    route: '/(drawer)/insurance-service',
    icon: <Ionicons name="shield-checkmark" size={22} color="#1CA24E" />,
  },
  {
    id: 'roadside',
    title: 'Roadside Assistance SOS',
    description:
      '24x7 help for breakdown, towing, tyre change, battery jump-start & more.',
    iconBg: '#DDEBFC',
    iconColor: '#2F6FE0',
    route: '/(drawer)/road-assist-service',
    icon: (
      <MaterialCommunityIcons name="tow-truck" size={22} color="#2F6FE0" />
    ),
  },
  {
    id: 'lawyer',
    title: 'Lawyer SOS',
    description: 'Connect with legal experts for guidance and support.',
    iconBg: '#FBE0E4',
    iconColor: '#E0506E',
    route: '/(drawer)/lawyer-service',
    icon: <FontAwesome5 name="balance-scale" size={19} color="#E0506E" />,
  },
  {
    id: 'support',
    title: '24/7 Support',
    description:
      'Get help with medical, accident, documents, and other emergencies.',
    iconBg: '#D2F3EC',
    iconColor: '#12A18C',
    route: '/(drawer)/miles-support',
    icon: (
      <MaterialCommunityIcons name="hand-heart" size={22} color="#12A18C" />
    ),
  },
];

const COMING_SOON_DATA = {
  id: 'coming-soon',
  title: 'Coming Soon',
  subtitle: 'New services are on the way!',
  items: [
    {
      id: 't1',
      label: 'Tyre Assistance',
      icon: <MaterialCommunityIcons name="tire" size={16} color="#0B1B3F" />,
    },
    {
      id: 't2',
      label: 'Car Insurance',
      icon: (
        <MaterialCommunityIcons
          name="shield-outline"
          size={16}
          color="#0B1B3F"
        />
      ),
    },
    {
      id: 't3',
      label: 'Border Tax',
      icon: (
        <Ionicons name="document-text-outline" size={16} color="#0B1B3F" />
      ),
    },
  ],
};

const FreeTag = () => (
  <Image
    source={require('@/assets/images/free-tag.png')}
    resizeMode="contain"
    style={styles.freeTag}
  />
);

const ServiceCard = ({ item }: { item: ServiceItem }) => {
  const handlePress = () => {
    if (item.route) {
      router.push(item.route as any);
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={item.route ? 0.7 : 1}
      onPress={handlePress}
    >
      <FreeTag />

      <View style={[styles.iconCircle, { backgroundColor: item.iconBg }]}>
        {item.icon}
      </View>

      <View style={styles.cardTitleRow}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Ionicons
          name="chevron-forward"
          size={16}
          color={item.route ? "#2F5CFF" : "#9CA3AF"} 
        />
      </View>

      <Text style={styles.cardDescription} numberOfLines={3}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );
};

const ComingSoonCard = ({ item }: any) => {
  return (
    <View style={styles.comingSoonCard}>
      <View style={styles.comingSoonHeader}>
        <Ionicons name="sparkles" size={15} color="#2F5CFF" />
        <Text style={styles.comingSoonTitle}>{item.title}</Text>
      </View>
      <Text style={styles.comingSoonSubtitle}>{item.subtitle}</Text>

      <View style={styles.upcomingList}>
        {item.items.map((upcoming: any) => (
          <View key={upcoming.id} style={styles.upcomingRow}>
            <View style={styles.upcomingIconCircle}>{upcoming.icon}</View>
            <Text style={styles.upcomingLabel}>{upcoming.label}</Text>
            <View style={styles.upcomingPill}>
              <Text style={styles.upcomingPillText}>Upcoming</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const chunkIntoPairs = (data: ServiceItem[]) => {
  const rows: ServiceItem[][] = [];
  for (let i = 0; i < data.length; i += 2) {
    rows.push(data.slice(i, i + 2));
  }
  return rows;
};

const ServicesScreen = () => {
  const rows = chunkIntoPairs(SERVICES_DATA);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.screenContent}
      showsVerticalScrollIndicator={false}
    >
      <ServiceHeader />

      <Text style={styles.sectionTitle}>All Services</Text>

      {rows.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
          {row.length === 1 && <View style={styles.cardPlaceholder} />}
        </View>
      ))}

      <ComingSoonCard item={COMING_SOON_DATA} />
      <ServiceKnowMoreTagLine />
      <View style={{ paddingBottom: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screenContent: {
    padding: 16,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0B1B3F',
    marginTop: 20,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  cardPlaceholder: {
    width: '48%',
  },
  freeTag: {
    position: 'absolute',
    top: -4,
    right: 0,
    width: 52,
    height: 52,
    zIndex: 2,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cardTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#0B1B3F',
    marginRight: 6,
  },
  cardDescription: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 17,
  },
  comingSoonCard: {
    width: '100%',
    backgroundColor: '#EEF2FC',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },
  upcomingList: {
    marginTop: 2,
  },
  comingSoonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  comingSoonTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0B1B3F',
    marginLeft: 6,
  },
  comingSoonSubtitle: {
    fontSize: 11,
    color: '#5B6376',
    marginBottom: 12,
  },
  upcomingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  upcomingIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  upcomingLabel: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#0B1B3F',
  },
  upcomingPill: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  upcomingPillText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2F5CFF',
  },
});

export default ServicesScreen;