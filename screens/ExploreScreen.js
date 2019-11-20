import React , { Component }from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity, CheckBox } from 'react-native';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { Dropdown } from 'react-native-material-dropdown';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
class ExploreScreen extends Component {

    constructor() {
        super();
        this.state = { checked: false };
     }

    render() {
        let city = [{
          value: 'Tokyo',
        }, {
          value: 'Osaka',
        }, {
          value: 'Kanagawa',
        },
        {
            value: 'Aichi',
        },
        {
            value: 'Kyoto',
        },
        {
            value: 'Fukuoka',
        }
    ];

        let type = [{
            value: 'Shop',
          }, {
            value: 'Eatery',
          }, {
            value: 'Vending Machine',
          }
        ];
    

const {navigate} = this.props.navigation; 
    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.title}>My Food</Text>
            <View style={styles.dropdown}>
                <View style={styles.dropdown2}>
                    <Dropdown
                        label='City'
                        data={city}
                        fontSize={20}
                    />
                </View>
                <View style={styles.dropdown2}>
                        <Dropdown
                            label='Type'
                            data={type}
                            fontSize={20}
                        />
                </View>
            </View>
            {/* <Dropdown
                label='Conditions'
                data={conditions}
                fontSize={20}
            /> */}
            <View style={styles.dropdown4}>
                     <View style={styles.dropdown3}>
                        <CheckBox  title='Halal Certified' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/45c1f92e-8512-45d7-858c-3b50acd334b7.halal-sign.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Halal Certified</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Pork Free' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/c8afd89c-de05-4657-951c-543d055e9193.no-meat.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Pork Free</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Vegetarian Meal' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/5e42075d-0fea-4782-8dbb-fb1db0492bf3.vegetables.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Vegetarian Meal</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='No Alcohol in Meal' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/bdd2c0f8-7b28-4f24-af03-c9f6b4421329.no-alcohol.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>No Alcohol in Meal</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='No Alcohol Drinks' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/bdd2c0f8-7b28-4f24-af03-c9f6b4421329.no-alcohol.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>No Alcohol Drinks</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Muslim Owner' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/12/852866bc-c355-441d-bedb-5b7a29efcbed.chef-hat.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Muslim Owner</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Muslim Chef' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/12/852866bc-c355-441d-bedb-5b7a29efcbed.chef-hat.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Muslim Chef</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Halal Kitchenware' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/96883914-4055-42fa-b16e-e55dd0bd3b7d.pot.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Halal Kitchenware</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Prayer Space' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/1ba12254-3993-406a-b71b-0b4415b1208a.takbir.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Prayer Space</Text>
                        </View>
                    </View>
            </View>
            <View style={styles.dropdown4}>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Wifi' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/435d4c83-f5fb-44c6-b71a-cb0816c1e9ce.wifi.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Wifi</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Delivery' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/35be18dc-46ed-45c8-a407-7860adcd0091.scooter.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Delivery</Text>
                        </View>
                    </View>
                    <View style={styles.dropdown3}>
                        <CheckBox  title='Credit Card' checked={this.state.checked}/>
                        <View style={styles.dropdown5}>
                        <Image style={styles.checkboxImg} source={{uri: 'https://apis.soleet.my/fn/2019/11/13/465f7134-1997-4116-a4a7-27335dd5e4e4.credit-card.png'}} />
                        <Text style={styles.text1} numberOfLines={2}>Credit Card</Text>
                        </View>
                    </View>
            </View>
            
            <View style={styles.search}>
                    <Button
                    title="Search" 
                    onPress={() =>navigate({routeName: 'HomePage'})}
                    />
            </View>
            <Text style={styles.title}>Explore the Halal Hub</Text>
            <View style={styles.screen2}>
                {/* <Image style={styles.bgImage}
                source={{uri: 'https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C43.0528381,141.3542118&markers=color:red%7C43.0528689,141.3541899&markers=color:red%7C43.0495141,141.3570519&markers=color:red%7C43.0573956,141.3521618&markers=color:red%7C43.05197,141.35464&key=AIzaSyCbAtQ2yeosVf_2P3iirM-DkSHPZWWd4ks'}}/> */}
             <MapView 
                        provider = {PROVIDER_GOOGLE}
                        style={styles.mapStyle}  
                        region ={{
                            latitude: 35.6602671,   
                            longitude: 139.7261875,  
                            latitudeDelta: 0.5,  
                            longitudeDelta: 0.5, 
                        }}
                        >
                        <Marker     
                        key={1}      
                        coordinate={{
                            latitude: 35.6602671,
                            longitude: 139.7261875
                        }}
                        title="Gyumon"
                                />
                                <Marker     
                        key={2}      
                        coordinate={{
                            latitude: 35.7116588,
                            longitude: 139.7975577
                        }}
                        title="The Kebab Factory"
                                />
                                 <Marker     
                        key={3}      
                        coordinate={{
                            latitude: 35.736126,
                            longitude: 139.67152
                        }}
                        title="Pran Pone"
                                />
                                         <Marker     
                        key={4}      
                        coordinate={{
                            latitude: 35.6999915,
                            longitude: 139.7751964
                        }}
                        title="CURRY HOUSE CoCo ICHIBANYA HALAL Akihabara"
                                />
                                                  <Marker     
                        key={5}      
                        coordinate={{
                            latitude: 35.689462,
                            longitude: 139.7082764
                        }}
                        title="Bosphorus Hasan"
                                />
                                                           <Marker     
                        key={6}      
                        coordinate={{
                            latitude: 35.6937076,
                            longitude: 139.687287
                        }}
                        title="Khana kabab"
                                />
                        </MapView>
            </View>
            <View style={styles.screen2}>
            <View style={styles.section}>
                <Text style={styles.miniTitle}>Shop</Text>

