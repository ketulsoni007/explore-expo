import BannerView from '@/components/BannerView';
import NearBySection from '@/components/NearBySection';
import PromoCards from '@/components/PromoCards';
import SocialMedias from '@/components/SocialMedias';
import SubscriptionInfo from '@/components/SubscriptionInfo';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

const HomePage = () => {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <DriverAvailability /> */}
      <BannerView />
      <SubscriptionInfo />
      <NearBySection />
      <PromoCards />
      <SocialMedias />
      <View style={{paddingBottom:140}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  menuItem: {
    paddingVertical: 15,
  },
});

export default HomePage;