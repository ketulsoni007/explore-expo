import { Octicons } from '@expo/vector-icons'; // Changed icon set to get a better match
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';

const NARROW_BREAKPOINT = 400;

const ServiceKnowMoreTagLine = () => {
    const { width } = useWindowDimensions();
    const isNarrow = width < NARROW_BREAKPOINT;

    return (
        <View
            style={[styles.card, isNarrow ? styles.cardColumn : styles.cardRow]}
        >
            <View style={styles.topRow}>
                {/* Replaced shield with the matching green verified/star badge icon */}
                <Octicons name="verified" size={26} color="#10B981" />

                <View style={styles.textContent}>
                    <Text style={styles.title}>100% Free for eligible Miles Assist drivers</Text>
                    <Text style={styles.subtitle}>
                        Only verified partners on your route
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={[styles.button, isNarrow && styles.buttonFullWidth]}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Know More</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F2FAF5', // Light green background from mockup
        borderRadius: 18,
        paddingVertical: 16,
        // Increased horizontal padding slightly to account for removing the icon circle
        paddingHorizontal: 18
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardColumn: {
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    textContent: {
        flex: 1,
        marginLeft: 14, // Moved gap to textContent
        marginRight: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: '800',
        color: '#111827', // Darker text for title
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        color: '#6B7280', // Gray for subtitle
        lineHeight: 17,
    },
    button: {
        // Changed to transparent with a border as in the mockup
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#10B981', // Green border
        borderRadius: 12,
        paddingVertical: 12, // Reduced padding slightly to make it sleeker
        paddingHorizontal: 18,
        marginLeft: 12,
        minWidth: 100, // Ensure a consistent minimum width
        alignItems: 'center',
    },
    buttonFullWidth: {
        marginLeft: 0,
        marginTop: 16, // slightly more gap when stacked
        alignItems: 'center',
    },
    buttonText: {
        color: '#10B981', // Green text on the transparent button
        fontSize: 13,
        fontWeight: '700',
    },
});

export default ServiceKnowMoreTagLine;