                <View style={styles.buttonContainer}>
                    <View >
                        <TouchableOpacity 
                        onPress={() =>{
                            }}>
                            <Image source={{uri: 'https://i.ytimg.com/vi/y3ssOkW4l9E/maxresdefault.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1} >Grocery Store</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://resources.matcha-jp.com/resize/720x2000/2017/04/25-25194.jpeg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1}>Convenience Store</Text>
                            </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://resources.realestate.co.jp/wp-content/uploads/2018/05/Jupiter-Supermarket-Osaka-Real-Estate-Japan-1020x500.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text}>Supermarket</Text>
                            </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styles.section}>
                <Text style={styles.miniTitle}>Eatery</Text>

                <View style={styles.buttonContainer}>
                    <View >
                        <TouchableOpacity onPress={() =>navigate({routeName: 'Restaurant'})}>
                            <Image source={{uri: 'https://img.theculturetrip.com/768x432/wp-content/uploads/2018/09/ep7a4t-1.jpg'}}
                            style={styles.image}/>
                            <Text style={styles.text} numberOfLines={1} >Restaurant & Stall</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://noramennolife.files.wordpress.com/2013/07/img_7191.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1}>Food Truck</Text>
                            </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/026/270/medium/pixta_20024459_S.jpg?2017'}}
                            style={styles.image} />
                            <Text style={styles.text}>Fine Dining</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.miniTitle}>Vending Machine</Text>

                <View style={styles.buttonContainer}>
                    <View >
                        <TouchableOpacity 
                        onPress={() =>{
                            }}>
                            <Image source={{uri: 'http://japanology.org/wp-content/uploads/2016/10/shutterstock_395513902.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1} >Drinks</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://muza-chan.net/aj/poze-weblog7/24-hour-hot-menu-vending-machine.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text} numberOfLines={1}>Frozen Food</Text>
                            </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity >
                            <Image source={{ uri: 'https://i.pinimg.com/originals/ca/c8/19/cac8196efe39146d5fa01673578366f1.jpg'}}
                            style={styles.image} />
                            <Text style={styles.text}>Fruit</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}}

ExploreScreen.navigationOptions = {
    headerTitle: 'Halal Map',
    headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
            title= 'search'
            iconName= 'md-search' //? means true, : means false
            onPress={() => {
                
            }}
        />
    </HeaderButtons>)
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    dropdown: {
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    dropdown3: {
        //padding: 20,
        flexDirection: 'row',
        alignContent: 'flex-start',
        //borderWidth: 1,
        paddingVertical: 10,
        //backgroundColor: 'grey',
        width: '33.2%',
        height: '85%'
    },
    dropdown4: {
        flexDirection: 'row',
        alignContent: 'space-around'
    },
    dropdown5: {
        flexDirection: 'column',
        alignContent: 'space-around'
    },
    dropdown2: {
        flex: 1,
       paddingHorizontal: 20
    },
    search: {
        alignSelf: 'center',
        width: '30%',
        paddingVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'left',
        paddingVertical: 10
    },
    section: {
        //borderWidth: 1,
        paddingVertical: 10,
        backgroundColor: '#f7f9fa'
    },
    miniTitle: {
        fontFamily: 'open-sans',
        fontWeight: '600',
        fontSize: 20
    },
    bgImage: {
        width: "100%",
        height: 150,
    },
    screen2: {
        paddingVertical: 10
    },
    image: {
        width: 110,
        height: 110
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      button: {
        width: '38%'
      },
      text: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
      },
      checkbox: {
          width: 50,
          height: 50
      },
      checkboxImg: {
        width: 40,
        height: 40
      },
      text1: {
          fontFamily: 'open-sans',
          fontSize: 10
      },
      mapStyle: {
        width: '100%',
        height: 200,
      }
})

export default ExploreScreen;
