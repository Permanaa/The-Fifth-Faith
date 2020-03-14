import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 120,
    alignSelf:'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 16,
    marginBottom: 16
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    width: 90,
    padding: 2,
    marginBottom: 8,
    borderRadius: 20,
    textAlign: 'center',
    color: "#FFF",
    backgroundColor: "#FF5050"
  },
  description: {
    marginTop: 8,
    marginBottom: 16,
    color: "#828282"
  },
  startbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FF5050",
    borderRadius: 10,
    height: 50
  },
  textStartbtn: {
    color: "#FFF"
  }
})

export default styles