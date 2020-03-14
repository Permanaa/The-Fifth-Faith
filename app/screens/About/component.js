import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native'
import styles from './styles'
import MainScreen from '../../components/layouts/MainScreen';

function Component({navigation}) {
    const _goToIg = (ig) => {
        Linking.openURL(`https://www.instagram.com/${ig}/`)
    }

    return (
        <MainScreen style={styles.viewStyles}>
            <ScrollView>
                <TouchableOpacity style={{marginBottom: 36}} onPress={() => navigation.openDrawer()}>
                    <Image source={require('../../../assets/images/menu.png')} style={styles.menuImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.igWrapper}>
                    <Image source={require('../../../assets/images/instagram.png')} style={styles.igImage} />
                </TouchableOpacity>
                <View style={styles.type}>
                    <Text style={styles.typeTitle}>Mobile Developer</Text>
                    <TouchableOpacity style={styles.person} onPress={() => _goToIg("kristiannds_")}>
                        <Text style={styles.name}>Kristian Damas</Text>
                        <Text style={styles.ig}>@kristiannds_</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.type}>
                    <Text  style={styles.typeTitle}>UI/UX Designer</Text>
                    <TouchableOpacity style={styles.person} onPress={() => _goToIg("mdffkr")}>
                        <Text style={styles.name}>Muhammad Dafa</Text>
                        <Text style={styles.ig}>@mdffkr</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.person} onPress={() => _goToIg("makanefollow")}>
                        <Text style={styles.name}>Muhammad Ilham</Text>
                        <Text style={styles.ig}>@makanefollow</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.type}>
                    <Text style={styles.typeTitle}>UX Researcher</Text>
                    <TouchableOpacity style={styles.person} onPress={() => _goToIg("_joyanu")}>
                        <Text style={styles.name}>Joya Nafa Ulya</Text>
                        <Text style={styles.ig}>@_joyanu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.person} onPress={() => _goToIg("muhilman2002")}>
                        <Text style={styles.name}>Muhamad Hilman</Text>
                        <Text style={styles.ig}>@muhilman2002</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.type}>
                    <Text style={styles.typeTitle}>Backend Developer</Text>
                    <TouchableOpacity style={styles.person} onPress={() => _goToIg("prmana.u")}>
                        <Text style={styles.name}>Lulu Irman</Text>
                        <Text style={styles.ig}>@prmana.u</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </MainScreen>
    )
}

export default Component