import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { withNavigation } from 'react-navigation';


class LocationPicker extends Component {
  state = {
    location: [],
    errorMessage: '',
    lat:null,
    lng: null
  };

  latlong = getLocation(this);
  
  render() {

    let LAT= parseFloat(this.state.lat)
    let LNG= parseFloat(this.state.lng)
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('map',{
        lati: LAT,
        long: LNG
    })} >
        <Text style={styles.welcome}>Want to search by your current location ?</Text>
        <Text style={styles.instructions}>Click here</Text>
      </TouchableOpacity>
    );
  }
}


async function getLocation(mythis) {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted'){
        mythis.setState({
          errorMessage: 'PERMISSION NOT GRANTED'
      })
    }

    const location = await Location.getCurrentPositionAsync();
    console.log(location.coords.latitude)
    mythis.setState({lat: location.coords.latitude, lng: location.coords.longitude})
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 15,
      textAlign: "center",
      margin: 10
    },
    instructions: {
      textAlign: "center",
      color: 'blue',
      marginBottom: 5,
    },
    mapStyle: {
        width: '100%',
        height: 200,
      }
  });

  export default withNavigation(LocationPicker)
