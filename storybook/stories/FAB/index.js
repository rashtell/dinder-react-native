import React, { Component } from 'react';
import { Text, View, TouchableNativeFeedback, StyleSheet, Alert, Animated, Dimensions, Easing } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



export default class FAB extends Component {
  constructor(props) {
    super(props);

    this.toValue = 2;
    this.progress = new Animated.Value(0);

  }

  state = {
    fabElevation: 20,
    isAnimated: false
  }

  handleFabPressIn = () => {
    this.setState({ fabElevation: 13 })
  }

  handleFabPressOut = () => {
    this.setState({ fabElevation: 6 })
  }

  handleFabPress = (xOutputRange, yOutputRange) => {
    let { width, height } = Dimensions.get('window')
    width = Math.random() * width / 2;
    height = Math.random() * height / 2

    this.fabXPos = this.progress.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      outputRange: [0, width, width, -width, -width, 0, Math.random() * width, Math.random() * -width, 0],
    })

    this.fabYPos = this.progress.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      outputRange: [0, height, -height, height, -height, 0, Math.random() * height, Math.random() * -height, 0],
      easing: Easing.bezier(0, .5, .5, 1)
    })

    this.animateProgress()

  }

  animateProgress = () => {
    // Alert.alert(`toValue: ${this.toValue}`);
    Animated.timing(this.progress, {
      toValue: this.toValue,
      duration: 15000,
      // easing: Easing.bezier(0.4, 0, 0.2, 1)
    }).start(({ finished }) => {
      if (finished) {
        this.progress.stopAnimation(() => {
          this.setState({ isAnimated: !this.state.isAnimated })
          // Alert.alert('Fab pressed')
        });
      }
    })
  }

  handleFabLongPress = () => {
    this.setState({ fabElevation: 0 })
  }

  render() {

    this.toValue = this.state.isAnimated ? 0 : 2

    const ripple = TouchableNativeFeedback.Ripple("aaf", true);

    return (
      <Animated.View style={[styles.main, { elevation: this.state.fabElevation, left: this.fabXPos, top: this.fabYPos, }]}>
        <TouchableNativeFeedback background={ripple}
          onPress={this.handleFabPress}
          onPressIn={this.handleFabPressIn}
          onPressOut={this.handleFabPressOut}
          onLongPress={this.handleFabLongPress} >
          <View style={styles.container}>
            <Icon name='add-shopping-cart' color='blue' size={40} />
          </View>
        </TouchableNativeFeedback>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    borderRadius: 28,
    width: 56,
    height: 56,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {

  }
})
