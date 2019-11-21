import React, {Component} from 'react';
import {Button, Item, Input, Icon, Text, Form} from 'native-base';
import {observer} from 'mobx-react';
import {observable, decorate} from 'mobx';

class Login extends Component {
  email = '';
  password = '';

  constructor(props) {
    super(props);
  }

  signIn = () => {
    const {auth} = this.props.stores;
    const {navigate} = this.props.navigation;

    auth
      .signIn({email: this.email, password: this.password})
      .then(() => navigate('Match'));
  };

  render() {
    const {auth} = this.props.stores;

    return (
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: '#fff'}} name="ios-person" />
          <Input
            style={{color: '#fff'}}
            placeholder="Please enter your email"
            placeholderTextColor="#fff"
            onChangeText={email => (this.email = email)}
          />
        </Item>

        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: '#fff'}} name="ios-lock" />
          <Input
            style={{color: '#fff'}}
            placeholder="Please enter your password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={pass => (this.password = pass)}
          />
        </Item>

        <Button rounded block style={{marginBottom: 10}} onPress={this.signIn}>
          <Text>Login</Text>
        </Button>
      </Form>
    );
  }
}

export default observer(
  decorate(Login, {
    email: observable,
    password: observable,
  }),
);





