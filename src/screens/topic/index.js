import * as React from 'react';
import { View, ScrollView, Switch, Text } from 'react-native';
import { Button, Comment } from '../../components';
import { connect } from 'react-redux';
import { handlePressButton } from '../topics/actions';
import styles from './styles';

class Topic extends React.Component {
  static navigationOptions = {
    title: 'Tópico'
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Button
            text="Criar Comentário"
            onPress={() => this.props.handlePressButton()}
          />
          {/* <Button text="Criar Comentário" onPress={() => navigate('Comment')} /> */}
          {[1, 2, 3].map(n => (
            <Comment
              text={`Python na veia ${n}`}
              author={{ name: `Author ${n}` }}
              styleContainer={styles.cardContainer}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToPros = () => ({});

const mapDispatchToProps = {
  handlePressButton
};

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(Topic);
