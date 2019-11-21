import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {inject} from 'mobx-react';

// @inject('stores')
class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    const {stores} = this.props;

    console.log(`
    splash.screen: constructor: stores:=> ${JSON.stringify(stores)}`);
  }

  componentDidMount() {
    const {stores, navigation} = this.props;

    setTimeout(() => {
      navigation.navigate('Login');
    }, stores.config.splashTime);
  }

  render() {
    let splashImage;
    const {stores} = this.props;

    if (stores) splashImage = stores.config.splashImage;
    clearTimeout();

    return (
      <View style={{flex: 1}}>
        <Image
          style={{flex: 1, width: null, height: null}}
          source={splashImage}
        />
      </View>
    );
  }
}

export default inject('stores')(SplashScreen);
