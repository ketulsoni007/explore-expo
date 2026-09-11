import PickupPoint from '@/components/search/search-result/PickupPoint';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';
import { useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RouteResult from './RouteResult';

const SearchResultView = () => {
    const params = useLocalSearchParams();
    const initialIsHotel = useMemo(() => params?.category === 'hotel', [params?.category]);

    useFocusEffect(
        useCallback(() => {
            const message = initialIsHotel
                ? "Aapke route mein 5 hotel mil rahe hain"
                : "Aapke route mein 5 restaurant mil rahe hain";

            Speech.speak(message, {
                language: "hi-IN",
                pitch: 0,
                rate: 1,
            });

            return () => {
                Speech.stop();
            };
        }, [initialIsHotel])
    );

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
        >
            <PickupPoint isHotel={initialIsHotel} pickupLocation="Ahmedabad, Gujarat" dropLocation='Nadiad, Gujarat' />
            <RouteResult isHotel={initialIsHotel} />
            <View style={{ paddingBottom: 80 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16
    },
    scrollContent: {
        paddingTop: 16,
    },
})

export default SearchResultView;