import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../constants/Utilities/Colors";
import getFormattedDate from "../../constants/Utilities/Date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ item }) => {
	const navigation = useNavigation();

	const expensePressHandler = () => {
		navigation.navigate("manageExpenses", {
			expenseId: item.id,
		});
	};

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={expensePressHandler}
		>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.textBase, styles.productText]}>
						{item.product}
					</Text>
					<Text style={styles.textBase}>
						{getFormattedDate(item.date)}
					</Text>
				</View>
				<View style={[styles.amountContainer]}>
					<Text style={styles.amountText}>$ {item.amount}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ExpenseItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary200,
		marginTop: 15,
		borderRadius: 8,
	},
	expenseItem: {
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		elevation: 4,
		shadowColor: Colors.primary500,
		shadowOffset: { height: 1, width: 1 },
		shadowRadius: 4,
		shadowOpacity: 0.25,
	},
	textBase: {
		color: Colors.primary600,
	},
	productText: {
		marginBottom: 8,
		fontWeight: "bold",
		fontSize: 16,
	},
	amountContainer: {
		paddingHorizontal: 4,
		paddingVertical: 12,
		backgroundColor: Colors.primary500,
		borderRadius: 4,
		minWidth: 80,
		justifyContent: "center",
		alignItems: "center",
	},
	amountText: {
		color: Colors.primary100,
		fontWeight: "bold",
	},
});
