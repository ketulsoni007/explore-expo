import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TABS = ['All', 'Food History', 'Stay History', 'Reward History'];

const HISTORY_DATA = [
  {
    id: '1',
    category: 'Food History',
    title: 'Free Meal',
    subtitle: 'Shree Krishna Dhaba, Ahmedabad',
    date: '18 May',
    tagText: 'FREE',
    tagBg: '#DDF6E4',
    tagColor: '#1CA24E',
    iconBg: '#FDEAD9',
    iconColor: '#F07615',
    icon: (
      <MaterialCommunityIcons
        name="silverware-fork-knife"
        size={20}
        color="#F07615"
      />
    ),
  },
  {
    id: '2',
    category: 'Stay History',
    title: 'Free Stay',
    subtitle: 'Hotel Highway Inn, Vadodara',
    date: '17 May',
    tagText: 'FREE',
    tagBg: '#DDF6E4',
    tagColor: '#1CA24E',
    iconBg: '#E9DFFB',
    iconColor: '#7B3FF2',
    icon: <Ionicons name="bed" size={20} color="#7B3FF2" />,
  },
  {
    id: '3',
    category: 'Reward History',
    title: 'Reward Earned',
    subtitle: 'Welcome Bonus',
    date: '17 May',
    tagText: '+200 Pts',
    tagBg: '#FDEAD9',
    tagColor: '#F07615',
    iconBg: '#FCEFD2',
    iconColor: '#E8A415',
    icon: <Ionicons name="star" size={20} color="#E8A415" />,
  },
  {
    id: '4',
    category: 'Reward History',
    title: 'Reward Redeemed',
    subtitle: 'Fuel Voucher',
    date: '16 May',
    tagText: '-150 Pts',
    tagBg: '#FDEAD9',
    tagColor: '#F07615',
    iconBg: '#E9DFFB',
    iconColor: '#7B3FF2',
    icon: <Ionicons name="gift" size={20} color="#7B3FF2" />,
  },
  {
    id: '5',
    category: 'Other',
    title: 'Insurance Support Requested',
    subtitle: 'Policy Details Shared',
    date: '15 May',
    tagText: 'Insurance',
    tagBg: '#DDF6E4',
    tagColor: '#1CA24E',
    iconBg: '#D6F0DD',
    iconColor: '#1CA24E',
    icon: (
      <MaterialCommunityIcons
        name="shield-check"
        size={20}
        color="#1CA24E"
      />
    ),
  },
  {
    id: '6',
    category: 'Other',
    title: 'Roadside Assistance Used',
    subtitle: 'Tyre Change Service',
    date: '14 May',
    tagText: 'Roadside',
    tagBg: '#DDEBFC',
    tagColor: '#2F6FE0',
    iconBg: '#D9E7FB',
    iconColor: '#2F6FE0',
    icon: (
      <MaterialCommunityIcons name="tow-truck" size={20} color="#2F6FE0" />
    ),
  },
  {
    id: '7',
    category: 'Other',
    title: 'Legal Guidance',
    subtitle: 'Consulted Lawyer',
    date: '13 May',
    tagText: 'Lawyers',
    tagBg: '#FBE0E4',
    tagColor: '#E0506E',
    iconBg: '#FBDCE1',
    iconColor: '#E0506E',
    icon: <FontAwesome5 name="balance-scale" size={17} color="#E0506E" />,
  },
];

const HistoryRow = ({ item }: { item: (typeof HISTORY_DATA)[number] }) => {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <View style={[styles.iconCircle, { backgroundColor: item.iconBg }]}>
        {item.icon}
      </View>
      <View style={styles.rowContent}>
        <Text style={styles.rowTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.rowSubtitle} numberOfLines={1} ellipsizeMode="tail">
          {item.subtitle}
        </Text>
      </View>
      <Text style={styles.rowDate}>{item.date}</Text>
      <View style={styles.rightCol}>
        <View style={[styles.tag, { backgroundColor: item.tagBg }]}>
          <Text style={[styles.tagText, { color: item.tagColor }]} numberOfLines={1}>
            {item.tagText}
          </Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color="#2F5CFF"
        style={styles.chevron}
      />
    </TouchableOpacity>
  );
};

const ActivitiesHistory = () => {
  const [activeTab, setActiveTab] = useState('All');
  const filteredHistory =
    activeTab === 'All'
      ? HISTORY_DATA
      : HISTORY_DATA.filter((item) => item.category === activeTab);
  const displayHistory: ((typeof HISTORY_DATA)[number] | null)[] = [
    ...filteredHistory,
    ...Array.from({ length: HISTORY_DATA.length - filteredHistory.length }, () => null),
  ];

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All History</Text>

        <View style={styles.tabsTrack}>
          <FlatList
            data={TABS}
            horizontal
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            style={styles.tabsList}
            renderItem={({ item }) => {
              const isActive = item === activeTab;
              return (
                <TouchableOpacity
                  style={[styles.tabPill, isActive && styles.tabPillActive]}
                  onPress={() => setActiveTab(item)}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[styles.tabText, isActive && styles.tabTextActive]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <FlatList
          data={displayHistory}
          keyExtractor={(item, index) => item?.id ?? `empty-${index}`}
          renderItem={({ item }) =>
            item ? <HistoryRow item={item} /> : <View style={styles.emptyRow} />
          }
          ItemSeparatorComponent={(item) => item ? <View style={styles.separator} /> : <View style={styles.separator} />}
          scrollEnabled={false}
        />

        <TouchableOpacity style={styles.viewFullRow} activeOpacity={0.7}>
          <Text style={styles.viewFullText}>View Full History</Text>
          <Ionicons name="chevron-forward" size={16} color="#2F5CFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0B1B3F',
    marginRight: 12,
    flexShrink: 0,
  },
  tabsTrack: {
    flexDirection: 'row',
    backgroundColor: '#F1F2F8',
    borderRadius: 24,
    padding: 4,
    flexShrink: 1,
  },
  tabsList: {
    flexGrow: 0,
  },
  tabPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 4,
  },
  tabPillActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B1B3F',
  },
  tabTextActive: {
    color: '#2F5CFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingTop: 6,
    paddingBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  emptyRow: {
    height: 60,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  
  
  
  rowContent: {
    flex: 1,
    minWidth: 0,
    marginRight: 8,
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0B1B3F',
    marginBottom: 2,
  },
  rowSubtitle: {
    fontSize: 12,
    color: '#8B93A7',
  },
  
  
  
  rightCol: {
    alignItems: 'flex-end',
    marginRight: 4,
  },
  rowDate: {
    fontSize: 11,
    color: '#8B93A7',
    marginRight:4
  },
  tag: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
  },
  chevron: {
    marginLeft: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    borderStyle: 'dashed'
  },
  viewFullRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  viewFullText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2F5CFF',
    marginRight: 4,
  },
});

export default ActivitiesHistory;