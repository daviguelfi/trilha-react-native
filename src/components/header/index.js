import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

export default Header;