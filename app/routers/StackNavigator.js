import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TheoryDetail from '../screens/TheoryDetail'
import TheoryVideo from '../screens/TheoryVideo'
import QuizDetail from '../screens/QuizDetail'
import Result from '../screens/Result'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

import DrawerNavigator from './drawerNavigator'

const AuthStack = createStackNavigator()
export const AuthStackScreen = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
)

const HomeStack = createStackNavigator()
export const HomeStackScreen = () => (
    <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="Home" component={DrawerNavigator} />
        <HomeStack.Screen name="TheoryDetail" component={TheoryDetail} />
        <HomeStack.Screen name="TheoryVideo" component={TheoryVideo} />
        <HomeStack.Screen name="QuizDetail" component={QuizDetail} />
        <HomeStack.Screen name="Result" component={Result} />
    </HomeStack.Navigator>
)