import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { 
    createDrawerNavigator
} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

import Home from '../screens/Home'
import About from '../screens/About'

const DrawerNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
)

export default DrawerNavigator