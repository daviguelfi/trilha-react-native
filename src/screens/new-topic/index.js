import * as React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Switch, Text } from 'react-native';
import { Button, Select, Input } from '../../components';
import { createTopic } from './duck';
import styles from './styles';

class NewTopic extends React.Component {
  static navigationOptions = {
    title: 'Criar Tópico'
  };

  state = {
    name: 'Novo toico pelo',
    type: 'js',
    description: 'pelo state',
    public: false
  };

  handleSubmitTopic = () => {
    const {
      navigation: { navigate }
    } = this.props;

    this.props
      .createTopic(this.state)
      .then(resp => navigate('Topics'))
      .catch(() => {
        console.log('DEU RUIM');
      });
  };

  render() {
    const { loading } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Input
            stylesContainer={styles.input}
            label="Nome do tópico"
            value={this.state.name}
            onChange={value => this.setState({ name: value })}
          />
          <Select
            stylesContainer={styles.input}
            label="Selecione o tema"
            value={this.state.type}
            items={[
              { label: 'JavaScript', value: 'js' },
              { label: 'PHP', value: 'php' },
              { label: 'Java', value: 'java' },
              { label: 'Python', value: 'python' }
            ]}
            onChange={value => this.setState({ type: value })}
          />
          <Input
            stylesContainer={styles.input}
            stylesInput={{ height: 150 }}
            label="Descreva sua dúvida"
            multiline={true}
            numberOfLines={4}
            value={this.state.description}
            onChange={value => this.setState({ description: value })}
          />
          <View style={styles.switchContainer}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTextTitle}>Público</Text>
              <Text style={styles.switchText}>
                Os tópicos públicos ficam visíveis para toda a comunidade.
              </Text>
            </View>
            <Switch
              value={this.state.public}
              onValueChange={value =>
                this.setState({ public: !this.state.public })
              }
              trackColor={{ false: '#ccc', true: '#096' }}
              style={styles.switchInput}
            />
          </View>
          <Button
            style={styles.button}
            text="Criar Tópico"
            loading={loading}
            onPress={() => this.handleSubmitTopic()}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.newTopic.loading
});

const mapDispatchToProps = {
  createTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTopic);
