import React from 'react';
import { Text, TouchableHighlight, View, Alert } from 'react-native';
import { Button, Input } from '../../components';
import styles from './styles';

class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  state = {
    email: '',
    password: ''
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;

    return (
      <View style={styles.container}>
        <Input
          stylesContainer={styles.input}
          label="Email"
          value={this.state.email}
          onChange={value => this.setState({ email: value })}
        />
        <Input
          stylesContainer={styles.input}
          label="Senha"
          security
          value={this.state.password}
          onChange={value => this.setState({ password: value })}
        />
        <TouchableHighlight onPress={() => navigate('SignUp')}>
          <View style={styles.newAccount}>
            <Text>Não tem uma conta?</Text>
            <Text
              style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}
            >
              {' '}
              Crie agora.
            </Text>
          </View>
        </TouchableHighlight>

        <Button
          style={styles.button}
          onPress={() => navigate('SignUp')}
          text="LOGIN"
        />
      </View>
    );
  }
}

export default SignIn;
