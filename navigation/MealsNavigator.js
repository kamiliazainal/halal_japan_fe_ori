import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LandingpageScreen from '../screens/LandingpageScreen';
import LoginpageScreen from '../screens/LoginpageScreen';
import AdspageScreen from '../screens/AdspageScreen';
import HomepageScreen from '../screens/HomepageScreen';
import ExploreScreen from '../screens/ExploreScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyFood from '../screens/MyFood';
import MyFashion from '../screens/MyFashion';
import MyMedicine from '../screens/MyMedicine';
import MyMosque from '../screens/MyMosque';
import Restaurants from '../screens/Restaurants';
import Tokyo from '../prefectures/Tokyo';
import Osaka from '../prefectures/Osaka';
import Kanagawa from '../prefectures/Kanagawa';
import Kyoto from '../prefectures/Kyoto';
import RestaurantDetail from '../screens/RestaurantDetail';
import MapEateryTokyo from '../components/MapEateryTokyo';

const defaultStackNavOptions ={
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

const withoutTabNavigator = createStackNavigator({
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
    }
},
{
    defaultNavigationOptions: defaultStackNavOptions
}
);

const tabHome = createStackNavigator({
    Homepage: {
        screen: HomepageScreen
    },
    
},
{
    defaultNavigationOptions: defaultStackNavOptions
}
);

const tabExplore = createStackNavigator({
    Explore: {screen: ExploreScreen}
},
{
    defaultNavigationOptions: defaultStackNavOptions
}
);

const tabAbout = createStackNavigator({
    About: {screen: AboutScreen}
},
{
    defaultNavigationOptions: defaultStackNavOptions
}
);

const tabProfile = createStackNavigator({
    Profile: {screen: ProfileScreen}
},
{
    defaultNavigationOptions: defaultStackNavOptions
}
);

const food = createStackNavigator({
    Food:{screen: MyFood,
        headerTitle: 'My Food',
        backgroundColor: 'white',
        fontFamily: 'open-sans',
        fontSize:12 }
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const fashion = createStackNavigator({
    Fashion: {screen:  MyFashion,
        headerTitle: 'My Fashion',
        backgroundColor: 'white',
        fontFamily: 'open-sans',
        fontSize:12}
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const medicine = createStackNavigator({
    Medicine: {screen: MyMedicine,
        headerTitle: 'My Medicine',
        backgroundColor: 'white',
        fontFamily: 'open-sans',
        fontSize:12}
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const mosque = createStackNavigator({
    Mosque: {screen: MyMosque,
        headerTitle: 'My Mosque',
        backgroundColor: 'white',
        fontFamily: 'open-sans',
        fontSize:12}
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const restaurant = createStackNavigator({
    Restaurant: Restaurants
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const tokyolist = createStackNavigator({
    tokyoList: Tokyo
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const osakalist = createStackNavigator({
    osakaList: Osaka
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const kanagawalist = createStackNavigator({
    kanagawaList: Kanagawa
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const kyotolist = createStackNavigator({
    kyotoList: Kyoto
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const restdetail = createStackNavigator({
    restaurantDetail: RestaurantDetail
})

const MealsFavTabNavigator = createBottomTabNavigator({
    HomePage:{
        screen: tabHome,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: tabInfo => {
                return (
                <Ionicons 
                name="ios-home" 
                size={25} 
                color={tabInfo.tintColor}
                />);
            }
        }
    },
    ExplorePage: {
        screen: tabExplore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: tabInfo => {
                return (
                <Ionicons 
                name="ios-search"
                size={25} 
                color={tabInfo.tintColor}
                />);
            }
        }
    },
    AboutPage: {
        screen: tabAbout,
        navigationOptions: {
            tabBarLabel: 'About Us',
            tabBarIcon: tabInfo => {
                return (
                <Ionicons 
                name="md-contact" 
                size={25} 
                color={tabInfo.tintColor}
                />);
            }
        }
    },
    ProfilePage: {
        screen: tabProfile,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: tabInfo => {
                return (
                <Ionicons 
                name="md-person" 
                size={25} 
                color={tabInfo.tintColor}
                />);
            }
        }
    }

},
{
    tabBarOptions: {
    activeTintColor: Colors.primaryColor
}
});

const headerTabNavigator = createMaterialTopTabNavigator({
    myfood:food,
    myfashion:fashion,
    mymedicine: medicine,
    mymosque: mosque
})

const MainNavigator = createDrawerNavigator(
    {
    withoutTab: withoutTabNavigator,
    profileTab: tabProfile,
    exploreTab: tabExplore,
    aboutTab: tabAbout,
    withTab: MealsFavTabNavigator,
    tabNav: headerTabNavigator,
    rest: restaurant,
    tokyo: tokyolist,
    osaka: osakalist,
    kanagawa: kanagawalist,
    kyoto: kyotolist,
    restaurantdetail: restdetail
    
},
{ //tak berfungsi
    contentOptions: {
        activeTintColor: '#ff6f00',
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
}
);

export default createAppContainer(MainNavigator);