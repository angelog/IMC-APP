import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContent: {
        width: "100%",
        height: "100%",
        buttom:0,
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form: {
        width: "100%",
        height:"auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "black",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: "90%",
        backgroundColor: "#F6F6F6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
        borderRadius: 50,

    },
    formButton: {
        borderRadius:50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0046",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    formTextButton: {
        fontSize: 20,
        color: "#ffffff",
    },
    formError: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
        marginBottom: 10,
    }
});

export default styles
