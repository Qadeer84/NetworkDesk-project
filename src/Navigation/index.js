import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstNetworkDeskScreen from '../screen/FirstNetworkDeskScreen/index'
import SecondNetworkDeskScreen from '../screen/SecondNetworkDeskScreen/index'
import LoginWithEmailScreen from "../screen/LoginWithEmailScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen/index";
import ResetPasswordScreen from '../screen/ResetPasswordScreen'
import VerifyCodeScreen from '../screen/PhoneVerifyScreen/index'
import PhoneVerifyScreen from "../screen/PhoneVerifyScreen/index";
import HelloNextScreen from '../screen/HelloNextScreen/index'
import BusinessNextScreen from '../screen/BusinessNextScreen/index'
import AreaExpertiseScreen from '../screen/AreaExpertiseScreen/index'
import AddServiceScreen from '../screen/AddServiceScreen'
import AddYourServiceScreen from'../screen/AddYourServiceScreen/index'
import AboutServiceScreen from '../screen/AboutServiceScreen/index'
import AddProfilepicScreen from '../screen/AddProfilePicScreen/index'
import MainHomeScreen from '../screen/MainHomeScreen/index'
import SearchNetworkDeskcreen from '../screen/SearchNetworkDeskScreen/index'
import FoundNetworkDeskScreen from '../screen/FoundNetworkDeskScreen/index'
import MessageScreen from '../screen/MessageScreen/index'
const Stack = createNativeStackNavigator()
const Navigation = () => {
    return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="FirstNetworkDeskScreen" component={FirstNetworkDeskScreen}/>
            <Stack.Screen name="SecondNetworkDeskScreen" component={SecondNetworkDeskScreen}/>
            <Stack.Screen name="LoginWithEmailScreen" component={LoginWithEmailScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>
            <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen}/>
            <Stack.Screen name="PhoneVerifyScreen" component={PhoneVerifyScreen}/>
            
            <Stack.Screen name="HelloNextScreen" component={HelloNextScreen}/>
            <Stack.Screen name="BusinessNextScreen" component={BusinessNextScreen}/>
            <Stack.Screen name="AreaExpertiseScreen" component={AreaExpertiseScreen}/>
            <Stack.Screen name="AddServiceScreen" component={AddServiceScreen}/>
            <Stack.Screen name="AddYourServiceScreen" component={AddYourServiceScreen}/>
            <Stack.Screen name="AboutServiceScreen" component={AboutServiceScreen}/>
            <Stack.Screen name="AddProfilepicScreen" component={AddProfilepicScreen}/>
            <Stack.Screen name="MainHomeScreen" component={MainHomeScreen}/>
            <Stack.Screen name="SearchNetworkDeskcreen" component={SearchNetworkDeskcreen}/>
            <Stack.Screen name="FoundNetworkDeskScreen" component={FoundNetworkDeskScreen}/>
            <Stack.Screen name="MessageScreen" component={MessageScreen}/>
        </Stack.Navigator>
    </NavigationContainer>

    )
}
export default Navigation
