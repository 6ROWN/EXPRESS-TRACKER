import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
	return (
		<View>
			<FlatList
				keyExtractor={(item) => item.id}
				data={expenses}
				renderItem={({ item }) => <ExpenseItem item={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default ExpenseList;

const styles = StyleSheet.create({});
