import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import Colors from "../../constants/Utilities/Colors";

const ExpenseOutput = ({ expensePeriod, expenses }) => {
	return (
		<View style={styles.container}>
			<ExpenseSummary expenses={expenses} periodName={expensePeriod} />
			{expenses.length > 0 ? (
				<ExpenseList expenses={expenses} />
			) : (
				<Text style={styles.infoText}>No expenses found!</Text>
			)}
		</View>
	);
};

export default ExpenseOutput;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		backgroundColor: Colors.primary600,
	},
	infoText: {
		fontSize: 16,
		marginTop: 32,
		textAlign: "center",
		color: Colors.primary100,
	},
});
