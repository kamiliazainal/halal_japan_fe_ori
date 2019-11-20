import React from 'react';
import { View,StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

const LandingpageScreen = props => {
    return (
        <View style={styles.screen}>
            <Image style={styles.welcome}
            source={require('../assets/logo1.png')}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Login" 
                    onPress={() =>{
                        props.navigation.replace({routeName: 'Loginpage'});
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Button title="Sign Up"/>
                </View>
            </View>
            <View style={styles.buttonContainer2}>
                <Button 
                    type="clear"
                    title="Browse as guest" 
                    onPress={() =>{
                        props.navigation.navigate({routeName: 'Homepage'});
                        }} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        width: 260,
        height: 220,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      container1: {
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
        // backgroundColor: '#fff',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },
      buttonContainer2: {
        padding: 20
      },
      button: {
        width: '40%'
      }
})

export default LandingpageScreen;
