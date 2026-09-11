import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const CARD_DATA = [
  {
    id: 'wallet',
    type: 'wallet',
    label: 'Wallet',
    value: '₹3,250',
    subLabel: 'Available Balance',
    buttonText: 'Add Money',
    iconBg: '#DCE6FF',
    iconColor: '#2F5CFF',
    cardBg: '#EEF2FC',
    buttonColor: '#2F5CFF',
    labelColor: '#2F5CFF',
    icon: <Ionicons name="wallet" size={24} color="#2F5CFF" />,
  },
  {
    id: 'savings',
    type: 'stat',
    label: 'Total Savings',
    value: '₹8,400',
    subLabel: 'Saved So Far',
    buttonText: 'View Details',
    iconBg: '#CFF2ED',
    iconColor: '#0E9C8F',
    cardBg: '#E8F8F5',
    buttonColor: '#0E9C8F',
    labelColor: '#0E9C8F',
    icon: (
      <MaterialCommunityIcons name="piggy-bank" size={24} color="#0E9C8F" />
    ),
  },
  {
    id: 'duty',
    type: 'stat',
    label: 'Duty Completed',
    value: '12',
    subLabel: 'This Month',
    buttonText: 'View Details',
    iconBg: '#D6F5E3',
    iconColor: '#12A150',
    cardBg: '#EAF9F0',
    buttonColor: '#12A150',
    labelColor: '#12A150',
    icon: (
      <MaterialCommunityIcons
        name="clipboard-check-outline"
        size={24}
        color="#12A150"
      />
    ),
  },
  {
    id: 'stay',
    type: 'stat',
    label: 'Free Stay',
    value: '3',
    subLabel: 'This Month',
    buttonText: 'View Details',
    iconBg: '#E5DEFB',
    iconColor: '#6C3CE0',
    cardBg: '#F1EDFC',
    buttonColor: '#6C3CE0',
    labelColor: '#6C3CE0',
    icon: <Ionicons name="bed" size={24} color="#6C3CE0" />,
  },
  {
    id: 'food',
    type: 'stat',
    label: 'Free Food',
    value: '6',
    subLabel: 'This Month',
    buttonText: 'View Details',
    iconBg: '#FCE3D2',
    iconColor: '#F07615',
    cardBg: '#FDF1E8',
    buttonColor: '#F07615',
    labelColor: '#F07615',
    icon: (
      <MaterialCommunityIcons
        name="silverware-fork-knife"
        size={22}
        color="#F07615"
      />
    ),
  },
];

const Card = ({ item }: any) => {
  return (
    <View style={[styles.card, { backgroundColor: item.cardBg }]}>
      <View style={[styles.iconCircle, { backgroundColor: item.iconBg }]}>
        {item.icon}
      </View>

      <Text style={[styles.statLabel, { color: item.labelColor }]}>
        {item.label}
      </Text>

      <Text style={styles.value}>{item.value}</Text>
      <Text style={styles.subLabel}>{item.subLabel}</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: item.buttonColor }]}
        activeOpacity={0.85}
      >
        <Text style={styles.buttonText}>{item.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ActivitiesCards = () => {
  return (
    <FlatList
      data={CARD_DATA}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

const CARD_WIDTH = 160;

const styles = StyleSheet.create({
  listContent: {
    marginBottom: 20,
    marginTop: 4,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  walletLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0B1B3F',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0B1B3F',
    marginBottom: 4,
  },
  subLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 10,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ActivitiesCards;