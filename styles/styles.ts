import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slide: {
    width: windowWidth,
    paddingBottom: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    margin: 0
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 30,
    textAlign: 'center',
    marginBottom: 15
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginHorizontal: 30,

  },
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      textAlign: 'center',
      backgroundColor: '#188EFC',
      paddingHorizontal: 130,
      paddingVertical: 15,
      borderRadius: 50,
      marginBottom: 40
    },
    btnText: {
      fontSize: 16,
      color: 'white'
    },
  });

  export default styles;