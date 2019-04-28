import SignIn from './signin';
import SignUp from './signup';
import Topics from './topics';
import NewTopic from './new-topic';
import Topic from './topic';
import Comment from './comment';
import Welcome from './welcome';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    Welcome,
    Login: {
      screen: SignIn
    },
    Topics,
    NewTopic,
    Topic,
    Comment,
    SignUp
  },
  {
    initialRouteName: 'SignUp',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
        color: '#fff'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
