import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5
  },
  comment: {
    fontSize: 16,
    width: '100%'
  },
  author: {
    fontSize: 14,
    width: '100%'
  }
});

export default styles;
