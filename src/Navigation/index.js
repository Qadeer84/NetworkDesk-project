import React from "react";
import { View, Text } from "react-native";
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
import AddYourServiceScreen from '../screen/AddYourServiceScreen/index'
import AboutServiceScreen from '../screen/AboutServiceScreen/index'
import AddProfilepicScreen from '../screen/AddProfilePicScreen/index'
import MainHomeScreen from '../screen/MainHomeScreen/index'
import SearchNetworkDeskcreen from '../screen/SearchNetworkDeskScreen/index'
import FoundNetworkDeskScreen from '../screen/FoundNetworkDeskScreen/index'
import MessageScreen from '../screen/MessageScreen/index'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { totalSize } from "react-native-dimension";
import { createDrawerNavigator } from "@react-navigation/drawer";
const MainStack = createNativeStackNavigator()
const AppStack = createNativeStackNavigator()
const BottomTabStack = createBottomTabNavigator()
const DrawerStack = createDrawerNavigator()

const BottomTabScreens = () => {
    const tabIconSize = totalSize(3.5)
    return (
        <BottomTabStack.Navigator
            screenOptions={{ tabBarShowLabel: false, headerShown: false }}
        >
            <BottomTabStack.Screen
                name="MainHomeScreen"
                component={MainHomeScreen}
                options={() => ({
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Icon name='home' type='feather' size={tabIconSize} color={color} focused={focused} />
                    },
                })}
            />

            <BottomTabStack.Screen
                name="SearchNetworkDeskcreen"
                component={SearchNetworkDeskcreen}
                options={() => ({
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Icon name='search' type='feather' size={tabIconSize} color={color} focused={focused} />
                    },
                })}
            />
            <BottomTabStack.Screen name="MessageScreen" component={MessageScreen} />
            <BottomTabStack.Screen name="AddProfilepicScreen" component={AddProfilepicScreen} />
        </BottomTabStack.Navigator>
    )
}

const DrawerStackScreens = () => {
    const tabIconSize = totalSize(3.5)
    return (
        <DrawerStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            {/* <DrawerStack.Screen /> */}
            <DrawerStack.Screen
             name="bottomTab" 
             component={BottomTabScreens}
             options={() => ({
                drawerLabel: "Home",
                drawerIcon: ({ color, size, focused }) => {
                    return <Icon name='home' type='feather' size={tabIconSize} color={color} focused={focused} />
                },
            })}
              />
            {/* <DrawerStack.Screen name="FoundNetworkDeskScreen" component={FoundNetworkDeskScreen} /> */}
        </DrawerStack.Navigator>
    )
}
const AppStackScreens = () => {
    return (
        <AppStack.Navigator
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="drawer" component={DrawerStackScreens} />
            {/* <AppStack.Screen name="bottomTab" component={BottomTabScreens} /> */}
            <AppStack.Screen name="FirstNetworkDeskScreen" component={FirstNetworkDeskScreen} />
            <AppStack.Screen name="SecondNetworkDeskScreen" component={SecondNetworkDeskScreen} />
            <AppStack.Screen name="LoginWithEmailScreen" component={LoginWithEmailScreen} />
            <AppStack.Screen name="LoginScreen" component={LoginScreen} />
            <AppStack.Screen name="RegisterScreen" component={RegisterScreen} />
            <AppStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            <AppStack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
            <AppStack.Screen name="PhoneVerifyScreen" component={PhoneVerifyScreen} />
            <AppStack.Screen name="HelloNextScreen" component={HelloNextScreen} />
            <AppStack.Screen name="BusinessNextScreen" component={BusinessNextScreen} />
            <AppStack.Screen name="AreaExpertiseScreen" component={AreaExpertiseScreen} />
            <AppStack.Screen name="AddServiceScreen" component={AddServiceScreen} />
            <AppStack.Screen name="AddYourServiceScreen" component={AddYourServiceScreen} />
            <AppStack.Screen name="AboutServiceScreen" component={AboutServiceScreen} />
             <AppStack.Screen name="AddProfilepicScreen" component={AddProfilepicScreen}/>
             <AppStack.Screen name="MainHomeScreen" component={MainHomeScreen}/> 
             <AppStack.Screen name="SearchNetworkDeskcreen" component={SearchNetworkDeskcreen}/> 
            <AppStack.Screen name="FoundNetworkDeskScreen" component={FoundNetworkDeskScreen} />
             <AppStack.Screen name="MessageScreen" component={MessageScreen}/> 
        </AppStack.Navigator>
    )
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <MainStack.Screen name="app" component={AppStackScreens} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation
