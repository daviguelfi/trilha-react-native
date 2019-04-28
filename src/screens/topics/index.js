import * as React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, TouchableHighlight } from 'react-native';
import { Button, Card } from '../../components';
import { fetchTopics } from './actions';
import styles from './styles';

class Topics extends React.Component {
  static navigationOptions = {
    title: 'Tópicos'
  };

  componentDidMount() {
    this.props.fetchTopics();
  }

  render() {
    const {
      navigation: { navigate },
      topics
    } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Button text="Criar Tópico" onPress={() => navigate('NewTopic')} />
          {topics.map(topic => (
            <TouchableHighlight
              onPress={() => navigate('Topic')}
              key={topic.id}
            >
              <Card
                key={topic.id}
                text={topic.name}
                qtd={topic.total_users}
                styleContainer={styles.cardContainer}
              />
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ topics: state.topics.topics });

const mapDispatchToProps = {
  fetchTopics
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);
