import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, Dimensions } from 'react-native'
import styles from './styles'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import MainScreen from '../../components/layouts/MainScreen'

function Component({route, navigation}) {
    const { data } = route.params
    const [ index, setIndex ] = React.useState(0)
    const [ answer, setAnswer ] = React.useState([''])
    const [ active, setActive ] = React.useState('')
    const [ error, setError ] = React.useState(null)
    const [ isLoading, setIsLoading ] = React.useState(false)
    const windowWidth = Dimensions.get('window').width;

    const _cancelQuiz = () => {
        Alert.alert(
            'Akhiri quiz',
            'Yakin ingin mengakhiri quiz ini ?',
            [
              {text: 'Cancel'},
              {text: 'OK', onPress: () => navigation.goBack()},
            ],
            {cancelable: false},
        );
    }

    const _nextPage = async () => {
        if(index === data.question.length - 1){
            setAnswer([...answer, active])
            _checkAnswer()
        } else {
            if(answer[index + 1] === undefined){
                setActive('')
            } else {
                setActive(answer[index + 1])
            }
            let newValue = [...answer]
            newValue[index] = active
            setAnswer(newValue)
            setIndex(index + 1)
        }
    }

    const _previousPage = () => {
        setIndex(index - 1)
        setActive(answer[index - 1])
    }

    const _getAnswerValue = (value) => {
        let newValue = [...answer]
        newValue[index] = value
        setActive(value)
        setAnswer(newValue)
    }

    const _answerKey = () => {
        let key = []

        data.question.map(data => {
            key.push(data.answer)
        })

        return key
    }

    const _checkAnswer = async () => {
        setIsLoading(true)

        const userToken = await AsyncStorage.getItem("userToken")
        const id = data._id
        const answerKey = _answerKey()

        Axios.post(`http://3.92.245.121:8080/api/quiz/post/quiz?id=${id}`, { answer: answer }, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        .then( res => {
            navigation.replace("Result", {
                result: res.data.data,
                answerKey,
                questions: data.question
            })
            setIsLoading(false)
        })
        .catch( err => {
            setError(err.response.data.message)
            setIsLoading(false)
        })
    }

    return (
        isLoading ? (
            <MainScreen style={styles.loading}>
                <Text style={{color: "#4F4F4F"}}>Loading...</Text>
            </MainScreen>
        ) : (

            <MainScreen style={styles.viewStyles}>
                <ScrollView>
                    <TouchableOpacity onPress={_cancelQuiz} style={styles.cancelbtn}>
                        <Image source={require('../../../assets/images/cancel.png')} style={styles.cancelbtnImage} />
                    </TouchableOpacity>
                    <Text style={styles.number}>{index+1} - {data.question.length}</Text>
                    <View style={{marginBottom: 80}}>
                        <Text style={styles.title}>{data.question[index].title}</Text>
                        <View>
                            <TouchableOpacity style={active === data.question[index][0] ? styles.active : styles.choiceWrapper} onPress={() => _getAnswerValue(data.question[index][0])}>
                                <View style={active === data.question[index][0] ? styles.activeRadio : styles.radio}>
                                    {
                                        active === data.question[index][0] ? (
                                            <View style={styles.dot}></View>
                                        ):(
                                            null
                                        )
                                    }
                                </View>
                                <Text style={active === data.question[index][0] ? styles.activeChoice : styles.choice}>{data.question[index][0]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={active === data.question[index][1] ? styles.active :styles.choiceWrapper} onPress={() => _getAnswerValue(data.question[index][1])}>
                                <View style={active === data.question[index][1] ? styles.activeRadio : styles.radio}>
                                    {
                                        active === data.question[index][1] ? (
                                            <View style={styles.dot}></View>
                                        ):(
                                            null
                                        )
                                    }
                                </View>
                                <Text style={active === data.question[index][1] ? styles.activeChoice : styles.choice}>{data.question[index][1]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={active === data.question[index][2] ? styles.active :styles.choiceWrapper} onPress={() => _getAnswerValue(data.question[index][2])}>
                                <View style={active === data.question[index][2] ? styles.activeRadio : styles.radio}>
                                    {
                                        active === data.question[index][2] ? (
                                            <View style={styles.dot}></View>
                                        ):(
                                            null
                                        )
                                    }
                                </View>
                                <Text style={active === data.question[index][2] ? styles.activeChoice : styles.choice}>{data.question[index][2]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={active === data.question[index][3] ? styles.active :styles.choiceWrapper} onPress={() => _getAnswerValue(data.question[index][3])}>
                                <View style={active === data.question[index][3] ? styles.activeRadio : styles.radio}>
                                    {
                                        active === data.question[index][3] ? (
                                            <View style={styles.dot}></View>
                                        ):(
                                            null
                                        )
                                    }
                                </View>
                                <Text style={active === data.question[index][3] ? styles.activeChoice : styles.choice}>{data.question[index][3]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={active === data.question[index][4] ? styles.active :styles.choiceWrapper} onPress={() => _getAnswerValue(data.question[index][4])}>
                                <View style={active === data.question[index][4] ? styles.activeRadio : styles.radio}>
                                    {
                                        active === data.question[index][4] ? (
                                            <View style={styles.dot}></View>
                                        ):(
                                            null
                                        )
                                    }
                                </View>
                                <Text style={active === data.question[index][4] ? styles.activeChoice : styles.choice}>{data.question[index][4]}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.changePage, {width: windowWidth}]}>
                    {
                        index > 0 ? (
                            <TouchableOpacity onPress={_previousPage} style={[styles.pageWrapper, styles.backPageWrapper]}>
                                <Image source={require('../../../assets/images/left-arrow.png')} style={styles.backPage} />
                            </TouchableOpacity >
                        ) : (
                            <View style={[styles.pageWrapper, styles.backPageWrapper]}></View>
                        )
                    }
                    {
                        active === '' ? (
                            <View style={[styles.pageWrapper, styles.disable]}>
                                <Text style={styles.nextPage}>{index === data.question.length - 1 ? "Selesai" : "Selanjutnya"}</Text>
                            </View>
                        ) : (
                            <TouchableOpacity onPress={_nextPage} style={[styles.pageWrapper, styles.nextPageWrapper]}>
                                <Text style={styles.nextPage}>{index === data.question.length - 1 ? "Selesai" : "Selanjutnya"}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </MainScreen>
        )
    )
}

export default Component