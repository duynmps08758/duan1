import React,{useState} from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from 'react-native';
import {  Triangle } from 'react-native-shape';

const { width, height } = Dimensions.get('screen')
const ModalHome = () => {
    

    return (
        <View>
           <View style={styles.viewtriangleContainer}>
           <View style={styles.triangle} />
           </View>
        <View style={styles.viewContainer}>
            <TouchableOpacity  /*onPress={item.action}*/ >
                <Image
                    style={[styles.icon]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_Charge.png')}
                />
                <Text style={styles.viewText}>Charge</Text>
            </TouchableOpacity>
            <TouchableOpacity  /*onPress={item.action}*/ >

                <Image
                    style={[styles.icon]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_Transfer.png')}
                />
               <Text style={styles.viewText}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity  /*onPress={item.action}*/ >

                <Image
                    style={[styles.icon]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_Credit.png')}
                />
                 <Text style={styles.viewText}>Credit</Text>
            </TouchableOpacity>
            <TouchableOpacity  /*onPress={item.action}*/ >


                <Image
                    style={[styles.icon]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_PayLater.png')}
                />
                <Text style={styles.viewText}>PayLater</Text>
            </TouchableOpacity>
            <TouchableOpacity  /*onPress={item.action}*/ >

                <Image
                    style={[styles.icon]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_Settings.png')}
                />
                 <Text style={styles.viewText}>Settings</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default ModalHome

const styles = StyleSheet.create({
    viewContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'100%',
        height:80,
        padding: 10,
        flexDirection:'row',
        backgroundColor:"#ffff",
        borderRadius:20

    },
  
    icon: {
        width: 20,
        height: 20,
        

    },
    viewText: {
        color: '#126881',
        fontSize: 10,
        fontWeight: 'bold',
        lineHeight:12.5,
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "white",
         borderTopStartRadius:20,
      },
  
});