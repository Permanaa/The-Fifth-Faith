import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import styles from './styles'
import Axios from 'axios'
import MainScreen from '../../components/layouts/MainScreen'
import { AuthContext } from '../../routers/context'

const Component = (props) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {navigate} = props.navigation
    const { signIn } = React.useContext(AuthContext)

    const _signIn = () => {
        setIsLoading(true)

        Axios.post('http://3.92.245.121:8080/api/users/login', {
            email,
            password
        })
        .then(res => {
            signIn(res.data)
            setIsLoading(false)
        })
        .catch(err => {
            ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
            setIsLoading(false)                    
        })
    }

    return (
        isLoading ? (
            <MainScreen style={styles.viewStyles}>
                <Text style={[styles.label, styles.container]}>Loading...</Text>
            </MainScreen>
        ) : (
            <MainScreen style={styles.viewStyles}>
                <View style={styles.container}>
                    <ScrollView>
                        <Text style={styles.title}>Masuk</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.textInput}
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                />
                            </View>
                            <Text style={styles.label}>Kata sandi</Text>
                            <View style={styles.input}>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.textInput}
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={_signIn}>
                                <Text style={styles.textbtn}>Masuk</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('SignUp')}>
                                <Text>
                                    <Text style={styles.other}>Belum punya akun? </Text>
                                    <Text style={[styles.other, {color: '#FF5050'}]}>Daftar</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </MainScreen>
        )
    )
}

export default Component