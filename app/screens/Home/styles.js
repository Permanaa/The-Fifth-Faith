import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    header: {
        marginBottom: 16
    },
    menuImage: {
        width: 35,
        height: 35
    },
    title: {
        marginTop: 28,
    },
    logout: {
        position: 'absolute',
        right: 0,
        margin: 24,
        transform: [{rotateY: '180deg'}]
    },
    logoutbtn: {
        width: 30,
        height: 30
    },
    greeting: {
        fontSize: 20,
        color: '#4F4F4F',
    },
    username: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4F4F4F'
    },
    tabBar: {
        flexDirection: 'row',
        marginLeft: 24,
        paddingBottom: 0,
        marginTop: 8
    },
    tabTitle: {
        fontSize: 16,
        padding: 4,
        paddingTop: 8,
        width: 120,
        fontWeight: 'bold',
        marginBottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign: 'center',
    }
})

export default styles