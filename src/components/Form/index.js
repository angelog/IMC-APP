import React, { useState } from "react";
import { View, Text, TextInput, Vibration, TouchableOpacity } from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form() {
	const [height, setHeight] = useState(null);
	const [weight, setWeight] = useState(null);
	const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
	const [imc, setImc] = useState(null);
	const [textButton, setTextButton] = useState("Calcular");
	const [status, setStatus] = useState(null);
	const [erroMessage, setErroMessage] = useState(null);

	function imcCalculator() {
		var resultImc = (weight / (height * height)).toFixed(2);
		setImc(resultImc);

		if (resultImc < 17) {
			setStatus("Status: Muito abaixo do peso");
		} else if (resultImc < 18.5) {
			setStatus("Status: Abaixo do peso");
		} else if (resultImc < 25) {
			setStatus("Status: Peso normal");
		} else if (resultImc < 30) {
			setStatus("Status: Acima do peso");
		} else if (resultImc < 35) {
			setStatus("Status: Obesidade I");
		} else if (resultImc < 40) {
			setStatus("Status: Obesidade II (severa)");
		} else {
			setStatus("Status: Obesidade III (mórbida)");
		}
	}

	function validationInputs() {
		if (imc == null) {
			setErroMessage("* Campo Obrigatorio *");
		}
	}

	function validationImc() {
		if (weight != null && height != null) {
			imcCalculator();
			setHeight(null);
			setWeight(null);
			setErroMessage(null);
			setMessageImc("Seu IMC é:");
			setTextButton("Calcular Novamente");
			return;
		}
		setImc(null);
		validationInputs();
		setTextButton("Calcular");
		setMessageImc("Preencha o peso e altura");
		setStatus(null);
	}
	return (
		<View style={styles.formContent}>
			<View style={styles.form}>
				<Text style={styles.formLabel}>Altura</Text>
				<TextInput
					style={styles.formInput}
					onChangeText={setHeight}
					value={height}
					placeholder="Ex: 1.65"
					keyboardType="numeric"
				></TextInput>
				<Text style={styles.formError}>{erroMessage}</Text>
				<Text style={styles.formLabel}>Peso</Text>
				<TextInput
					style={styles.formInput}
					onChangeText={setWeight}
					value={weight}
					placeholder="Ex: 60.200"
					keyboardType="numeric"
				></TextInput>
				<Text style={styles.formError}>{erroMessage}</Text>
				<TouchableOpacity
					style={styles.formButton}
					onPress={() => validationImc()}
				>
					<Text style={styles.formTextButton}>{textButton}</Text>
				</TouchableOpacity>
			</View>
			<ResultImc
				resultImc={imc}
				resultMessage={messageImc}
				resultStatus={status}
			/>
		</View>
	);
}
