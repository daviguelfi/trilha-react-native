import * as React from 'react';
import { Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import styles from './styles';

const Button = ({ text, style, loading, onPress, ...props }) => (
  <TouchableHighlight
    onPress={() => (loading ? null : onPress())}
    style={{ ...styles.button, ...style }}
    {...props}
  >
    {loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : (
      <Text style={styles.text}>{text}</Text>
    )}
  </TouchableHighlight>
);

export default Button;
