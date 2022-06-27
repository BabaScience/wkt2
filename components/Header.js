import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function Header (props){
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>CuttSTR</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'dodgerblue',
        height: 50,
    },
    logo: {
        marginLeft: 7,
        fontSize: 20,
        fontWeight: '600',
    }
})

export default Header;