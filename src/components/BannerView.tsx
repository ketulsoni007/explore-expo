import React from 'react';
import { View, Image, useWindowDimensions, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  Carousel,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

const BANNER_DATA = [
  require('@/assets/images/slider-1.png'),
  require('@/assets/images/slider-2.png'),
  require('@/assets/images/slider-3.png'),
];

export const BannerView = () => {
  const { width: screenWidth } = useWindowDimensions();

  const bannerWidth = screenWidth - 32;
  const bannerHeight = bannerWidth * (9 / 16);

  // Logical carousel progress
  const progress = useSharedValue(0);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View
        style={[
          styles.carouselContainer,
          {
            width: bannerWidth,
            height: bannerHeight,
          },
        ]}
      >
        <Carousel
          data={BANNER_DATA}
          style={{
            width: bannerWidth,
            height: bannerHeight,
          }}
          progress={progress}
          loop
          autoplay
          autoplayInterval={4000}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image
                source={item}
                style={styles.bannerImage}
                resizeMode="cover"
              />
            </View>
          )}
        />

        {/* Pagination positioned inside the bottom of the banner */}
        <View style={styles.paginationWrapper}>
          <Pagination
            count={BANNER_DATA.length}
            progress={progress}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            containerStyle={styles.paginationContainer}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },

  carouselContainer: {
    position: 'relative',
  },

  cardContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },

  bannerImage: {
    width: '100%',
    height: '100%',
  },

  paginationWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  paginationContainer: {
    gap: 6,
    justifyContent: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CBD5E1',
  },

  activeDot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2563EB',
  },
});

export default BannerView;