import { AntDesign, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const COLORS = {
    navy: "#1E293B",
    darkBlue: "#0F172A",
    blueText: "#334155",
    gray: "#6B7280",
    lightGray: "#9CA3AF",
    border: "#E5E7EB",
    green: "#16A34A",
    red: "#DC2626",
    orange: "#EA580C",
    orangeBg: "#FFF3EC",
    purple: "#7C3AED",
    purpleBg: "#F0EEFF",
    infoBg: "#EEF2FF",
    white: "#FFFFFF",
};

const SearchView = () => {
    const onUsePickupLocation = () => { };
    const onUseDropLocation = () => { };
    const onFindRestaurants = () => {
        router.push({
            pathname: "/(drawer)/search-result",
            params: { category: "restaurant" }
        });
    };
    const onFindHotels = () => router.push({
        pathname: "/(drawer)/search-result",
        params: { category: "hotel" }
    });;

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
        >
            <Text style={styles.heading}>Where are you{"\n"}going today?</Text>
            <Text style={styles.subheading}>
                Find free food and free stay{"\n"}options on your route.
            </Text>
            <View style={styles.routeCard}>
                <View style={styles.routeCardTop}>
                    <View style={styles.routeRow}>
                        <Ionicons name="location" size={20} color={COLORS.green} style={styles.pinIcon} />
                        <View style={styles.routeTextContainer}>
                            <Text style={styles.routeLabel}>Pickup Point</Text>
                            <Text style={styles.routePlaceholder}>Enter pickup location</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.locateButton}
                            onPress={onUsePickupLocation}
                            hitSlop={8}
                        >
                            <AntDesign name="aim" size={18} color={COLORS.navy} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.routeDivider} />

                    <View style={styles.routeRow}>
                        <Ionicons name="location" size={20} color={COLORS.red} style={styles.pinIcon} />
                        <View style={styles.routeTextContainer}>
                            <Text style={styles.routeLabel}>Drop Point</Text>
                            <Text style={styles.routePlaceholder}>Enter drop location</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.locateButton}
                            onPress={onUseDropLocation}
                            hitSlop={8}
                        >
                            <AntDesign name="aim" size={18} color={COLORS.navy} />
                        </TouchableOpacity>
                    </View>
                </View>

                <Image
                    source={require("@/assets/images/search-illustration.png")}
                    style={styles.routeIllustration}
                    resizeMode="cover"
                />
            </View>

            {/* Verified partners row */}
            <View style={styles.verifiedRow}>
                <Ionicons name="shield-checkmark-outline" size={16} color={COLORS.gray} />
                <Text style={styles.verifiedText}>
                    Only verified partners  •  100% Free for eligible drivers
                </Text>
            </View>

            {/* Restaurants / Hotels cards */}
            <View style={styles.optionsRow}>
                <View style={[styles.optionCard, { backgroundColor: COLORS.orangeBg }]}>
                    <Image
                        source={require("@/assets/images/free-food-illustration.png")}
                        style={styles.optionIllustration}
                        resizeMode="contain"
                    />

                    <View style={styles.optionCardTop}>
                        <View style={[styles.optionIconCircle, { backgroundColor: COLORS.orange }]}>
                            <Ionicons name="restaurant" size={20} color={COLORS.white} />
                        </View>
                    </View>

                    <Text style={[styles.optionTitle, { color: COLORS.orange }]}>
                        Find Restaurants
                    </Text>
                    <Text style={styles.optionSubtitle}>Discover free food{"\n"}on your route</Text>

                    <TouchableOpacity
                        style={[styles.ctaButton, { backgroundColor: "#EA580C" }]}
                        activeOpacity={0.85}
                        onPress={onFindRestaurants}
                    >
                        <Text style={styles.ctaText}>Find Food</Text>
                        <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View style={[styles.optionCard, { backgroundColor: COLORS.purpleBg }]}>
                    <Image
                        source={require("@/assets/images/free-stay-illustration.png")}
                        style={styles.optionIllustration}
                        resizeMode="contain"
                    />

                    <View style={styles.optionCardTop}>
                        <View style={[styles.optionIconCircle, { backgroundColor: COLORS.purple }]}>
                            <Ionicons name="bed" size={20} color={COLORS.white} />
                        </View>
                    </View>

                    <Text style={[styles.optionTitle, { color: COLORS.purple }]}>Find Hotels</Text>
                    <Text style={styles.optionSubtitle}>Discover free stays{"\n"}on your route</Text>

                    <TouchableOpacity
                        style={[styles.ctaButton, { backgroundColor: COLORS.purple }]}
                        activeOpacity={0.85}
                        onPress={onFindHotels}
                    >
                        <Text style={styles.ctaText}>Find Hotel</Text>
                        <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* How it works */}
            <View style={styles.howItWorksCard}>
                <View style={styles.howItWorksHeader}>
                    <View style={styles.howItWorksBadge}>
                        <Ionicons name="checkmark" size={14} color={COLORS.white} />
                    </View>
                    <Text style={styles.howItWorksTitle}>How it works?</Text>
                </View>

                <View style={styles.howItWorksBody}>
                    <View style={styles.stepsList}>
                        {[
                            "Enter your pickup and drop points",
                            "Choose Restaurants or Hotels",
                            "View all available options on your route",
                            "Tap to see full details and terms",
                        ].map((step, index) => (
                            <View key={step} style={styles.stepRow}>
                                <Text style={styles.stepNumber}>{index + 1}.</Text>
                                <Text style={styles.stepText}>{step}</Text>
                            </View>
                        ))}
                    </View>

                    <Image
                        source={require("@/assets/images/map-illustration.png")}
                        style={styles.mapIllustration}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <View style={{ paddingBottom: 110 }} />
        </ScrollView>
    );
};

