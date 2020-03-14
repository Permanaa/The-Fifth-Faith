import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

function Component(props) {
    const {data, type, screen} = props
    const navigation = useNavigation();  
    return (
        <View style={styles.listItem}>
            {
                data ? (
                    data.map((data, key) => (
                        <TouchableOpacity 
                            style={type === "quiz" ? [styles.container, {height: 200}] : styles.container}
                            key={key}
                            onPress={() => navigation.navigate(screen, {data:data})}
                        >
                            {
                                type === "Materi" ? (
                                    <Text style={styles.subtitle}>{type} {key+1}</Text>
                                ) : (
                                    null
                                )
                            }
                            <Text style={styles.title}>{type === "quiz" ? data.title.slice(0, -7) : data.title}</Text>
                            {
                                type === "quiz" ? (
                                    <View>
                                        <Text style={styles.description}>{data.description}</Text>
                                        <View style={styles.startbtn}>
                                            <Text style={styles.textStartbtn}>Mulai</Text>
                                        </View>
                                    </View>
                                ) : (
                                    null
                                )
                            }
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>Tidak ada data</Text>
                )
            }
        </View>
    )
}

export default Component