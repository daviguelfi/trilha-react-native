import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#444',
    padding: 20,
    flexDirection: 'row',
    borderRadius: 5
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  cardSubtitle: {
    color: 'green'
  },
  cardNav: {
    textAlign: 'right',
    fontSize: 18
  },
  col1: {
    width: '80%'
  },
  col2: {
    width: '20%',
    justifyContent: 'center'
  }
});

export default styles;
