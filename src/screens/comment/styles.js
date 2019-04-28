import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 30,
    color: '#fff'
  },
  button: {
    marginVertical: 20
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  switchTextContainer: {
    width: '75%'
  },
  switchTextTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  switchInput: {
    width: '24%',
    marginLeft: 15
  },
  input: {
    marginVertical: 5
  }
});

export default styles;
