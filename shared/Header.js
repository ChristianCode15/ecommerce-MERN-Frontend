
import React from 'react';
import { StyleSheet, SafeAreaView, Image, View } from 'react-native';

const Header = () => {

    return(
        <SafeAreaView style={styles.header} >
            <Image 
            source={require('../assets/data/LogoChristian.png')}
            resizeMode='cover'
            style={{height: 60}}
            />
        </SafeAreaView>
    );

}

export default Header;

const styles = StyleSheet.create({

    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 5 
    }
});