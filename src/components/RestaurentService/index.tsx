import { ScrollView, StyleSheet } from 'react-native';

import { router } from 'expo-router';
import AboutSection from './AboutSection';
import ActionButtons from './ActionButtons';
import { colors } from './colors';
import FeatureGrid from './FeatureGrid';
import HygieneBanner from './HygieneBanner';
import MenuList from './MenuList';
import ServiceHero from './ServiceHero';
import WhoCanAvail from './WhoCanAvail';

const RestaurentServiceView = () => {
  const handleFindRestaurants = () => {
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
        <HygieneBanner />
        <ActionButtons
          onFindRestaurants={handleFindRestaurants}
          onCallSupport={handleCallSupport}
        />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 80,
  },
});

export default RestaurentServiceView;