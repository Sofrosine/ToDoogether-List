import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

class FakeAPI extends Component {
  state = {
    data: [],
    data2: [],
    url:
      'https://image.freepik.com/free-photo/nice-square-composition-pink-leaves-blue-background_24972-583.jpg',
    title: '',
    body: '',

    inputContainer: false,
    isLoading: false,
  };

  postDataAPI = async () => {
    const data = {
      userId: 1,
      id: new Date().getTime(),
      title: `${this.state.title}`,
      body: `${this.state.body}`,
    };

    await this.state.data2.push(data);
    await this.state.data2.sort((a, b) => {
      return b.id - a.id;
    });
    console.log('dataaa', this.state.data2);
    AsyncStorage.setItem('@data', JSON.stringify(this.state.data2));
    this.forceUpdate();
  };

  handlePost = async () => {
    if (this.state.title == '' && this.state.body == '') {
      return ToastAndroid.showWithGravity(
        'All fields must been inserted',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      this.setState({isLoading: true});
      setTimeout(async () => {
        await this.postDataAPI();
        await this.setState({
          inputContainer: false,
        });
        this.setState({isLoading: false});
        ToastAndroid.showWithGravity(
          'News Data has been inserted',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }, 3000);
    }
  };

  async componentDidMount() {
    // AsyncStorage.clear()
    if (!(await AsyncStorage.getItem('@data'))) {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
          const data = res.data;
          this.setState({data});
        });
      const data = AsyncStorage.setItem(
        '@data',
        JSON.stringify(
          this.state.data.sort((a, b) => {
            return b.id - a.id;
          }),
        ),
      );
      const data2 = await AsyncStorage.getItem('@data');
      this.setState({
        data2: JSON.parse(data2),
      });
    } else {
      const data2 = await AsyncStorage.getItem('@data');
      this.setState({
        data2: JSON.parse(data2),
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>

          <TouchableOpacity
            onPress={() =>
              this.setState({inputContainer: !this.state.inputContainer})
            }
            style={styles.addTrigger}>
            {this.state.inputContainer ? (
              <Icon color="#F7F7F7" name="minus" size={10} />
            ) : (
              <Icon color="#F7F7F7" name="plus" size={10} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Daily News</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            {this.state.data2.map(item => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.news}
                  key={item.id}>
                  <Image
                    source={{uri: `${this.state.url}`}}
                    style={styles.newsImage}
                  />
                  <View style={styles.newsTextContainer}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.titleNewsText}>
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.bodyNewsText}>
                      {item.body}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {this.state.inputContainer ? (
          <View style={styles.inputContainer}>
            <View style={styles.inputTitleContainer}>
              <Text style={styles.titleTextInput}>Title</Text>
              <TextInput
                onChangeText={value => this.setState({title: value})}
                style={styles.titleInput}
              />
            </View>
            <View style={styles.inputBodyContainer}>
              <Text style={styles.titleTextInput}>Body</Text>
              <TextInput
                onChangeText={value => this.setState({body: value})}
                numberOfLines={8}
                style={styles.titleInput}
              />
            </View>
            <View style={styles.inputButtonAddContainer}>
              {this.state.isLoading ? (
                <ActivityIndicator color="#AAD0D9" size={40} />
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => this.handlePost()}
                    activeOpacity={0.6}
                    style={styles.addButtonInput}>
                    <Text style={styles.addButtonText}>Add News</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        inputContainer: !this.state.inputContainer,
                      })
                    }
                    activeOpacity={0.6}
                    style={styles.cancelButtonInput}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        ) : null}
        <View>
          
        </View>
      </View>
    );
  }
}

export default FakeAPI;
