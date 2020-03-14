import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './styles'
import MainScreen from '../../components/layouts/MainScreen'

function Component({route, navigation}) {
  const { data } = route.params
  
  return (
    <MainScreen style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/images/left-arrow.png')} style={styles.backbtnImage}/>
        </TouchableOpacity>
        <Text style={styles.title}>{data.title}</Text>
        <Image source={{uri: data.image}} style={styles.image}/>
        {
          data.title ===  "Dalil Naqli Tentang Hari Kiamat/Akhir" ? (
            <Image source={require('../../../assets/images/arab.png')} style={styles.arab}/>
          ):(
            null
          )
        }
        <Text style={styles.description}>{data.description}</Text>
        {
          data.subMateri.length >= 0 ? (
            data.subMateri.map((data, key) => (
              <View style={styles.setMargin} key={key}>
                <Text style={[styles.setMargin, styles.setColor]}>{key+1}. {data.title}</Text>
                <Text style={[styles.subDescription,styles.setColor]}>{data.description}</Text>
              </View>
            ))
          ) : (
            null
          )
        }
      </ScrollView>
    </MainScreen>
  )
}

export default Component