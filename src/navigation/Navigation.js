import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistroFaenas from "../screens/RegistroFaenaScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
//Aquí se configuran las rutas de la aplicación
export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RegistroFaena" component={RegistroFaenas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
