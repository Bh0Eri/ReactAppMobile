import { StyleSheet } from "react-native";
import { theme } from "../../styles/global";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: theme.colors.background,
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: theme.colors.border,
        fontSize: 16,
        marginBottom: 20,
    }
})
