import { ScrollView, StyleSheet, View } from 'react-native';

import AboutSection from './AboutSection';
import ActionButtons from './ActionButtons';
import { colors } from './colors';
import FeatureGrid from './FeatureGrid';
import MenuList from './MenuList';
import ServiceHero from './ServiceHero';
import TrustedBanner from './TrustedBanner';
import WhoCanAvail from './WhoCanAvail';

const InsuranceServiceView = () => {
  const handleExplorePlans = () => {
    // TODO: navigate to insurance plans screen
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
        <TrustedBanner />
        <ActionButtons onExplorePlans={handleExplorePlans} onCallSupport={handleCallSupport} />
        <View style={{paddingBottom: 40}} />
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

export default InsuranceServiceView;