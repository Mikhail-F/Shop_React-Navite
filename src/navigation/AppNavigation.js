import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import {createAppContainer} from "react-navigation";

const ListOfProducts = createStackNavigator({
        Main: MainScreen
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#25262B',
            headerTitle: 'Список товаров',
            headerTitleAlign: 'center'
        }
    })

export const AppNavigation = createAppContainer(ListOfProducts)