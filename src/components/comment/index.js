import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Comment = ({ text, author, styleContainer }) => (
  <View style={{ ...styles.card, ...styleContainer }}>
    <Text style={styles.comment}>{text}</Text>
    <Text style={styles.author}>{author.name}</Text>
  </View>
);

export default Comment;
