import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './styles'
import MainScreen from '../../components/layouts/MainScreen';

function Component({ route, navigation }) {
    const { result, answerKey, questions } = route.params
    const borderColor = ["#4AE4EE", "#6FCF97", "#EB5757"]
    const greeting = [
        {title: "Kamu luar biasa!", description: "Selamat sudah menjawab semua\nsoal dengan benar!"},
        {title: "Tetap semangat!", description: "Hebat! sedikit lagi\nnilaimu sempurna."},
        {title: "Belajar lebih giat!", description: "Nilaimu kurang nih,\ntingkatkan lagi belajarmu!"}
    ]

    return (
        <MainScreen style={styles.viewStyles}>
            <ScrollView>
                <TouchableOpacity style={styles.homebtn} onPress={() => navigation.replace("Home")}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.homebtnImage}/>
                </TouchableOpacity>
                <View style={styles.resultWrapper}>
                    <View style={[styles.centering, styles.result, {borderColor: result.value <= 100 && result.value >= 90 ? borderColor[0] : result.value < 90 && result.value >= 60 ? borderColor[1] : borderColor[2]}]}>
                        <Text style={styles.score}>{Math.round(result.value)}%</Text>
                        <Text style={styles.sumQuestion}>{result.trueAnswer} dari {questions.length}</Text>
                    </View>
                    <View style={styles.centering}>
                        <Text style={styles.titleDescription}>{result.value >= 100 ? greeting[0].title : result.value < 100 && result.value >= 60 ? greeting[1].title : greeting[2].title}</Text>
                        <Text style={styles.description}>{result.value >= 100 ? greeting[0].description : result.value < 100 && result.value >= 60 ? greeting[1].description : greeting[2].description}</Text>
                    </View>
                </View>
                <View style={styles.discustionWrapper}>
                    <Text style={styles.textDiscustion}>Pembahasan</Text>
                    {
                        questions.map((question, key) => (
                            <View key={key} style={[styles.wrapper, {backgroundColor: result.userAnswer[key] === question.answer ? "#CFFFD4" : "#FFDADA"}]}>
                                <View style={styles.questionWrapper}>
                                    <Text style={[styles.question, {marginRight: 8, width: 22}]}>{key + 1}.</Text>
                                    <Text style={[styles.question,{width: "90%"}]}>{question.title}</Text>
                                </View>
                                <View style={[styles.answerWrapper, styles.setMargin]}>
                                    <Text style={[styles.answer, {marginRight: 16}]}>Jawabanmu: </Text>
                                    <Text style={{width: 180,width: "55%"}}>{result.userAnswer[key]}</Text>
                                </View>
                                <View style={[styles.answerWrapper,styles.setMargin]}>
                                    <Text style={[styles.answer, {marginRight: 16}]}>Kunci jawaban: </Text>
                                    <Text style={{width: 180,width: "55%"}}>{question.answer}</Text>
                                </View>
                                {
                                    question.pembahasan ? (
                                        <Text style={{width: "90%",marginLeft: 28, color: "#333333"}}>{question.pembahasan}</Text>
                                    ) : (
                                        null
                                    )
                                }
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </MainScreen>
    )
}

export default Component