import React, { useReducer } from "react";
import ExpenseContext from "./ExpenseContext";
import expenseReducer from "./expenseReducer";
import ACTIONS from "./ExpenseActions";
import DummyExpenses from "../constants/DummyData";

const initalState = {
	expenses: DummyExpenses,
};

const ExpenseState = ({ children }) => {
	const [state, dispatch] = useReducer(expenseReducer, initalState);

	const addExpenses = (expenses) => {
		dispatch({ type: ACTIONS.ADD, payload: expenses });
	};

	const editExpenses = (expenses) => {
		dispatch({ type: ACTIONS.EDIT, payload: expenses });
	};

	const deleteExpenses = (id) => {
		dispatch({ type: "DELETE", payload: id });
	};

	return (
		<ExpenseContext.Provider
			value={{
				expenses: state.expenses,
				addExpenses,
				editExpenses,
				deleteExpenses,
			}}
		>
			{children}
		</ExpenseContext.Provider>
	);
};

export default ExpenseState;
