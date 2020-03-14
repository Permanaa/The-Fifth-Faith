import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewStyles: {
    padding: 24,
    paddingBottom: 0
  },
  setMargin: {
    marginLeft: 28,
    marginBottom: 12
  },
  homebtn: {
    marginBottom: 24
  },
  homebtnImage: {
    width: 35,
    height: 35
  },
  resultWrapper: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 120
  },
  result: {
    width: 170,
    height: 170,
    borderWidth: 12,
    borderRadius: 150,
    borderColor: "#4F4F4F"
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  score: {
    color: "#4F4F4F",
    fontSize: 36,
    fontWeight: 'bold'
  },
  sumQuestion: {
    color: "#828282"
  },
  titleDescription: {
    color: "#4F4F4F",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 38
  },
  description: {
    color: "#828282",
    marginTop: 8,
    fontSize: 18,
    textAlign: 'center'
  },
  textDiscustion: {
    fontSize: 18,
    color: "#4F4F4F",
    marginBottom: 16
  },
  wrapper: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: "#FF5050"
  },
  questionWrapper: {
    flexDirection: 'row',
    marginBottom: 12
  },
  question: {
    color: "#333333"
  },
  answerWrapper: {
    flexDirection: 'row'
  },
  answer: {
    width: 110
  }
})

export default styles