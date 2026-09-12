import { useLanguage } from '@/context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

const ServiceHeader = () => {
    const { t } = useLanguage();
    return (
        <View style={styles.card}>
            <Image
                source={require('@/assets/images/service-illustration.png')}
                resizeMode="contain"
                style={styles.illustration}
            />
            <View style={styles.textContent}>
                <View style={styles.headerWrapper}>
                    <Ionicons
                        name="shield-checkmark"
                        size={40}
                        color="#2F5CFF"
                        style={styles.shieldIcon}
                    />
                    <View>
                        <Text style={styles.title}>{t("We're here for you")}</Text>
                        <Text style={styles.subtitle}>
                            {t('All support services for your safe and smooth journey.')}
                        </Text>
                    </View>
                </View>
                <View style={styles.trustedRow}>
                    <Ionicons name="checkmark-circle" size={18} color="#1CA24E" />
                    <Text style={styles.trustedText}>{t('100% Trusted')}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        backgroundColor: '#EEF2FC',
        borderRadius: 20,
        minHeight: 168,
        overflow: 'hidden',
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems:'flex-start',
        gap:10
    },
    illustration: {
        position: 'absolute',
        right: -10,
        bottom: -26,
        width: '58%',
        height: '82%',
        zIndex: 0,
    },
    textContent: {
        zIndex: 1,
        maxWidth: '62%',
        paddingVertical: 22,
        paddingLeft: 20,
    },
    shieldIcon: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#0B1B3F',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 13,
        color: '#5B6376',
        lineHeight: 19,
        marginBottom: 18,
    },
    trustedRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    trustedText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#0B1B3F',
        marginLeft: 6,
    },
});

export default ServiceHeader;