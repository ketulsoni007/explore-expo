import { Ionicons } from "@expo/vector-icons";
import { useCallback, useMemo, useState } from "react";
import {
    Pressable,
    RefreshControl,
    SectionList,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Animated, {
    FadeIn,
    FadeOut,
    LinearTransition,
} from "react-native-reanimated";

type NotificationType =
    | "booking"
    | "payment"
    | "promo"
    | "sos"
    | "reward"
    | "system";

type NotificationItem = {
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    time: string;
    date: string;
    read: boolean;
};



function today() {
    return new Date().toDateString();
}
function yesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toDateString();
}
function daysAgo(n: number) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toDateString();
}

const BASE_DATA: NotificationItem[] = [
    {
        id: "1",
        type: "booking",
        title: "Booking Confirmed",
        message: "Your stay at Hotel Mile Residency is confirmed for tomorrow.",
        time: "5m ago",
        date: today(),
        read: false,
    },
    {
        id: "2",
        type: "payment",
        title: "Payment Successful",
        message: "₹2,450 was deducted for your recent booking.",
        time: "1h ago",
        date: today(),
        read: false,
    },
    {
        id: "3",
        type: "sos",
        title: "SOS Alert Resolved",
        message: "Your emergency request has been marked as resolved.",
        time: "3h ago",
        date: today(),
        read: true,
    },
    {
        id: "4",
        type: "reward",
        title: "50 Points Earned",
        message: "You earned reward points for your last trip.",
        time: "Yesterday, 8:20 PM",
        date: yesterday(),
        read: true,
    },
    {
        id: "5",
        type: "promo",
        title: "Weekend Offer",
        message: "Flat 20% off on Free Stay bookings this weekend only.",
        time: "Yesterday, 11:00 AM",
        date: yesterday(),
        read: true,
    },
    {
        id: "6",
        type: "system",
        title: "App Updated",
        message: "We improved performance and fixed minor bugs.",
        time: "2 days ago",
        date: daysAgo(2),
        read: true,
    },
];



const REFRESH_POOL: NotificationItem[] = [
    {
        id: "7",
        type: "booking",
        title: "Check-in Reminder",
        message: "Your check-in at Hotel Mile Residency is in 2 hours.",
        time: "Just now",
        date: today(),
        read: false,
    },
    {
        id: "8",
        type: "promo",
        title: "Flash Sale",
        message: "Extra 10% off on Free Food orders, next 1 hour only.",
        time: "Just now",
        date: today(),
        read: false,
    },
];



const TYPE_META: Record<
    NotificationType,
    { icon: keyof typeof Ionicons.glyphMap; fg: string }
> = {
    booking: { icon: "calendar", fg: "#3366FF" },
    payment: { icon: "wallet", fg: "#1FAA59" },
    promo: { icon: "pricetag", fg: "#FF9800" },
    sos: { icon: "alert-circle", fg: "#FF3B30" },
    reward: { icon: "star", fg: "#F5A623" },
    system: { icon: "information-circle", fg: "#6B7280" },
};

