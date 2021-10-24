import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import NewPostScreen from './NewPostScreen'
import SignUpScreen from './SignUpScreen'


const Stack = createStackNavigator()

const screenOption = {
    headerShown: false,
}

const SignedInStack = () => (

    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={screenOption}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)



export default SignedInStack
