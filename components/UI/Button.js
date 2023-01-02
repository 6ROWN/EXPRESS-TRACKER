import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/Utilities/Colors";

const Button = ({ title, mode, onPress, style }) => {
	return (
		<View style={style}>
			<TouchableOpacity
				style={[styles.button, mode === "flat" && styles.flat]}
				onPress={onPress}
			>
				<Text
					style={[
						styles.buttonText,
						mode === "flat" && styles.flatText,
					]}
				>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		padding: 15,
		alignItems: "center",
		backgroundColor: Colors.primary500,
		borderRadius: 6,
	},
	flat: { backgroundColor: Colors.primary200 },
	buttonText: {
		color: Colors.white,
		fontSize: 15,
		fontWeight: "bold",
	},
	flatText: { color: Colors.primary500 },
});
