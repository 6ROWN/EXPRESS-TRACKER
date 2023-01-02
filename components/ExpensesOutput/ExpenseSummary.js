import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Utilities/Colors";

const ExpenseSummary = ({ expenses, periodName }) => {
	const sumOfExpenses = expenses
		.reduce((total, expenses) => {
			return total + expenses.amount;
		}, 0)
		.toFixed(2);

	return (
		<View style={styles.container}>
			<Text style={styles.period}>{periodName}</Text>
			<Text style={styles.sum}> $ {sumOfExpenses}</Text>
		</View>
	);
};

export default ExpenseSummary;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: Colors.primary100,
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	period: {
		fontSize: 14,
		color: Colors.primary600,
		fontWeight: "bold",
	},
	sum: {
		fontWeight: "bold",
		color: Colors.primary600,
		fontWeight: "bold",
	},
});
