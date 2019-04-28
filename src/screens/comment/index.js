import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Input } from '../../components';
import styles from './styles';

class Comment extends React.Component {
  static navigationOptions = {
    title: 'Comentar Tópico'
  };

  state = {
    comment: ''
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Input
            stylesContainer={styles.input}
            stylesInput={{ height: 150 }}
            label="Comentário"
            multiline={true}
            numberOfLines={4}
            value={this.state.comment}
            onChange={value => this.setState({ comment: value })}
          />
          <Button
            style={styles.button}
            text="Comentar"
            onClick={() => navigate('Topics')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default Comment;
