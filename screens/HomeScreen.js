import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Platform, Text } from 'react-native';

// Components
import  Header from '../components/Header'
import SearchBar from '../components/SearchBar';
import BarberItem from '../components/BarberItem';

function HomeScreen (props){
    return(
        <SafeAreaView style={{...styles.container, ...styles.droidSafeArea}}>
            <View style={styles.top}>
                <Header />
                <SearchBar />
            </View>
            <ScrollView 
                style={styles.results}
                showsVerticalScrollIndicator={false}
            >
                <BarberItem />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    top: {
        backgroundColor: 'white',
        paddingBottom: 10,
        marginBottom: 12,
    },
    results:  {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingTop: 15,

    }

})

export default HomeScreen;