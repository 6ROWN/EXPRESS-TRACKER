import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Colors from "./constants/Utilities/Colors";
import IconButton from "./components/UI/IconButton";
import ExpenseState from "./Context/ExpenseState";

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<tab.Navigator
			screenOptions={({ navigation }) => ({
				tabBarInactiveTintColor: Colors.white,
				tabBarActiveTintColor: Colors.accent100,
				tabBarStyle: {
					backgroundColor: Colors.primary500,
				},
				headerStyle: {
					backgroundColor: Colors.primary500,
				},
				headerTintColor: Colors.white,
				headerRight: ({ tintColor }) => (
					<IconButton
						name="add"
						size={24}
						color={tintColor}
						onPress={() => navigation.navigate("manageExpenses")}
					/>
				),
				headerTitleAlign: "center",
			})}
		>
			<tab.Screen
				name="recentExpenses"
				component={RecentExpenses}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="history" size={24} color={color} />
					),
					tabBarLabel: "recent",
					headerTitle: "Recent Expenses",
				}}
			/>
			<tab.Screen
				name="allExpenses"
				component={AllExpenses}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="calendar" size={24} color={color} />
					),
					tabBarLabel: "Total",
					headerTitle: "Total Expenses",
				}}
			/>
		</tab.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<ExpenseState>
				<NavigationContainer>
					<stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: Colors.primary500,
							},
							headerTintColor: Colors.white,
							headerTitleAlign: "center",
						}}
					>
						<stack.Screen
							name="expenseOverview"
							component={TabNavigator}
							options={{ headerShown: false }}
						/>
						<stack.Screen
							name="manageExpenses"
							component={ManageExpense}
							options={{
								title: "MANAGE",
								presentation: "modal",
							}}
						/>
					</stack.Navigator>
				</NavigationContainer>
			</ExpenseState>
		</>
	);
}
