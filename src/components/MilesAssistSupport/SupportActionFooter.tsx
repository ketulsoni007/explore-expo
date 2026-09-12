import {
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { supportStyles as styles } from './supportStyles';

export default function SupportActionFooter() {
  
  const shake = useSharedValue(0);

  useEffect(() => {
    shake.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 60, easing: Easing.linear }),
        withTiming(-1, { duration: 60, easing: Easing.linear }),
        withTiming(1, { duration: 60, easing: Easing.linear }),
        withTiming(-1, { duration: 60, easing: Easing.linear }),
        withTiming(0, { duration: 60, easing: Easing.linear }),
        withTiming(0, { duration: 900, easing: Easing.linear }) 
      ),
      -1, 
      false
    );
  }, []);

  
  const shakeStyle = useAnimatedStyle(() => {
    const translateX = shake.value * 2.5;
    const rotate = `${shake.value * 6}deg`;
    return {
      transform: [{ translateX }, { rotate }],
    };
  });

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.primaryButton}
        activeOpacity={0.85}
      >
        <MaterialCommunityIcons name="headset" size={20} color="#FFFFFF" />
        <Text style={styles.primaryButtonText}>Contact Support Now</Text>
        <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        activeOpacity={0.7}
      >
        <Animated.View style={[localStyles.iconWrap, shakeStyle]}>
          <Ionicons name="call-outline" size={18} color="#0052FF" />
        </Animated.View>
        <Text style={styles.secondaryButtonText}>
          Need Help? Call Support: 24x7
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const localStyles = {
  iconWrap: {
    width: 18,
    height: 18,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
};