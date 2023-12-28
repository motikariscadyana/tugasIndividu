import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const handleBeliPress = () => {
        navigation.navigate('Barang');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../img/3.png')}
                style={styles.image}
            />

            <TouchableOpacity style={styles.buttonContainer} onPress={handleBeliPress}>
                <Text style={styles.buttonText}>BELI YUK</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191919',
    },
    image: {
        width: 500,
        height: 400,
        resizeMode: 'contain',
    },
    buttonContainer: {
        backgroundColor: '#557C55',
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Home;