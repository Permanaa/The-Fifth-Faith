import React from 'react'
import { Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import listStyles from '../../components/elements/ListItem/styles'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import MainScreen from '../../components/layouts/MainScreen'
import ListItem from '../../components/elements/ListItem'
import { AuthContext } from '../../routers/context'
import { useNavigation } from '@react-navigation/native'

function Component() {
    const navigation = useNavigation();
    const [ theory, setTheory ] = React.useState([])
    const [ userToken, setUserToken ] = React.useState('')
    const [ error, setError ] = React.useState(null)
    const { signOut } = React.useContext(AuthContext)

    React.useEffect(() => {
        _getTheory()
    })

    const _getTheory = async () => {
        setUserToken(await AsyncStorage.getItem('userToken'))

        Axios.get('http://3.92.245.121:8080/api/kiamat/all', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then( res => {
            setTheory(res.data.data)
        })
        .catch( err => {
            setError(err.response.status)
            if(error === 401){
                signOut()
            }
        })
    }

    return (
        <MainScreen style={[styles.viewStyles]}>
            <ScrollView style={{width:"95%"}}>
                <ListItem data={theory} type="Materi" screen="TheoryDetail"/>
                <TouchableOpacity style={[listStyles.container,{width: "95%"}]} onPress={() => navigation.navigate("TheoryVideo")}>
                    <Text style={listStyles.subtitle}>Materi 7</Text>
                    <Text style={listStyles.title}>Video Pembelajaran</Text>
                </TouchableOpacity>
            </ScrollView>
        </MainScreen>
    )
}

export default Component