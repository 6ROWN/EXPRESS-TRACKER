import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import IconButton from "../components/UI/IconButton";
import Colors from "../constants/Utilities/Colors";
import Button from "../components/UI/Button";
import ExpenseContext from "../Context/ExpenseContext";

const ManageExpense = ({ navigation, route }) => {
	const { deleteExpenses } = useContext(ExpenseContext);

	const editedExpenseId = route.params?.expenseId;
	console.log(editedExpenseId);

	const isEditting = !!editedExpenseId;

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditting ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditting]);

	const deleteButton = () => {
		deleteExpenses(editedExpenseId);
		navigation.goBack();
	};

	const confirmHandler = () => {};

	const cancelHandler = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttons}>
				<Button
					title="Cancel"
					mode="flat"
					onPress={cancelHandler}
					style={styles.button}
				/>
				<Button
					title={isEditting ? "Update" : "Add"}
					onPress={confirmHandler}
					style={styles.button}
				/>
			</View>
			{isEditting && (
				<View style={styles.deleteContainer}>
					<IconButton
						name="trash"
						color={Colors.error}
						size={28}
						onPress={deleteButton}
					/>
				</View>
			)}
		</View>
	);
};

export default ManageExpense;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	buttons: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	button: { minWidth: 150, marginHorizontal: 10 },

	deleteContainer: {
		marginTop: 24,
		paddingTop: 12,
		borderTopWidth: 3,
		borderTopColor: Colors.primary200,
		alignItems: "center",
	},
});
