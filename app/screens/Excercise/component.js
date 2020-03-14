import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import MainScreen from '../../components/layouts/MainScreen'
import ListItem from '../../components/elements/ListItem'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

function Component() {
    const [ excercise, setExcercise ] = React.useState([])
    const [ userToken, setUserToken ] = React.useState('')
    const [ error, setError ] = React.useState(null)

    React.useEffect(() => {
        _getTheory()
    })

    const _getTheory = async () => {
        setUserToken(await AsyncStorage.getItem('userToken'))

        Axios.get('http://3.92.245.121:8080/api/quiz/all', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then( res => {
            setExcercise(res.data.data)
        })
        .catch( err => {
            setError(err.response.status)
        })
    }    

    return (
        <MainScreen style={styles.viewStyles}>
            <ScrollView>
                <ListItem data={excercise} type="quiz" screen="QuizDetail"/>
            </ScrollView>
        </MainScreen>
    )
}

export default Component