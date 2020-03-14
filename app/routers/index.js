import * as React from 'react'
import {ToastAndroid} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'

import { AuthContext } from './context'
import SplashScreen from '../screens/SplashScreen'
import {
  AuthStackScreen,
  HomeStackScreen
} from './StackNavigator'

const RootStack = createStackNavigator()

function StackNavigator(props) {
  const [ isLoading, setIsLoading ] = React.useState(true)
  const [ userToken, setUserToken ] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: async (data) => {
        if(!data){
          ToastAndroid.show("Isi dengan benar", ToastAndroid.SHORT);
        }
        await AsyncStorage.setItem('userToken', data.token)
        await AsyncStorage.setItem('userFullname', data.data.fullname)
        setUserToken(data.token)
        setIsLoading(false)
      },
      signUp: () => {
        setIsLoading(false)
      },
      signOut: async () => {
        await AsyncStorage.removeItem('userToken')
        setUserToken(null)
        setIsLoading(false)
      }
    }
  }, [])

  React.useEffect(() => {
    setTimeout(async () => {
      setUserToken(await AsyncStorage.getItem('userToken'))
      setIsLoading(false)
    }, 2000)
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          <RootStack.Navigator headerMode="none">
            {
              userToken ? (
                  <RootStack.Screen name='App' component={HomeStackScreen} />
              ) : (
                <RootStack.Screen name='Auth' component={AuthStackScreen} />
              )
            }
          </RootStack.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default StackNavigator