import * as React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Button } from '../../components';
import styles from './styles';

class Welcome extends React.Component {
  static navigationOptions = {
    header: null
  };

  renderLogo = () => (
    <Image
      source={{
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
      }}
      style={styles.image}
    />
  );

  render() {
    const {
      navigation: { navigate }
    } = this.props;

    return (
      <View style={styles.container}>
        {this.renderLogo()}
        <Button onPress={() => navigate('Login')} text="LOGIN" />
        <Button onPress={() => navigate('SignUp')} text="CRIAR CONTA" />
      </View>
    );
  }
}

export default Welcome;
