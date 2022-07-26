import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstNetworkDeskScreen from "../screen/FirstNetworkDeskScreen";
const Stack = createNativeStackNavigator()
const Navigation = () => {
    return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}> 
    <Stack.Screen name="FirstNetworkDeskScreen" component={FirstNetworkDeskScreen} /> 
    </Stack.Navigator>  
    </NavigationContainer>
    )
}
export default Navigation