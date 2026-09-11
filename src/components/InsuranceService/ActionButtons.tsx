import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from './colors';

type Props = {
  onExplorePlans?: () => void;
  onCallSupport?: () => void;
};

const ActionButtons = ({ onExplorePlans, onCallSupport }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={onExplorePlans}
        activeOpacity={0.85}
      >
        <Ionicons
          name="shield-checkmark"
          size={18}
          color={colors.white}
          style={styles.leftIcon}
        />
        <Text style={styles.primaryButtonText}>Explore Insurance Plans</Text>
        <Ionicons name="chevron-forward" size={18} color={colors.white} style={styles.rightIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.supportLink} onPress={onCallSupport} activeOpacity={0.7}>
        <Ionicons name="call-outline" size={16} color={colors.primary} style={styles.leftIcon} />
        <Text style={styles.supportText}>Need Help? Call Support 24x7</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 24,
    alignItems: 'center',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    width: '100%',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  supportLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  supportText: {
    color: colors.primary,
    fontSize: 14.5,
    fontWeight: '700',
  },
});

export default ActionButtons;