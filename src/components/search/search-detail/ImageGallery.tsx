import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { Carousel, Pagination } from "react-native-reanimated-carousel";

const COLORS = {
    blue: "#2563EB",
    white: "#FFFFFF",
    black: "#000000",
    orange: "#EA580C"
};

const RESTAURENT_DATA = [
    require("@/assets/images/rest-1.jpg"),
    require("@/assets/images/rest-2.jpg"),
    require("@/assets/images/rest-3.jpg"),
];

const HOTEL_DATA = [
    require("@/assets/images/hotel-1.jpg"),
    require("@/assets/images/hotel-2.jpg"),
    require("@/assets/images/hotel-3.jpg"),
];

type ImageGalleryProps = {
    isHotel: boolean;
    isFree?: boolean;
};

export const ImageGallery = ({ isHotel, isFree = true }: ImageGalleryProps) => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions();

    const bannerWidth = screenWidth - 32;
    const bannerHeight = bannerWidth * (9 / 16);

    const progress = useSharedValue(0);
    const fullscreenProgress = useSharedValue(0);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFullscreenVisible, setIsFullscreenVisible] = useState(false);

    const MOCK_GALLERY_DATA = isHotel ? HOTEL_DATA : RESTAURENT_DATA;

    const onOpenFullscreen = () => {
        setIsFullscreenVisible(true);
    };

    const onCloseFullscreen = () => {
        setIsFullscreenVisible(false);
    };

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
                    data={MOCK_GALLERY_DATA}
                    style={{
                        width: bannerWidth,
                        height: bannerHeight,
                    }}
                    progress={progress}
                    loop
                    autoplay
                    autoplayInterval={4000}
                    onSnapToItem={(index) => setCurrentIndex(index)}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.cardContainer}
                            activeOpacity={0.95}
                            onPress={onOpenFullscreen}
                        >
                            <Image source={item} style={styles.bannerImage} resizeMode="cover" />
                        </TouchableOpacity>
                    )}
                />

                {/* 100% Free badge — top-left */}
                {isFree && (
                    <View style={{ ...styles.freeBadge, backgroundColor: isHotel ? COLORS.blue : COLORS.orange }}>
                        <Text style={styles.freeBadgeText}>100% FREE</Text>
                    </View>
                )}

                {/* Image counter badge — bottom-right */}
                <TouchableOpacity
                    style={styles.counterBadge}
                    activeOpacity={0.8}
                    onPress={onOpenFullscreen}
                >
                    <Ionicons name="images-outline" size={14} color={COLORS.white} />
                    <Text style={styles.counterBadgeText}>
                        {currentIndex + 1}/{MOCK_GALLERY_DATA.length}
                    </Text>
                </TouchableOpacity>

                {/* Pagination dots */}
                <View style={styles.paginationWrapper}>
                    <Pagination
                        count={MOCK_GALLERY_DATA.length}
                        progress={progress}
                        dotStyle={styles.dot}
                        activeDotStyle={{ ...styles.activeDot, backgroundColor: isHotel ? COLORS.blue : COLORS.orange }}
                        containerStyle={styles.paginationContainer}
                    />
                </View>
            </View>

            {/* Fullscreen viewer modal */}
            <Modal
                visible={isFullscreenVisible}
                transparent={false}
                animationType="fade"
                onRequestClose={onCloseFullscreen}
            >
                <View style={styles.fullscreenContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onCloseFullscreen}
                        hitSlop={12}
                    >
                        <Ionicons name="close" size={26} color={COLORS.white} />
                    </TouchableOpacity>

                    <View style={styles.fullscreenCounter}>
                        <Text style={styles.fullscreenCounterText}>
                            {currentIndex + 1} / {MOCK_GALLERY_DATA.length}
                        </Text>
                    </View>

                    <Carousel
                        data={MOCK_GALLERY_DATA}
                        style={{
                            width: screenWidth,
                            height: screenHeight,
                        }}
                        progress={fullscreenProgress}
                        defaultIndex={currentIndex}
                        onSnapToItem={(index) => setCurrentIndex(index)}
                        renderItem={({ item }) => (
                            <View style={styles.fullscreenCardContainer}>
                                <Image source={item} style={styles.fullscreenImage} resizeMode="contain" />
                            </View>
                        )}
                    />
                </View>
            </Modal>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 12,
    },

    carouselContainer: {
        position: "relative",
    },

    cardContainer: {
        flex: 1,
        borderRadius: 10,
        overflow: "hidden",
    },

    bannerImage: {
        width: "100%",
        height: "100%",
    },

    freeBadge: {
        position: "absolute",
        top: 12,
        left: 12,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    freeBadgeText: {
        fontSize: 11,
        fontWeight: "800",
        color: COLORS.white,
        letterSpacing: 0.3,
    },

    counterBadge: {
        position: "absolute",
        bottom: 12,
        right: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "rgba(0,0,0,0.55)",
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 5,
    },

    counterBadgeText: {
        fontSize: 12,
        fontWeight: "700",
        color: COLORS.white,
    },

    paginationWrapper: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: "center",
    },

    paginationContainer: {
        gap: 6,
        justifyContent: "center",
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#CBD5E1",
    },

    activeDot: {
        width: 20,
        height: 8,
        borderRadius: 4
    },

    // Fullscreen modal styles
    fullscreenContainer: {
        flex: 1,
        backgroundColor: COLORS.black,
    },

    closeButton: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.15)",
        alignItems: "center",
        justifyContent: "center",
    },

    fullscreenCounter: {
        position: "absolute",
        top: 58,
        alignSelf: "center",
        zIndex: 10,
        backgroundColor: "rgba(255,255,255,0.15)",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },

    fullscreenCounterText: {
        fontSize: 13,
        fontWeight: "700",
        color: COLORS.white,
    },

    fullscreenCardContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    fullscreenImage: {
        width: "100%",
        height: "100%",
    },
});

export default ImageGallery;