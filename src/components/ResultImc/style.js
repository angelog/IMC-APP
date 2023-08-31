import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    message: {
        color: "#FF0043",
        fontSize: 18,
        fontWeight: "bold",
    },
    imc:{
        color: "#FF0043",
        fontSize: 48,
        fontWeight: "bold",
    },
    status: {
        color: "#FF0043",
        fontSize: 18,
        fontWeight: "bold",
    },
	shareText: {
		fontSize: 28,
		color: "white",
		fontWeight: "bold",
	},
	shareButton: {
		backgroundColor: "#1877f2",
		borderRadius:20,
		marginTop:20,
		paddingHorizontal:20,
	}
});

export default styles
