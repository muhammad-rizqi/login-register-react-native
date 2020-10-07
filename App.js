import React, {Component} from 'react';
import AppStack from './src/route/appStack';
import Splash from './src/screen/Splash';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: false,
    };
    console.log('Ini dari consturctor');
  }

  screen() {
    if (this.state.screen) {
      return <AppStack />;
    } else {
      return <Splash />;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        screen: true,
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
