import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'




export default SignInScreen = () => {
    const [userName, onChangeUserName] = React.useState();
    const [passWord, onChangeTextPassWord] = React.useState();

    return (
        <View style={style.container}>
            <View style={style.header}   >

                <Image
                    style={[style.iconUser]}
                    resizeMode='contain'
                />

                <Text style={style.textStyleTitle}>Kylie</Text>
                <Text style={style.textStyleEmail}>Kylie_04@gmail.com </Text>
            </View>
            <View style={style.footer}>




                <TouchableOpacity
                    style={style.fbbutton}
                    onPress={() => { }}

                >
                    <Image
                        style={[style.icon]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_acount.png')} />
                    <Text style={style.textbuttonfb} >Acount</Text>

                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        style={style.fbbutton}
                        onPress={() => { }}

                    >
                        <Image
                            style={[style.icon]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_adress.png')} />
                        <Text style={style.textbuttonfb} >My Adress</Text>

                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity
                        style={style.fbbutton}
                        onPress={() => { }}

                    >
                        <Image
                            style={[style.icon]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_myOder.png')} />
                        <Text style={style.textbuttonfb} >My Orther</Text>

                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity
                        style={style.fbbutton}
                        onPress={() => { }}

                    >
                        <Image
                            style={[style.icon]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_traitim.jpeg')} />
                        <Text style={style.textbuttonfb} >My Favourite</Text>

                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity
                        style={style.fbbutton}
                        onPress={() => { }}

                    >
                        <Image
                            style={[style.icon]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_payment.png')} />
                        <Text style={style.textbuttonfb} >PayMent  </Text>

                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity
                        style={style.fbbutton}
                        onPress={() => { }}

                    >
                        <Image
                            style={[style.icon]}
                            resizeMode='contain'
                            source={require('../../ascess/image/ic_setting.png')} />
                        <Text style={style.textbuttonfb} >Setting</Text>

                    </TouchableOpacity>

                </View>
            </View>

        </View>




    );

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F2',





    },
    textStyleSign: {
        fontSize: 30,
        top: 50,

        color: 'white'

    },
    textStyle: {
        top: 50,
        left: 110,
        color: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'




    },
    textStyleUp: {
        fontSize: 20,
        position: 'absolute',
        right: 20,
        top: 30,
        color: 'white'

    },
    header: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',

        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#F6F6F7',



    },
    footer: {
        flex: 3,
        alignItems: 'center',
    },
    input: {

        height: 62,
        width: 312,
        margin: 10,
        borderRadius: 25,
        backgroundColor: '#F6F6F7',
        paddingLeft: 10,
        top: 35
    },
    forgotbutton: {
        top: 35,
        left: 100
    },
    buttonText: {
        color: "#E6655C"

    },
    signinbutton: {
        alignItems: "center",
        backgroundColor: "#126881",
        padding: 20,
        borderRadius: 25,
        marginTop: 50,
        width: 312,
        height: 62,
        marginLeft: 12
    },
    textbuttonSign: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: 16,
        width: 56,
    },
    mediabutton: {
        alignItems: "center",
        height: 25,
        width: 175,
        top: 30,


    },
    googlebutton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#F6F6F7",
        paddingBottom: 25,
        borderRadius: 25,
        marginTop: 40,
        width: 312,
        height: 62,
        marginLeft: 12
    },
    textbuttongoogle: {
        color: '#515457',
        alignItems: 'center',
    },
    fbbutton: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        paddingBottom: 25,
        borderRadius: 25,
        borderWidth: 0.23,
        marginTop: 20,
        width: 312,
        height: 62,
        marginLeft: 12,
        top: -50
    },
    icon: {
        width: 30,
        height: 29,
        right: 100,
        top: 20,
        backgroundColor: '#FFFFFF'





    },
    textStyleTitle: {
        fontWeight: 'bold',
        top: 17,
        left: 155,



    },
    textStyleEmail: {
        top: 35,
        left: 110,
    },
    iconUser: {
        width: 70,
        height: 70,
        left: 135,
        backgroundColor: "#DBD5D5",
        borderRadius: 50
    },









})


