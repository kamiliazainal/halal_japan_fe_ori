import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Colors from '../constants/Colors';
import LandingpageScreen from '../screens/LandingpageScreen';
import LoginpageScreen from '../screens/LoginpageScreen';
import AdspageScreen from '../screens/AdspageScreen';
import RestaurantDetail from '../screens/RestaurantDetail';
import MapEateryTokyo from '../components/MapEateryTokyo';

import BottomTabNavigator from '../navigation/BottomTabNavigator';
import TopTabNavigator from '../navigation/TopTabNavigator';

const defaultStackNavOptions ={
    headerTitle: 'Halal Map',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
}

const MainNavigator = createStackNavigator(
    {
        Landingpage: {
            screen: LandingpageScreen,
            navigationOptions: {
                header: null
                }
        },
        Loginpage: {
            screen: LoginpageScreen,
            navigationOptions: {
                header: null,
                tabBarVisible: false
                }
        },
        Adspage: {
            screen: AdspageScreen,
            navigationOptions: {
                header: null,
                tabBarVisible: false
                }
        },
        EateryTokyo: {
            screen: MapEateryTokyo,
            navigationOptions: {
                header: null,
                tabBarVisible: false
                }
        },
        top: TopTabNavigator,
        bottom: BottomTabNavigator,
        restaurantDetail: RestaurantDetail
},
{
    defaultNavigationOptions: defaultStackNavOptions
},
{ 
    contentOptions: {
        activeTintColor: '#ff6f00',
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
}
);

export default createAppContainer(MainNavigator);