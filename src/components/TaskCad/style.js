import { StyleSheet } from "react-native";
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        borderLeftWidth: 6,
        elevation: 2
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: theme.colors.textMain
    },
    desc: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.textSub
    },
    badge: {
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 5
    },
    date: {
        fontSize: 10,
        color: '#94a3b8',
        marginTop: 5
    },
    actions: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginLeft: 10
    },
    icon: { fontSize: 22 }
});