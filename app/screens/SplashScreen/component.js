import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import MainScreen from '../../components/layouts/MainScreen';

function Component() {
    return (
        <MainScreen style={styles.viewStyles}>
            <Text style={styles.textStyles}>The Fifth Faith</Text>
        </MainScreen>
    )
}

export default Component