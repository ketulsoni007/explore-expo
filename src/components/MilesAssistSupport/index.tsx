import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import HowToUseVideo from '../HowToUseVideo';
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
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ paddingHorizontal: 16 }}>
                <SupportHero />
                <SupportHighlights />
                <SupportAbout />
                <SupportHelpCategories />
                <SupportEligibility />
                <SupportListMenu />
                <SupportSatisfactionBanner />
            </View>
            <HowToUseVideo />
            <View style={{ paddingHorizontal: 16 }}>
                <SupportActionFooter />
            </View>
            <View style={{ paddingBottom: 40 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    content: {
        paddingBottom: 32,
    },
});