export default SearchView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 24,
    },

    heading: {
        fontSize: 32,
        fontWeight: "800",
        color: COLORS.darkBlue,
        lineHeight: 38,
    },

    subheading: {
        fontSize: 15,
        color: COLORS.blueText,
        marginTop: 12,
        lineHeight: 21,
    },

    routeCard: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 20,
        marginTop: 24,
        overflow: "hidden",
    },

    routeCardTop: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },

    routeRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 16,
    },

    pinIcon: {
        marginRight: 10,
    },

    routeTextContainer: {
        flex: 1,
    },

    routeLabel: {
        fontSize: 15,
        fontWeight: "700",
        color: COLORS.darkBlue,
    },

    routePlaceholder: {
        fontSize: 13,
        color: COLORS.lightGray,
        marginTop: 2,
    },

    locateButton: {
        width: 34,
        height: 34,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    routeDivider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginLeft: 30,
    },

    routeIllustration: {
        width: "100%",
        height: 180
    },

    verifiedRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        gap: 6,
    },

    verifiedText: {
        fontSize: 12.5,
        color: COLORS.gray,
    },

    optionsRow: {
        flexDirection: "row",
        gap: 12,
        marginTop: 18,
    },

    optionCard: {
        flex: 1,
        borderRadius: 20,
        padding: 16,
        overflow: "hidden",
        minHeight: 210,
        position: "relative",
    },

    optionCardTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    optionIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    optionChevronCircle: {
        width: 26,
        height: 26,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
    },

    optionTitle: {
        fontSize: 16,
        fontWeight: "800",
        marginTop: 14,
    },

    optionSubtitle: {
        fontSize: 12.5,
        color: COLORS.blueText,
        marginTop: 6,
        lineHeight: 17,
        marginBottom: 12,
    },

    // Now positioned behind content instead of taking layout space
    optionIllustration: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 110,
        height: 90,
        opacity: 0.9,
        zIndex: 0,
    },

    howItWorksCard: {
        backgroundColor: COLORS.infoBg,
        borderRadius: 20,
        padding: 18,
        marginTop: 18,
    },

    howItWorksHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    howItWorksBadge: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: "#2563EB",
        alignItems: "center",
        justifyContent: "center",
    },

    howItWorksTitle: {
        fontSize: 16,
        fontWeight: "800",
        color: COLORS.darkBlue,
    },

    howItWorksBody: {
        flexDirection: "row",
        marginTop: 14,
        alignItems: "center",
    },

    stepsList: {
        flex: 1,
    },

    stepRow: {
        flexDirection: "row",
        marginBottom: 8,
    },

    stepNumber: {
        fontSize: 13,
        fontWeight: "700",
        color: "#2563EB",
        width: 18,
    },

    stepText: {
        fontSize: 13,
        color: COLORS.blueText,
        flex: 1,
        lineHeight: 18,
    },

    mapIllustration: {
        width: 100,
        height: 100,
        marginLeft: 8,
    },
    ctaButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        borderRadius: 12,
        paddingVertical: 11,
        marginTop: "auto",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
        zIndex: 1,
    },
    ctaText: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 13,
    },
});