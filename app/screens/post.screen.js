import React, {Component} from 'react';
import {
  Container,
  Content,
  Icon,
  Button,
  Form,
  Text,
  Input,
  Card,
  CardItem,
  Spinner,
  Item,
} from 'native-base';
import {Image} from 'react-native';
import {inject} from 'mobx-react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  quality: 1.0,
  maxWidth: 500,
  maxHeight: 500,
  storageOptions: {
    skipBackup: true,
    path: 'image',
  },
};

class PostScreen extends Component {
  image = null;
  text = '';
  uploading = false;
  data = null;

  constructor(props) {
    super(props);
  }
  
  static navigationOptions = ({navigation}) => ({
    headerLeft: (
      <Button transparent onPress={() => navigation.goBack(null)}>
        <Icon name="chevron-left" style={{color: '#fff'}} size={28} />
      </Button>
    ),
  });

  componentDidMount() {
    ImagePicker.showImagePicker(options, res => {
      this.image = {uri: res.uri};
      this.data = res;
    });
  }

  post() {
    const {posts} = this.props.stores;
    const {navigation} = this.props;
    this.uploading = true;
    posts.postImage(this.data, snap => {
      posts.add(this.text, snap.downloadURL);
      this.uploading = false;
      navigation.goBack(null);
    });
  }

  render() {
    return (
      <Container>
        <Content style={{backgroundColor: '#858585'}}>
          {this.uploading ? <Spinner /> : null}
          <Card>
            <CardItem cardBody>
              {this.image ? (
                <Image
                  style={{height: 200, width: null, flex: 1}}
                  source={this.image}
                />
              ) : null}
            </CardItem>
            <CardItem>
              <Form>
                <Item borderType="underline">
                  <Input
                    style={{color: 'black'}}
                    placeholder="Enter Post Text"
                    placeholderTextColor="black"
                    onChangeText={text => (this.text = text)}
                  />
                  <Button rounded block onPress={this.post.bind(this)}>
                    <Text>Share!</Text>
                  </Button>
                </Item>
              </Form>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default inject('stores')(
  observer(PostScreen, {
    image: observable,
    text: observable,
    uploading: observable,
    data: observable,
  }),
);
