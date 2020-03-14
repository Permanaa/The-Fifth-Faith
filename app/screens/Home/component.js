import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import styles from './styles'
import MainScreen from '../../components/layouts/MainScreen'
import AsyncStorage from '@react-native-community/async-storage'
import { TabView, SceneMap } from 'react-native-tab-view';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter'
import Animated from 'react-native-reanimated'
import { AuthContext } from '../../routers/context'

import Theory from '../Theory'
import Excercise from '../Excercise'

const Component = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext)
    const [ userFullname, setUserFullname] = React.useState('')
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'theory', title: 'Teori' },
        { key: 'excercise', title: 'Quiz' }
    ]);

    const renderScene = SceneMap({
        theory: Theory,
        excercise: Excercise,
    });

    React.useEffect( () => {
        _getUserFullname()
    }, []);

    const _getUserFullname = async () => {
        setUserFullname(await AsyncStorage.getItem('userFullname'))
    }

    const _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
    
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const color = Animated.color(
                Animated.round(
                  Animated.interpolate(props.position, {
                    inputRange,
                    outputRange: inputRange.map(inputIndex =>
                      inputIndex === i ? 255 : 79
                    ),
                  })
                ),
                Animated.round(
                  Animated.interpolate(props.position, {
                    inputRange,
                    outputRange: inputRange.map(inputIndex =>
                      inputIndex === i ? 80 : 79
                    ),
                  })
                ),
                Animated.round(
                  Animated.interpolate(props.position, {
                    inputRange,
                    outputRange: inputRange.map(inputIndex =>
                      inputIndex === i ? 80 : 79
                    ),
                  })
                ),
              );
              
              let colorBg = Animated.color(
                255,
                229,
                229,
                Animated.round(
                  Animated.interpolate(props.position, {
                    inputRange,
                    outputRange: inputRange.map(inputIndex =>
                      inputIndex === i ? 1 : 0
                    ),
                  })
                ),
              );

              return (
                <TouchableOpacity
                  key={i}
                  style={styles.tabItem}
                  onPress={() => setIndex(i)}>
                  <Animated.Text style={[styles.tabTitle, { color, backgroundColor: colorBg }]}>{route.title}</Animated.Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
    };
    
    return (
        <MainScreen>
            <View style={styles.header}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image source={require('../../../assets/images/menu.png')} style={styles.menuImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logout} onPress={signOut}>
                      <Image source={require('../../../assets/images/log-out.png')} style={styles.logoutbtn} />
                    </TouchableOpacity>
                    <View style={styles.title}>
                        <Text>
                            <Text style={styles.greeting}>Halo,{'\n'}</Text>
                            <Text style={styles.username}>{userFullname}</Text>
                        </Text>
                    </View>
                </View>
            </View>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              renderTabBar={_renderTabBar}
              onIndexChange={setIndex}
              renderPager={props => (
                  <ViewPagerAdapter {...props} transition="curl" showPageIndicator />
              )}
            />
        </MainScreen>
    )
}

export default Component