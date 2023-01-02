import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpenseOutput from "../components/ExpensesOutput/ExpenseOutput";
import ExpenseContext from "../Context/ExpenseContext";

const AllExpenses = () => {
	const { expenses } = useContext(ExpenseContext);

	return (
		<>
			<ExpenseOutput expenses={expenses} expensePeriod="Total" />
		</>
	);
};

export default AllExpenses;

const styles = StyleSheet.create({});
