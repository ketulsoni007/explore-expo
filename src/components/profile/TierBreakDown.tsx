import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// ----------------------------------------------------
// DYNAMIC DATA STRUCTURE (Matches typical BE Payload)
// ----------------------------------------------------
export type TierItem = {
  id: string;
  name: string;
  description: string;
  isCurrent?: boolean;
  buttonText?: string;
  // Theme styling for backend custom colors
  bgColor: string;
  borderColor: string;
  iconColor: string;
  textColor: string;
  dividerColor: string;
  buttonBg: string;
  buttonTextColor: string;
  disabledButtonBg?: string;
  disabledButtonTextColor?: string;
};

const STATIC_TIERS: TierItem[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    description: 'More benefits for regular users',
    isCurrent: true, // Example state (Can come from BE)
    buttonText: 'Current',
    bgColor: '#FAF0E6',
    borderColor: '#F3E0D0',
    iconColor: '#B06D4A',
    textColor: '#B06D4A',
    dividerColor: '#E0C5B3',
    buttonBg: '#B06D4A',
    buttonTextColor: '#FFFFFF',
    disabledButtonBg: '#EFE3DA',
    disabledButtonTextColor: '#B06D4A',
  },
  {
    id: 'silver',
    name: 'Silver',
    description: 'Greater value and priority support',
    isCurrent: false,
    buttonText: 'Upgrade',
    bgColor: '#F0F3F6',
    borderColor: '#E2E7ED',
    iconColor: '#788896',
    textColor: '#576775',
    dividerColor: '#CBD5E1',
    buttonBg: '#8A99A8',
    buttonTextColor: '#FFFFFF',
  },
  {
    id: 'gold',
    name: 'Gold',
    description: 'The complete experience with premium benefits',
    isCurrent: false,
    buttonText: 'Upgrade',
    bgColor: '#FEF9E7',
    borderColor: '#FAF0CD',
    iconColor: '#D49B27',
    textColor: '#A07212',
    dividerColor: '#EED99E',
    buttonBg: '#D49B27',
    buttonTextColor: '#FFFFFF',
  },
];

type TierBreakDownProps = {
  data?: TierItem[];
  onTierSelect?: (tier: TierItem) => void;
};

const TierBreakDown = ({
  data = STATIC_TIERS,
  onTierSelect,
}: TierBreakDownProps) => {
  return (
    <View style={styles.container}>
      {/* Cards List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {data.map((item) => (
          <View
            key={item.id}
            style={[
              styles.card,
              {
                backgroundColor: item.bgColor,
                borderColor: item.borderColor,
              },
            ]}
          >
            {/* Top Star Icon */}
            <View style={styles.iconContainer}>
              <Ionicons name="star" size={38} color={item.iconColor} />
            </View>

            {/* Tier Name */}
            <Text style={styles.tierName}>{item.name}</Text>

            {/* Subtitle / Description */}
            <Text style={[styles.tierDescription, { color: item.textColor }]}>
              {item.description}
            </Text>

            {/* Small Horizontal Divider */}
            <View
              style={[
                styles.divider,
                { backgroundColor: item.dividerColor },
              ]}
            />

            {/* Bottom Button */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onTierSelect?.(item)}
              style={[
                styles.button,
                {
                  backgroundColor: item.isCurrent
                    ? item.disabledButtonBg || '#EAEAEA'
                    : item.buttonBg,
                },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: item.isCurrent
                      ? item.disabledButtonTextColor || '#777'
                      : item.buttonTextColor,
                  },
                ]}
              >
                Read More
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom:20,
    borderRadius: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  cardsContainer: {
    gap: 12,
  },
  card: {
    width: 140,
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginBottom: 12,
  },
  tierName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
  },
  tierDescription: {
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 17,
    fontWeight: '500',
    minHeight: 52, // Keeps buttons aligned linearly across cards
  },
  divider: {
    width: 24,
    height: 2,
    borderRadius: 1,
    marginVertical: 16,
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '700',
  },
});

export default TierBreakDown;