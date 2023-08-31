import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {

	const onShare = async () => {
		const result = await Share.share({
			message: ' Meu Imc é: ' + props.resultImc,
		});
	};

    return (
        <View style={styles.resultImc}>
            <Text style={styles.message}>{props.resultMessage}</Text>
            <Text style={styles.imc}>{props.resultImc}</Text>
            <Text style={styles.status}>{props.resultStatus}</Text>
			<View>
				{props.resultImc != null ?
					<TouchableOpacity style={styles.shareButton}
					onPress={onShare}
					>
						<Text style={styles.shareText}>Share</Text>
					</TouchableOpacity>
					: <View/>
				}
			</View>
        </View>
    )
}
