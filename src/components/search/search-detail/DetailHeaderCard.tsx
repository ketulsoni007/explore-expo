import { useLanguage } from "@/context/LanguageContext";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type DetailHeaderCardProps = {
    isHotel: boolean;
    name?: string;
    rating?: number;
    reviewCount?: number;
    isVerified?: boolean;
    isOpen?: boolean;
    address?: string;
    distanceFromRoute?: string;
};

const HOTEL_THEME = {
    primary: "#2563EB",
    primaryBg: "#EFF3FF",
};

const RESTAURANT_THEME = {
    primary: "#EA580C",
    primaryBg: "#FFF3EC",
};

const HOTEL_FEATURES = [
    { icon: "bed-outline" as const, title: "100% Free", subtitle: "For eligible drivers" },
    { icon: "time-outline" as const, title: "24/7 Available", subtitle: "Open all day" },
    { icon: "person-outline" as const, title: "Single & Family", subtitle: "Both allowed" },
    { icon: "shield-checkmark" as const, title: "Safe & Secure", subtitle: "Verified stay" },
];

const RESTAURANT_FEATURES = [
    { icon: "restaurant-outline" as const, title: "100% Free", subtitle: "For eligible drivers" },
    { icon: "time-outline" as const, title: "24/7 Available", subtitle: "Open all day" },
    { icon: "people-outline" as const, title: "Family Friendly", subtitle: "All are welcome" },
    { icon: "shield-checkmark" as const, title: "Hygienic", subtitle: "Clean & safe" },
];

const DetailHeaderCard = ({
    isHotel,
    name = isHotel ? "Highway Comfort Inn" : "Shree Krishna Dhaba",
    rating = isHotel ? 4.5 : 4.6,
    reviewCount = isHotel ? 98 : 125,
    isVerified = true,
    isOpen = true,
    address = isHotel ? "NH 48, Anand, Gujarat" : "North Highway, Nadiad, Gujarat",
    distanceFromRoute = isHotel ? "5.1 km" : "2.4 km",
}: DetailHeaderCardProps) => {
    const { t } = useLanguage();
    const theme = isHotel ? HOTEL_THEME : RESTAURANT_THEME;
    const features = isHotel ? HOTEL_FEATURES : RESTAURANT_FEATURES;

    return (
        <View style={styles.container}>
            {/* Name + Open status */}
            <View style={styles.titleRow}>
                <Text style={styles.name}>{name}</Text>
                {isOpen && (
                    <View style={styles.openRow}>
                        <View style={styles.openDot} />
                        <Text style={styles.openText}>{t('Open')}</Text>
                    </View>
                )}
            </View>

             <View style={[styles.driverBadge, { backgroundColor: isHotel ? theme.primaryBg : RESTAURANT_THEME.primaryBg }]}>
                <Ionicons name="people" size={14} color={theme.primary} />
                <Text style={[styles.driverBadgeText, { color: theme.primary }]}>
                    {t('100+ Miles assist drivers visited here')}
                </Text>
            </View>

            {/* Rating + Verified */}
            <View style={styles.metaRow}>
                <Ionicons name="star" size={16} color={theme.primary} />
                <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
                <Text style={styles.reviewText}>({reviewCount} {t('reviews')})</Text>

                <View style={styles.metaDivider} />

                {isVerified && (
                    <View style={styles.verifiedRow}>
                        <Ionicons name="shield-checkmark" size={16} color={theme.primary} />
                        <Text style={[styles.verifiedText, { color: theme.primary }]}>{t('Verified Partner')}</Text>
                    </View>
                )}
            </View>

           

            {/* Address + distance */}
            <View style={styles.addressRow}>
                <Ionicons name="location-outline" size={16} color={theme.primary} style={{ marginTop: 1 }} />
                <Text style={styles.addressText} numberOfLines={1}>
                    {address}
                </Text>
                <Text style={styles.distanceText}>{distanceFromRoute} {t('from your route')}</Text>
            </View>

            <View style={styles.hairline} />

            {/* Feature icons row */}
            <View style={styles.featuresRow}>
                {features.map((feature) => (
                    <View key={feature.title} style={styles.featureItem}>
                        <View style={[styles.featureIconCircle, { backgroundColor: theme.primaryBg }]}>
                            <Ionicons name={feature.icon} size={20} color={theme.primary} />
                        </View>
                        <Text style={styles.featureTitle}>{t(feature.title)}</Text>
                        <Text style={styles.featureSubtitle}>{t(feature.subtitle)}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default DetailHeaderCard;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 10
    },

    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    name: {
        fontSize: 24,
        fontWeight: "800",
        color: "#0F172A",
        flex: 1,
        marginRight: 8,
    },

    openRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    openDot: {
        width: 7,
        height: 7,
        borderRadius: 3.5,
        backgroundColor: "#16A34A",
    },

    openText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#16A34A",
    },

    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        gap: 5,
    },

    ratingText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#0F172A",
    },

    reviewText: {
        fontSize: 13,
        color: "#6B7280",
        marginRight: 4,
    },

    metaDivider: {
        width: 1,
        height: 14,
        backgroundColor: "#E5E7EB",
        marginHorizontal: 6,
    },

    verifiedRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    verifiedText: {
        fontSize: 13,
        fontWeight: "700",
    },

    addressRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 12,
    },

    addressText: {
        fontSize: 13.5,
        color: "#334155",
        flex: 1,
        marginLeft: 6,
    },

    distanceText: {
        fontSize: 12.5,
        color: "#6B7280",
        marginLeft: 8,
    },

    hairline: {
        height: 1,
        backgroundColor: "#E5E7EB",
        marginTop: 14,
    },

    featuresRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18,
        marginBottom: 8,
    },

    featureItem: {
        alignItems: "center",
        flex: 1,
    },

    featureIconCircle: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
    },

    featureTitle: {
        fontSize: 12.5,
        fontWeight: "700",
        color: "#0F172A",
        textAlign: "center",
    },

    featureSubtitle: {
        fontSize: 10.5,
        color: "#9CA3AF",
        textAlign: "center",
        marginTop: 2,
    },

    driverBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 10,
        width:'87%'
    },

    driverBadgeText: {
        fontSize: 12.5,
        fontWeight: "700",
    },
});