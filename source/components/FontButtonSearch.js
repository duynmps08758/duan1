import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from 'react-native';


const { width, height } = Dimensions.get('screen')
const FormButton = () => {
    return (

        <TouchableOpacity style={styles.buttonContainer}>
            <Image
                style={[styles.icon]}
                resizeMode='contain'
                source={require( '../ascess/image/icon_1.png')} />
        </TouchableOpacity>

    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width:51,
        height: 35,
        backgroundColor: '#7BCFE9',
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        
    },
    icon: {
        position: 'absolute',
        width: 11.41,
        height: 11.41,
       
    }
});