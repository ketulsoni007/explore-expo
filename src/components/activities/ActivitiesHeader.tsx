import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

const ActivitiesHeader = () => {
  const currentDuties = 12;
  const totalDuties = 30;
  const daysLeft = 45;
  const percentage = Math.round((currentDuties / totalDuties) * 100);

  return (
    <View style={styles.cardContainer}>
      {/* Title & Badge Row */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.mainTitle}>Duty Journey</Text>
          <Text style={styles.subTitle}>
            Your <Text style={styles.highlightText}>90 Days</Text> Progress
          </Text>
        </View>

        <View style={styles.daysBadge}>
          <Ionicons name="calendar-outline" size={14} color="#1D4ED8" />
          <Text style={styles.daysText}>{daysLeft} Days Left</Text>
        </View>
      </View>

      {/* Visual Journey Illustration */}
      <Image
        source={require('@/assets/images/activity-duty-completed.png')}
        style={styles.illustrationImage}
        resizeMode="cover"
      />

      {/* Progress & Goal Section */}
      <View style={styles.progressSection}>
        <View style={styles.statsRow}>
          <View>
            <Text style={styles.progressCounter}>
              <Text style={styles.completedCount}>{currentDuties}</Text> / {totalDuties}
            </Text>
            <Text style={styles.counterLabel}>Duties Completed</Text>
          </View>

          <View style={styles.progressBarWrapper}>
            <View style={styles.trackBackground}>
              <View style={[styles.trackFill, { width: `${percentage}%` }]} />
            </View>
          </View>

          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>

        {/* Goal Indicator */}
        <View style={styles.goalFooter}>
          <Ionicons name="flag" size={14} color="#1D4ED8" style={{ marginRight: 6 }} />
          <Text style={styles.goalText}>
            Milestone: <Text style={{ fontWeight: '700' }}>{totalDuties} Duties Goal</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FAFBFD',
    borderRadius: 20,
    paddingTop: 20,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#EFF2F7',
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  subTitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '500',
  },
  highlightText: {
    color: '#1D4ED8',
    fontWeight: '700',
  },
  daysBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 6,
  },
  daysText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  illustrationImage: {
    width: '100%',
    height: 120,
  },
  progressSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 14,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressCounter: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  completedCount: {
    color: '#1D4ED8',
  },
  counterLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
    marginTop: 2,
  },
  progressBarWrapper: {
    flex: 1,
    marginHorizontal: 14,
  },
  trackBackground: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  trackFill: {
    height: '100%',
    backgroundColor: '#1D4ED8',
    borderRadius: 4,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
  },
  goalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  goalText: {
    fontSize: 12,
    color: '#1D4ED8',
  },
});

export default ActivitiesHeader;