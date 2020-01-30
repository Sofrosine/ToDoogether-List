import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  PermissionsAndroid,
  TouchableOpacity,
  ImageBackground,
  Image,
  ToastAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styles from './style';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

class Location extends Component {
  state = {
    isLoading: false,
    latitude: '',
    longitude: '',
    address: '',

    url:
      'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80',
    urlProfile:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg',
  };

  handleUpdateLocation = async () => {
    setTimeout(async () => {
      await Geolocation.getCurrentPosition(
        async position => {
          console.log('My current location', JSON.stringify(position));
          await this.setState({
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          });
          await axios
            .get(
              `http://us1.locationiq.com/v1/reverse.php?key=68e73a2b14084c&lat=${this.state.latitude}&lon=${this.state.longitude}&format=json`,
            )
            .then(res => {
              this.setState({
                address: `${res.data.display_name}`,
              });
              console.log('ress', res);
              console.log(this.state.address);
            });
        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
      this.watchID = Geolocation.watchPosition(position => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5,
        };
      });
      this.setState({isLoading: false});
      ToastAndroid.showWithGravity(
        'Location Updated',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
      this.forceUpdate();
    }, 8000);
    this.setState({isLoading: true});
  };

  async componentDidMount() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'ReactNativeCode Location Permission',
        message: 'ReactNativeCode App needs access to your location ',
      },
    );

    if (granted) {
      await Geolocation.getCurrentPosition(
        async position => {
          console.log('My current location', JSON.stringify(position));
          await this.setState({
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          });
          await axios
            .get(
              `http://us1.locationiq.com/v1/reverse.php?key=68e73a2b14084c&lat=${this.state.latitude}&lon=${this.state.longitude}&format=json`,
            )
            .then(res => {
              this.setState({
                address: `${res.data.display_name}`,
              });
              console.log('ress', res);
              console.log(this.state.address);
            });
        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
      // console.log('addressku', this.state.address)
      this.watchID = Geolocation.watchPosition(position => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922 * 1.5,
          longitudeDelta: 0.00421 * 1.5,
        };
        //  console.log('region', region)
        // this.setState({lastPosition});
      });
    }
  }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{opacity: 0.5}}
          source={{uri: `${this.state.url}`}}
          style={styles.backgroundContainer}>
          <View style={styles.notesContainer}>
            <Text style={styles.notesText1}>Your Location</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginRight: 15}}>
                <Icon color="#F7F7F7" name="map-marker" size={50} />
              </View>
              <View>
                <Text style={styles.notesText1}>
                  Latitude: {this.state.latitude}
                </Text>
                <Text style={styles.notesText1}>
                  Longitude: {this.state.longitude}
                </Text>
              </View>
            </View>
            <Text style={styles.notesText2}>{this.state.address}</Text>
            {this.state.isLoading ? (
              <ActivityIndicator color="#F7F7F7" size={50} />
            ) : (
              <TouchableOpacity
                onPress={() => this.handleUpdateLocation()}
                activeOpacity={0.6}
                style={styles.notesUpdateContainer}>
                <Text style={styles.notesUpdateText}>Update Location</Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Location;