function hexToRgba(hex: string, alpha: number) {
    const parsed = hex.replace("#", "");
    const bigint = parseInt(parsed, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}



function sectionLabel(dateStr: string) {
    if (dateStr === today()) return "Today";
    if (dateStr === yesterday()) return "Yesterday";
    return "Earlier";
}

function buildSections(data: NotificationItem[]) {
    const order = ["Today", "Yesterday", "Earlier"];
    const grouped: Record<string, NotificationItem[]> = {};

    data.forEach((item) => {
        const label = sectionLabel(item.date);
        if (!grouped[label]) grouped[label] = [];
        grouped[label].push(item);
    });

    return order
        .filter((label) => grouped[label]?.length)
        .map((label) => ({ title: label, data: grouped[label] }));
}



const NotificationView = () => {
    const [notifications, setNotifications] = useState<NotificationItem[]>(BASE_DATA);
    const [refreshing, setRefreshing] = useState(false);

    const sections = useMemo(() => buildSections(notifications), [notifications]);
    const unreadCount = notifications.filter((n) => !n.read).length;

    const markAllRead = useCallback(() => {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    }, []);

    const markOneRead = useCallback((id: string) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    }, []);

    const deleteOne = useCallback((id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);




    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setNotifications((prev) => {
                const existingIds = new Set(prev.map((n) => n.id));
                const missingBase = BASE_DATA.filter((n) => !existingIds.has(n.id));
                const freshExtras = REFRESH_POOL.filter((n) => !existingIds.has(n.id));
                return [...freshExtras, ...missingBase, ...prev];
            });
            setRefreshing(false);
        }, 1200);
    }, []);

    const renderRightActions = (id: string) => (
        <Pressable style={styles.deleteAction} onPress={() => deleteOne(id)}>
            <Ionicons name="trash-outline" size={20} color="#fff" />
        </Pressable>
    );

    const renderItem = ({ item }: { item: NotificationItem }) => {
        const meta = TYPE_META[item.type];
        const cardBg = hexToRgba(meta.fg, item.read ? 0.05 : 0.1);

        return (
            <Swipeable
                renderRightActions={() => renderRightActions(item.id)}
                overshootRight={false}
            >
                <Animated.View
                    entering={FadeIn}
                    exiting={FadeOut}
                    layout={LinearTransition.springify()}
                    style={styles.cardWrap}
                >
                    <Pressable
                        onPress={() => markOneRead(item.id)}
                        style={({ pressed }) => [
                            styles.card,
                            { backgroundColor: cardBg },
                            pressed && { opacity: 0.85 },
                        ]}
                    >
                        {!item.read && <View style={styles.unreadDot} />}

                        <View style={[styles.iconWrap, { backgroundColor: hexToRgba(meta.fg, 0.16) }]}>
                            <Ionicons name={meta.icon} size={20} color={meta.fg} />
                        </View>

                        <View style={styles.textWrap}>
                            <View style={styles.rowBetween}>
                                <Text
                                    style={[
                                        styles.title,
                                        !item.read && styles.titleUnread,
                                    ]}
                                    numberOfLines={1}
                                >
                                    {item.title}
                                </Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                            <Text style={styles.message} numberOfLines={2}>
                                {item.message}
                            </Text>
                        </View>
                    </Pressable>
                </Animated.View>
            </Swipeable>
        );
    };

    return (
        <View style={styles.container}>
            {sections.length === 0 ? (
                <EmptyState refreshing={refreshing} onRefresh={onRefresh} />
            ) : (
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ListFooterComponent={<View style={{paddingBottom:40}} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionHeader}>{title}</Text>
                            {title === "Today" && unreadCount > 0 && (
                                <Pressable onPress={markAllRead} hitSlop={8}>
                                    <Text style={styles.markAllText}>Mark all read</Text>
                                </Pressable>
                            )}
                        </View>
                    )}
                    stickySectionHeadersEnabled={false}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor="#3366FF"
                            colors={["#3366FF"]}
                        />
                    }
                />
            )}
        </View>
    );
};



const EmptyState = ({
    refreshing,
    onRefresh,
}: {
    refreshing: boolean;
    onRefresh: () => void;
}) => (
    <SectionList
        sections={[]}
        keyExtractor={() => "empty"}
        renderItem={() => null}
        contentContainerStyle={styles.emptyListContent}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor="#3366FF"
                colors={["#3366FF"]}
            />
        }
        ListEmptyComponent={
            <View style={styles.emptyWrap}>
                <View style={styles.emptyIconCircle}>
                    <Ionicons name="notifications-off-outline" size={32} color="#9CA3AF" />
                </View>
                <Text style={styles.emptyTitle}>No notifications yet</Text>
                <Text style={styles.emptySubtitle}>
                    Pull down to refresh, or check back later.
                </Text>
            </View>
        }
    />
);

export default NotificationView;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    listContent: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 24,
    },
    emptyListContent: {
        flexGrow: 1,
    },

    sectionHeaderRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 18,
        paddingBottom: 8,
    },
    sectionHeader: {
        fontSize: 13,
        fontWeight: "600",
        color: "#8A8F98",
        textTransform: "uppercase",
        letterSpacing: 0.3,
    },
    markAllText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#3366FF",
    },

    cardWrap: {
        marginBottom: 10,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 14,
    },
    unreadDot: {
        position: "absolute",
        left: 6,
        top: 16,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#3366FF",
    },
    iconWrap: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },
    textWrap: {
        flex: 1,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: "#333",
        flexShrink: 1,
        marginRight: 8,
    },
    titleUnread: {
        fontWeight: "700",
        color: "#000",
    },
    time: {
        fontSize: 11,
        color: "#9CA3AF",
    },
    message: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 2,
        lineHeight: 18,
    },

    deleteAction: {
        backgroundColor: "#FF3B30",
        justifyContent: "center",
        alignItems: "center",
        width: 64,
        borderRadius: 14,
        marginBottom: 10,
    },

    emptyWrap: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    emptyIconCircle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#F3F4F6",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111",
        marginBottom: 4,
    },
    emptySubtitle: {
        fontSize: 13,
        color: "#9CA3AF",
        textAlign: "center",
    },
});