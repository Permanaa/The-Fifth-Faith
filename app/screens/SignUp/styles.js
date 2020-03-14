import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewStyles: {
    justifyContent: 'center'
  },
  container:{
    marginLeft: 30,
    marginRight: 30
  },
  title: {
    color: "#FF5050",
    fontSize: 45,
    marginBottom: 40
  },
  label: {
    fontSize: 16,
    color: '#575757',
    marginBottom: 8
  },
  input: {
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: '#FF5050',
    borderRadius: 5,
    marginBottom: 24
  },
  textInput: {
    color: '#575757',
    fontSize: 16
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 12,
    backgroundColor: '#FF5050'
  },
  textbtn: {
    color: '#FFFFFF'
  },
  other: {
    fontSize: 16,
    color: '#575757',
  }
})

export default styles