import ACTIONS from "./ExpenseActions";

const expenseReducer = (state, action) => {
	switch (action.type) {
		//ADD
		case ACTIONS.ADD:
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		//EDIT
		case ACTIONS.EDIT:
			return {};
		//DELETE
		case "DELETE":
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};

		//DEFAULT
		default:
			return state;
	}
};

export default expenseReducer;
