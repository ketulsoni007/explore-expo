import MapSection from '@/components/MapSection';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Partner {
  id: string;
  name: string;
  distance: string;
  rating: number;
  badge: string;
  image: any;
}

const HOTELS_DATA: Partner[] = [
  {
    id: '1',
    name: 'Hotel Highway Inn',
    distance: '0.3 km away',
    rating: 4.5,
    badge: 'Partner Hotel',
    image: require('@/assets/images/hotel-1.jpg'), // Update with your image paths
  },
  {
    id: '2',
    name: 'Blue Ridge Hotel',
    distance: '0.7 km away',
    rating: 4.2,
    badge: 'Partner Hotel',
    image: require('@/assets/images/hotel-2.jpg'),
  },
  {
    id: '3',
    name: 'Grand Stay Hotel',
    distance: '1.2 km away',
    rating: 4.3,
    badge: 'Partner Hotel',
    image: require('@/assets/images/hotel-3.jpg'),
  },
];

const RESTAURANTS_DATA: Partner[] = [
  {
    id: '1',
    name: 'Highway Cafe',
    distance: '0.5 km away',
    rating: 4.6,
    badge: 'Partner Restaurant',
    image: require('@/assets/images/rest-1.jpg'),
  },
  {
    id: '2',
    name: 'Relief Food Zone',
    distance: '1.1 km away',
    rating: 4.4,
    badge: 'Partner Restaurant',
    image: require('@/assets/images/rest-2.jpg'),
  },
  {
    id: '3',
    name: 'Royal Food Zone',
    distance: '3.5 km away',
    rating: 4.6,
    badge: 'Partner Restaurant',
    image: require('@/assets/images/rest-3.jpg'),
  },
];

const NearBySection = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'restaurants'>('hotels');

  const currentData = activeTab === 'hotels' ? HOTELS_DATA : RESTAURANTS_DATA;

  return (
    <View style={[styles.container, styles.cardContainer]}>
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Nearby Partners</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-sharp" size={10} color="#64748B" />
            <Text style={styles.locationText}>Ahmedabad, Gujarat</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <Ionicons name="chevron-forward" size={16} color="#2563EB" />
        </TouchableOpacity>
      </View>
      <View style={styles.mapWrapper}>
        <MapSection />
      </View>
      <View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'hotels' && styles.activeTabButton]}
            onPress={() => setActiveTab('hotels')}
            activeOpacity={0.7}
          >
            <FontAwesome5
              name="bed"
              size={16}
              color={activeTab === 'hotels' ? '#EA580C' : '#94A3B8'}
            />
            <Text style={[styles.tabText, activeTab === 'hotels' && styles.activeTabText]}>
              Hotels
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'restaurants' && styles.activeTabButton]}
            onPress={() => setActiveTab('restaurants')}
            activeOpacity={0.7}
          >
            <FontAwesome5
              name="utensils"
              size={16}
              color={activeTab === 'restaurants' ? '#EA580C' : '#94A3B8'}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === 'restaurants' && styles.activeTabTextRestaurant,
              ]}
            >
              Restaurants
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {currentData.map((item) => (
            <TouchableOpacity key={item.id} style={styles.partnerRow} activeOpacity={0.7}>
              <Image source={item.image} style={styles.partnerImage} />
              <View style={styles.partnerDetails}>
                <Text style={styles.partnerName}>{item.name}</Text>
                <View style={styles.subDetailsRow}>
                  <Text style={styles.distanceText}>{item.distance}</Text>
                  <Text style={styles.dotSeparator}>•</Text>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Ionicons name="star" size={12} color="#F59E0B" />
                  <View style={styles.badgeTag}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#0F172A" />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
  },
  locationText: {
    fontSize: 10,
    color: '#64748B',
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },
  mapWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth:1,
    borderColor:'#EEE'
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    marginBottom: 12,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#EA580C',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  activeTabText: {
    color: '#EA580C',
  },
  activeTabTextRestaurant: {
    color: '#EA580C',
  },
  listContainer: {
    gap: 14,
  },
  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  partnerImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
  },
  partnerDetails: {
    flex: 1,
  },
  partnerName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  subDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  distanceText: {
    fontSize: 11,
    color: '#64748B',
  },
  dotSeparator: {
    fontSize: 11,
    color: '#94A3B8',
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#0F172A',
  },
  badgeTag: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 4,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#4F46E5',
  }
});

export default NearBySection;