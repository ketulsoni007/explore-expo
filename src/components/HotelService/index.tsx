import { ScrollView, StyleSheet, View } from 'react-native';

import { router } from 'expo-router';
import AboutSection from './AboutSection';
import ActionButtons from './ActionButtons';
import { colors } from './colors';
import FeatureGrid from './FeatureGrid';
import MenuList from './MenuList';
import ServiceHero from './ServiceHero';
import VerifiedBanner from './VerifiedBanner';
import WhoCanAvail from './WhoCanAvail';

const HotelServiceView = () => {
  const handleFindHotels = () => {
    router.push('/(drawer)/(tabs)/search');
  };

  const handleCallSupport = () => {
    // TODO: trigger phone dialer with support number
  };

  return (
    <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ServiceHero />
        <FeatureGrid />
        <AboutSection />
        <WhoCanAvail />
        <MenuList />
        <VerifiedBanner />
        <ActionButtons onFindHotels={handleFindHotels} onCallSupport={handleCallSupport} />
        <View style={{ paddingBottom: 40 }} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 32,
  },
});

export default HotelServiceView;