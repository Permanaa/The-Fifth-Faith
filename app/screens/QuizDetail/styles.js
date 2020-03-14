import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  loading: {
    padding: 24,
    justifyContent: 'center'
  },
  viewStyles: {
    padding: 24,
    paddingBottom: 0
  },
  cancelbtn: {
    marginBottom: 16
  },
  cancelbtnImage: {
    width: 25,
    height: 25
  },
  number: {
    fontSize: 16,
    color: "#4F4F4F",
    marginBottom: 36
  },
  title: {
    color: "#4F4F4F",
    fontSize: 20,
    marginBottom: 36
  },
  choiceWrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#4F4F4F",
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  radio: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4F4F4F",
    marginRight: 16
  },
  choice: {
    marginRight: 32,
    color: "#4F4F4F",
  },
  changePage: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: "#FFF"
  },
  pageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backPageWrapper: {
    width: '25%',
    height: 60
  },
  backPage: {
    width: 25,
    height: 25
  },
  nextPageWrapper: {
    position: 'absolute',
    width: '75%',
    height: 60,
    borderTopLeftRadius: 40,
    bottom: 0,
    right: 0,
    backgroundColor: '#FF5050'
  },
  nextPage: {
    color: "#FFF"
  },
  active: {
    borderRadius: 10,
    backgroundColor: '#FF5050',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  activeRadio: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#FFF",
    marginRight: 16
  },
  activeChoice: {
    marginRight: 32,
    color: "#FFF",
  },
  disable: {
    position: 'absolute',
    width: '75%',
    height: 60,
    borderTopLeftRadius: 40,
    bottom: 0,
    right: 0,
    backgroundColor: "#BDBDBD"
  },
  dot: {
    width: "65%",
    height: "65%",
    borderRadius: 25,
    backgroundColor: '#FF5050'
  }
})

export default styles