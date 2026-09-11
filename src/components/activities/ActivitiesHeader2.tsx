import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

interface DutyMilestone {
  duties: number;
  completed: boolean;
  isCarPosition?: boolean;
}

const MILESTONES: DutyMilestone[] = [
  { duties: 5, completed: true },
  { duties: 10, completed: true },
  { duties: 15, completed: true },
  { duties: 20, completed: false, isCarPosition: true },
  { duties: 25, completed: false },
  { duties: 30, completed: false },
];

const ActivitiesHeader = () => {
  const currentDuties = 12;
  const totalDuties = 60;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.bannerRow}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>
            Every Help,{"\n"}
            <Text style={styles.highlightText}>Every Mile Matters!</Text>
          </Text>
          <Text style={styles.subHeadingText}>
            We're here for you at every step of your journey.
          </Text>
        </View>
        <Image
          source={require('@/assets/images/activity-banner.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.progressHeader}>
        <View>
          <Text style={styles.progressTitle}>Duty Progress</Text>
          <Text style={styles.progressSubtitle}>
            <Text style={styles.completedCount}>{currentDuties}</Text>
            <Text style={styles.totalCount}> / {totalDuties} Duties Completed</Text>
          </Text>
        </View>
        <View style={styles.daysBadge}>
          <Text style={styles.daysText}>180 Days</Text>
          <Ionicons name="calendar-outline" size={14} color="#0052CC" style={{ marginLeft: 4 }} />
        </View>
      </View>
      <Image source={require('@/assets/images/activity-duty-completed.png')} style={styles.dutyCompletedImage} />
      <View style={styles.goalFooter}>
        <Ionicons name="flag" size={14} color="#0052CC" style={{ marginRight: 6 }} />
        <Text style={styles.goalText}>
          Milestones: <Text style={{ fontWeight: '700' }}>60 Duties Goal</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2
  },
  dutyCompletedImage:{
    width:'100%',
    height:100
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
    paddingTop:16,
    paddingLeft:16,
    paddingBottom:16
  },
  headingText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 26,
  },
  highlightText: {
    color: '#0052CC',
  },
  subHeadingText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 6,
    lineHeight: 16,
  },
  bannerImage: {
    width: 160,
    height: 124,
    borderTopRightRadius:20,
    marginBottom:-30
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 12,
    marginTop:-6
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft:16,
    paddingTop:4,
    paddingRight:16,
    paddingBottom:10
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A'
  },
  progressSubtitle: {
    marginTop: 4,
  },
  completedCount: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0052CC',
  },
  totalCount: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
  },
  daysBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  daysText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0052CC',
  },
  timelineContainer: {
    marginTop: 20,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  timelineTrackContainer: {
    height: 16,
    backgroundColor: '#FFF',
    position: 'relative',
    justifyContent: 'center',
  },
  dottedTrack: {
    position: 'absolute',
    top: 8,
    left: 0,
    right: 0,
    height: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#94A3B8',
    zIndex: 1,
  },
  activeLine: {
    position: 'absolute',
    top: 7,
    left: 0,
    height: 3,
    backgroundColor: '#0052CC',
    borderRadius: 1.5,
    zIndex: 2,
  },
  nodesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3
  },
  nodeItem: {
    alignItems: 'center',
  },
  nodeIconContainer: {
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcomingNodeCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    backgroundColor: '#FFF',
  },
  nodeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 10,
    paddingTop:4
  },
  nodeSubtext: {
    fontSize: 10,
    color: '#64748B',
  },
  goalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingTop: 26,
  },
  goalText: {
    fontSize: 13,
    color: '#0052CC',
  },
});

export default ActivitiesHeader;