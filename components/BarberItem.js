import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';


const picsumImages = new Array(4).fill("http://placeimg.com/640/360/any");
const numberOfcolumns = 2


function BarberItem (props){
    const [images, setImages] = useState(picsumImages);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <View style={styles.userProfile}>
                        <Image 
                            source={{uri: "http://placeimg.com/640/360/any"}}
                            style={{width: 40, height: 40}}
                        />
                    </View>
                    <Text style={styles.userName}>Bamba Ba</Text>
                </View>
                <Text style={styles.contact}>Contattare</Text>
            </View>
            <FlatList 
                data={images}
                renderItem={({ item }) => (
                    <View style={styles.singleImageContainer}>
                        <Image
                            source={{uri: item}} 
                            style={styles.singleImage}
                        />
                    </View>
                )}
                numColumns={numberOfcolumns}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'dodgerblue',
        // borderWidth: .1,
        // borderColor: 'grey',
        // borderRadius: 4,
        paddingBottom: 25,
        overflow: 'hidden',
        paddingRight: 10,
        paddingLeft: 10,
    },
    singleImageContainer: {
        width: '50%',
        height: 100,
        padding: 1,
    },

    singleImage: {
        // aspectRatio: 1,
        // flex: 1 / numberOfcolumns,
        width: '100%',
        height: '100%'
    },
    header:  {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        // backgroundColor: 'red',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userProfile: {
        width: 40,
        height: 40,
        backgroundColor: 'grey',
        // marginLeft: 10,
        overflow: 'hidden',
        borderRadius: 40,
    },
    userName: {
        marginLeft: 5,
        color: '#111',
        fontWeight: '500',
        fontSize: 16,
    },
    contact: {
        // marginRight: 10,
        color: 'dodgerblue',
        fontWeight: '900',
        fontSize: 17,
    }
})

export default BarberItem;