import React, {Component} from 'react';
import {View} from 'react-native';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Splash from './src/screen/Splash';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: 'splash',
    };
    console.log('Ini dari consturctor');
  }

  screen() {
    switch (this.state.screen) {
      case 'splash':
        return <Splash />;
      case 'login':
        return <Login onRegister={() => this.setState({screen: 'register'})} />;
      case 'register':
        return (
          <Register onLoginClick={() => this.setState({screen: 'login'})} />
        );
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        screen: 'login',
      });
    }, 5000);
    console.log('Ini dari componentDidMount');
  }

  componentDidUpdate() {
    console.log('Ini dari componentDidUpdate');
  }
  render() {
    console.log('Ini dari render');
    return <>{this.screen()}</>;
  }
}
