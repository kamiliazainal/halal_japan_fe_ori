import React, { Component } from "react";
import { FlatList, StyleSheet,View} from "react-native";
import axios from 'axios';
import { withNavigation } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class MapEateryTokyo extends Component {
constructor(props){
    super(props)
  this.state = {
    data: []
  };}

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    axios.get(`https://apis.soleet.my/halalsrv/search?type=eatery,fff&area=Tokyo`)
    .then(res => {
        
      const data = res.data;
      this.setState({ data });
      console.log(data)
    })
    .catch(error => console.log(error));
  };

 keyExtractor=(item, index) => item.id
 renderListOfTokyoMap = ({item}) => (
   <View>
    <MapView 
    provider = {PROVIDER_GOOGLE}
    style={styles.mapStyle}  
    region ={{
        latitude: JSON.parse(item.latitude),   
        longitude: JSON.parse(item.longitude),  
        latitudeDelta: 1,  
        longitudeDelta: 1, 
    }}
    >
    <Marker     
    key={1}      
    coordinate={{
        latitude: JSON.parse(item.latitude),
        longitude: JSON.parse(item.longitude)
    }}
    title={item.namerestaurant}
    description= {item.address}
            />
    </MapView>
    </View>
);
    


  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderListOfTokyoMap}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mapStyle: {
        width: '100%',
        height: 200,
      }
});

export default withNavigation(MapEateryTokyo);