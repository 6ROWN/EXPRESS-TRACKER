import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpenseOutput from "../components/ExpensesOutput/ExpenseOutput";
import ExpenseContext from "../Context/ExpenseContext";

const RecentExpenses = () => {
	const { expenses } = useContext(ExpenseContext);

	const recentExpenses = expenses.filter((expense) => {
		const today = new Date();
		const _7daysAgo = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() - 7
		);

		return expense.date > _7daysAgo;
	});

	return (
		<>
			<ExpenseOutput
				expenses={recentExpenses}
				expensePeriod="Last 7 Days"
			/>
		</>
	);
};

export default RecentExpenses;

const styles = StyleSheet.create({});
