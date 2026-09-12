import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CurrentPlan from './CurrentPlan';
import MenuRow from './MenuRow';
import ProfileHeader from './ProfileHeader';
import SupportBanner from './SupportBanner';
import TierBreakDown from './TierBreakDown';

const COLORS = {
  bg: '#F5F7FA',
  card: '#FFFFFF',
  primary: '#1E5FEC',
  primaryDark: '#0F172A',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  border: '#E5E9F0',
  green: '#16A34A',
  greenBg: '#DCFCE7',
  orangeBg: '#FDEAE0',
  purpleBg: '#F1E9FE',
  greenIconBg: '#DCFCE7',
  blueBg: '#DCEBFE',
  redBg: '#FDE1E5',
};

type MenuItemData = {
  icon: React.ReactNode;
  bg: string;
  title: string;
  subtitle: string;
  badge?: string;
  route?: string;
};

const menuItems: MenuItemData[] = [
  {
    icon: <Ionicons name="person-outline" size={18} color="#2563EB" />,
    bg: '#E8F0FE',
    title: 'My Information',
    subtitle: 'View and update your personal details',
    route: '/(drawer)/my-information',
  },
  {
    icon: <Ionicons name="car-outline" size={18} color="#16A34A" />,
    bg: '#E4F7EA',
    title: 'My Vehicle',
    subtitle: 'Manage your vehicle information',
    badge: 'GJ01AB1234',
    route: '/(drawer)/my-vehicle',
  },
  {
    icon: <Ionicons name="shield-outline" size={18} color="#7C3AED" />,
    bg: '#F1E9FE',
    title: 'Verification & Documents',
    subtitle: 'Manage your verified documents',
    route: '/(drawer)/document-verification',
  },
  {
    icon: <Ionicons name="wallet-outline" size={18} color="#2563EB" />,
    bg: '#E8F0FE',
    title: 'Payment & Payout Details',
    subtitle: 'Manage bank account and payout details',
    route: '/(drawer)/wallet',
  },
  {
    icon: <Ionicons name="headset-outline" size={18} color="#2563EB" />,
    bg: '#E8F0FE',
    title: 'Help & Support',
    subtitle: 'FAQs, contact support and more',
    route: '/(drawer)/help-support',
  },
  {
    icon: <Ionicons name="information-circle-outline" size={18} color="#64748B" />,
    bg: '#EEF1F5',
    title: 'About Miles Assist',
    subtitle: 'App information, terms and privacy',
    route: '/(drawer)/about',
  },
];

const ProfileView = () => {
  const [medalTier,setMedalTier] = useState<string>('free');

  const handleTierSelect = (tier: any) => {
    setMedalTier(tier?.id?.toLowerCase() ?? tier?.name?.toLowerCase() ?? 'free');
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader medalTier={medalTier} />
      <CurrentPlan />
      <TierBreakDown onTierSelect={handleTierSelect} />
      <View style={styles.sectionCard}>
          {menuItems.map((item, idx) => (
            <MenuRow key={idx} item={item} isLast={idx === menuItems.length - 1} />
          ))}
        </View>
        <SupportBanner />
        <View style={{paddingBottom:150}} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        paddingHorizontal:16,
        paddingTop:16
    },
      sectionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
})

export default ProfileView