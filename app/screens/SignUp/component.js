import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import Axios from 'axios'
import MainScreen from '../../components/layouts/MainScreen'
import { AuthContext } from '../../routers/context'

function Component(props) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [fullname, setFullname] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const {navigate} = props.navigation
    const { signUp } = React.useContext(AuthContext)

    const _signUp = async () => {
        setIsLoading(true)

        Axios.post('http://3.92.245.121:8080/api/users/register', {
            fullname,
            username,
            email,
            password
        })
        .then(res => {
            signUp()
            navigate('SignIn')
            setIsLoading(false)
        })
        .catch(err => {
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
                        <Text style={styles.title}>Daftar</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Nama</Text>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.textInput}
                                    value={fullname}
                                    onChangeText={text => setFullname(text)}
                                />
                            </View>
                            <Text style={styles.label}>Username</Text>
                            <View style={styles.input}>
                                <TextInput
                                    style={styles.textInput}
                                    value={username}
                                    onChangeText={text => setUsername(text)}
                                />
                            </View>
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
                            <TouchableOpacity style={styles.btn} onPress={_signUp}>
                                <Text style={styles.textbtn}>Daftar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate('SignIn')}>
                                <Text>
                                    <Text style={styles.other}>Sudah punya akun? </Text>
                                    <Text style={[styles.other, {color: '#FF5050'}]}>Masuk</Text>
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