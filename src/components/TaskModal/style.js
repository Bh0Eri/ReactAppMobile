import { StyleSheet } from "react-native";
import { theme } from '../../styles/global';

export const styles = StyleSheet.create({

    modalBody: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 25,
        paddingTop: 50
    },

    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },

    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd'
    },

    btnSave: {
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },

    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    btnCancelar: {
        textAlign: 'center',
        marginTop: 20,
        color: '#f00'
    },
});
