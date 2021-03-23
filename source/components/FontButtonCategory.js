import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, View, Image } from 'react-native';


const { width, height } = Dimensions.get('screen')
const FormButtonCategory = ({ item }) => {
    return (
        <View style={styles.viewContainer} >
            <TouchableOpacity  /*onPress={item.action}*/ >

                <View style={styles.viewIcon} >
                    <Image
                        style={[styles.icon]}
                        resizeMode='contain'
                        source={item?.icon}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    );
};

export default FormButtonCategory;

const styles = StyleSheet.create({
    viewContainer: {
    justifyContent:'center',
    alignItems:'center',
    
    },
    viewIcon: {
        width: 64,
        height: 64,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: '#ffff'

    },
    icon: {
        width:40,
        height: 40,

    },
    title: {
        color: '#126881',
        fontSize: 12,
        fontWeight: 'bold',
    },
    viewTitle: {
        width: 60,
        height: 29,
        alignItems: 'center',
        marginBottom: 66,
    }
});