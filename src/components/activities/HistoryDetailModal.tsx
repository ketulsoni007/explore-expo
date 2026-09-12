import { useLanguage } from '@/context/LanguageContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export type HistoryItemType =
  | 'meal'
  | 'stay'
  | 'reward_earned'
  | 'reward_redeemed'
  | 'insurance'
  | 'roadside'
  | 'legal';

type DetailValue = string | string[];

export type HistoryItem = {
  id: string;
  type: HistoryItemType;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  tagText: string;
  tagBg: string;
  tagColor: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  details: Record<string, DetailValue>;
};

type HistoryDetailModalProps = {
  visible: boolean;
  historyItem: HistoryItem | null;
  onClose: () => void;
};

const TYPE_CONFIG: Record<
  HistoryItemType,
  {
    accent: string;
    background: string;
    icon: React.ReactNode;
  }
> = {
  meal: {
    accent: '#FF6B00',
    background: '#FDEEE3',
    icon: <Ionicons name="restaurant" size={22} color="#FF6B00" />,
  },
  stay: {
    accent: '#7C3AED',
    background: '#F3E8FF',
    icon: <Ionicons name="bed" size={22} color="#7C3AED" />,
  },
  reward_earned: {
    accent: '#D97706',
    background: '#FEF3E2',
    icon: <Ionicons name="star" size={22} color="#D97706" />,
  },
  reward_redeemed: {
    accent: '#D97706',
    background: '#FEF3E2',
    icon: <Ionicons name="gift" size={22} color="#D97706" />,
  },
  insurance: {
    accent: '#16A34A',
    background: '#E6F4EA',
    icon: <MaterialCommunityIcons name="shield-check" size={22} color="#16A34A" />,
  },
  roadside: {
    accent: '#0052FF',
    background: '#EAF0FF',
    icon: <MaterialCommunityIcons name="tow-truck" size={22} color="#0052FF" />,
  },
  legal: {
    accent: '#E11D48',
    background: '#FDE7EE',
    icon: <MaterialCommunityIcons name="scale-balance" size={22} color="#E11D48" />,
  },
};

const formatDetailLabel = (label: string) =>
  label
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (character) => character.toUpperCase());

const HistoryDetailModal = ({
  visible,
  historyItem,
  onClose,
}: HistoryDetailModalProps) => {
  const { t } = useLanguage();
  const config = useMemo(
    () => (historyItem ? TYPE_CONFIG[historyItem.type] : TYPE_CONFIG.meal),
    [historyItem],
  );

  if (!historyItem) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalRoot}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <ScrollView
            contentContainerStyle={styles.sheetContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <View style={[styles.typeIcon, { backgroundColor: config.background }]}>
                {config.icon}
              </View>
              <View style={styles.headerText}>
                <Text style={styles.title}>{historyItem.title}</Text>
                <Text style={styles.subtitle}>{historyItem.subtitle}</Text>
              </View>
              <Text style={styles.date}>{historyItem.date}</Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                { backgroundColor: historyItem.tagBg },
              ]}
            >
              <Ionicons name="checkmark-circle" size={15} color={historyItem.tagColor} />
              <Text style={[styles.statusText, { color: historyItem.tagColor }]}>
                {historyItem.tagText}
              </Text>
            </View>

            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailsCard}>
              {Object.entries(historyItem.details).map(([label, value]) => (
                <View key={label} style={styles.detailRow}>
                  <Text style={styles.detailLabel}>{formatDetailLabel(label)}</Text>
                  <Text style={styles.detailValue}>
                    {Array.isArray(value) ? value.join(', ') : value}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={[styles.closeButton, { backgroundColor: config.accent }]}
              onPress={onClose}
              activeOpacity={0.85}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  sheet: {
    maxHeight: '88%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  handle: {
    alignSelf: 'center',
    width: 42,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#CBD5E1',
    marginTop: 10,
  },
  sheetContent: {
    padding: 20,
    paddingBottom: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  typeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    color: '#1A2B49',
    fontSize: 18,
    fontWeight: '800',
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 3,
  },
  date: {
    color: '#6B7280',
    fontSize: 12,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 18,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
  sectionTitle: {
    color: '#1A2B49',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 10,
  },
  detailsCard: {
    backgroundColor: '#F5F7FA',
    borderColor: '#E5E9F0',
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
  },
  detailRow: {
    borderBottomColor: '#E5E9F0',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  detailRowLast: {
    borderBottomWidth: 0,
  },
  detailLabel: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 3,
  },
  detailValue: {
    color: '#1A2B49',
    fontSize: 14,
    fontWeight: '600',
  },
  closeButton: {
    alignItems: 'center',
    borderRadius: 14,
    marginTop: 22,
    paddingVertical: 15,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
});

export default HistoryDetailModal;
