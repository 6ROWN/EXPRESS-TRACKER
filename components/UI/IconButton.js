import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, size, color, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.iconContainer}>
				<Ionicons name={name} size={size} color={color} />
			</View>
		</TouchableOpacity>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	iconContainer: {
		padding: 10,
		marginHorizontal: 10,
	},
});
