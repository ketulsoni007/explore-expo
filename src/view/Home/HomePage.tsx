import BannerView from '@/components/BannerView';
import Header from '@/components/Header';
import HotelThumbnail from '@/components/HotelThumbnail';
import NearBySection from '@/components/NearBySection';
import SideBar from '@/components/SideBar';
import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Header sidebarOpen={sidebarOpen} onMenuPress={() => setSidebarOpen(!sidebarOpen)} />
      <ScrollView>
        <BannerView />
        <NearBySection />
        {sidebarOpen && (<SideBar setSidebarOpen={setSidebarOpen} />)}
        <View>
          <HotelThumbnail />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  sidebar: {
    width: '75%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  closeButton: {
    alignSelf: 'flex-end',
  },

  closeText: {
    fontSize: 24,
  },

  sidebarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },

  menuItem: {
    paddingVertical: 15,
  },
});

export default HomePage;