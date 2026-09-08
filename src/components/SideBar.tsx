import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

type SideBarProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ setSidebarOpen }: SideBarProps) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.sidebar}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <Image
                source={require('@/assets/images/sidebar-logo.jpg')}
                style={styles.logo}
                resizeMode="contain"
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSidebarOpen(false)}
              >
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.logoTitle}>Miles Assist</Text>
            <Text style={styles.logoSubtitle}>Safer Journey. Stronger Drivers.</Text>
          </View>
          <View style={styles.mainWrapper}>
            <View style={styles.profileCard}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
              <View style={styles.profileInfo}>
                <Text style={styles.profileName}>Jay Dave</Text>
                <Text style={styles.profileId}>MA12345678</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✔ Verified Driver Partner</Text>
                </View>
              </View>
            </View>
            <View style={styles.menuSection}>
              <TouchableOpacity style={[styles.menuItem, styles.activeMenuItem]}>
                <Text style={styles.menuIcon}>🏠</Text>
                <Text style={[styles.menuText, styles.activeMenuText]}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>🍔</Text>
                <Text style={styles.menuText}>Free Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>🏨</Text>
                <Text style={styles.menuText}>Free Stay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>⚙️</Text>
                <Text style={styles.menuText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>🎯</Text>
                <Text style={styles.menuText}>Activities</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.menuItem, styles.sosMenuItem]}>
                <Text style={styles.menuIcon}>🆘</Text>
                <Text style={[styles.menuText, styles.sosMenuText]}>SOS / Emergency</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuSection}>
              <Text style={styles.sectionHeader}>My Bookings</Text>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>📋</Text>
                <Text style={styles.menuText}>My Bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>🚗</Text>
                <Text style={styles.menuText}>My Vehicle</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>⭐</Text>
                <Text style={styles.menuText}>Reward Points</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuSection}>
              <Text style={styles.sectionHeader}>Help & Support</Text>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuIcon}>ℹ️</Text>
                <Text style={styles.menuText}>About Miles Assist</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bannerContainer}>
              <Text style={styles.bannerTitle}>✨ We're Here for You!</Text>
              <Text style={styles.bannerSubtitle}>One app. Many services. Always by your side.</Text>
            </View>
            <View style={styles.bottomSection}>
              <TouchableOpacity style={styles.bottomMenuItem}>
                <Text style={styles.bottomMenuIcon}>👤</Text>
                <Text style={styles.bottomMenuText}>Invite a Driver</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.bottomMenuItem}>
                <Text style={styles.bottomMenuIcon}>📤</Text>
                <Text style={styles.bottomMenuText}>Share App</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.bottomMenuItem}>
                <Text style={styles.bottomMenuIcon}>⚙️</Text>
                <Text style={styles.bottomMenuText}>Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.bottomMenuItem, styles.logoutItem]}>
                <Text style={styles.bottomMenuIcon}>🚪</Text>
                <Text style={[styles.bottomMenuText, styles.logoutText]}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  mainWrapper: {
    paddingHorizontal: 16
  },

  overlayTouchable: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  sidebar: {
    width: '80%',
    height: '100%',
    backgroundColor: '#FFF'
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  logoWrapper: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 6,
  },

  logo: {
    height: 192,
    borderRadius: 50
  },

  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  closeText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },

  logoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
    marginTop: 6,
  },

  logoSubtitle: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1a237e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a237e',
  },

  profileId: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },

  verifiedBadge: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    marginTop: 4,
    alignSelf: 'flex-start',
  },

  verifiedText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '600',
  },

  menuSection: {
    marginBottom: 16,
  },

  sectionHeader: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
    marginLeft: 4,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 2,
  },

  activeMenuItem: {
    backgroundColor: '#e8eaf6',
  },

  menuIcon: {
    fontSize: 18,
    marginRight: 12,
    width: 24,
  },

  menuText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },

  activeMenuText: {
    color: '#1a237e',
    fontWeight: '600',
  },

  sosMenuItem: {
    backgroundColor: '#ffebee',
  },

  sosMenuText: {
    color: '#c62828',
    fontWeight: '600',
  },

  bannerContainer: {
    backgroundColor: '#e8eaf6',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },

  bannerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a237e',
  },

  bannerSubtitle: {
    fontSize: 11,
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },

  bottomSection: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 16,
  },

  bottomMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
  },

  bottomMenuIcon: {
    fontSize: 18,
    marginRight: 12,
    width: 24,
  },

  bottomMenuText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },

  logoutItem: {
    marginTop: 4,
  },

  logoutText: {
    color: '#c62828',
  },

  versionText: {
    fontSize: 10,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30
  }
});

export default SideBar