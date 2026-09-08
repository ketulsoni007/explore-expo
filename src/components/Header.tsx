import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type HeaderProps = {
  sidebarOpen: boolean;
  onMenuPress: () => void;
  onNotificationPress?: () => void;
  hasUnreadNotifications?: boolean;
};

const Header = ({
  sidebarOpen,
  onMenuPress,
  onNotificationPress,
  hasUnreadNotifications = true,
}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={onMenuPress}
        hitSlop={10}
      >
        {sidebarOpen ? (
          <Ionicons name="close" size={32} color="#000" />
        ) : (
          <Ionicons
            name="menu-outline"
            size={32}
            color="#000"
          />
        )}

      </TouchableOpacity>
      <Image
        source={require('@/assets/images/mile-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={onNotificationPress}
        hitSlop={10}
        style={styles.iconContainer}
      >
        <Ionicons
          name="notifications-outline"
          size={26}
          color="#000"
        />
        {hasUnreadNotifications && (
          <View style={styles.badge} />
        )}
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },

  logo: {
    width: 180,
    height: 45,
  },

  iconContainer: {
    position: 'relative',
  },

  badge: {
    position: 'absolute',
    top: 1,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
});

export default Header;