import {
    ScrollView,
    StyleSheet,
} from 'react-native';
import SupportAbout from './SupportAbout';
import SupportActionFooter from './SupportActionFooter';
import SupportEligibility from './SupportEligibility';
import SupportHelpCategories from './SupportHelpCategories';
import SupportHero from './SupportHero';
import SupportHighlights from './SupportHighlights';
import SupportListMenu from './SupportListMenu';
import SupportSatisfactionBanner from './SupportSatisfactionBanner';

export default function MilesAssistSupportView() {
    return (
        <ScrollView
            style={styles.screen}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
        >
            <SupportHero />
            <SupportHighlights />
            <SupportAbout />
            <SupportHelpCategories />
            <SupportEligibility />
            <SupportListMenu />
            <SupportSatisfactionBanner />
            <SupportActionFooter />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 80,
    },
});