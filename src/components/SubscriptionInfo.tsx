import { StyleSheet, Text, View } from 'react-native';

const SubscriptionInfo = () => {
  // Static data matching user details & 30-day trial logic
  const user = {
    name: 'Jay Dave',
    memberId: 'MA12345678',
    tier: 'Bronze Tier',
    status: 'Free Trial',
    totalDays: 30,
    daysRemaining: 25,
  };

  // Progress percentage calculation
  const progressPercent = ((user.totalDays - user.daysRemaining) / user.totalDays) * 100;

  return (
    <View style={styles.card}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.subTitle}>{user.status.toUpperCase()}</Text>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.memberId}>ID: {user.memberId}</Text>
        </View>
        
        {/* Tier / Live Badge */}
        <View style={styles.badge}>
          <View style={styles.greenDot} />
          <Text style={styles.badgeText}>{user.tier}</Text>
        </View>
      </View>

      {/* Progress Bar Section */}
      <View style={styles.progressContainer}>
        <View style={styles.track}>
          <View style={[styles.fill, { width: `${progressPercent}%` }]} />
          <View style={[styles.thumb, { left: `${progressPercent}%` }]} />
        </View>
      </View>

      {/* Footer Details */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {user.daysRemaining} days remaining
        </Text>
        <Text style={styles.footerText}>
          30-Day Free Access
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0F766E',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  memberId: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D1FAE5',
  },
  greenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#065F46',
  },
  progressContainer: {
    marginVertical: 8,
    paddingVertical: 4,
  },
  track: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    position: 'relative',
    justifyContent: 'center',
  },
  fill: {
    height: 6,
    backgroundColor: '#10B981',
    borderRadius: 3,
    position: 'absolute',
    left: 0,
  },
  thumb: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#10B981',
    position: 'absolute',
    marginLeft: -7,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151',
  },
});

export default SubscriptionInfo;