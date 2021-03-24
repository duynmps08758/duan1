import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,width } from 'react-native'



export default FBScreen = () => {
    const [fGOne, onChangeFGOne] = React.useState();
    const [fGTwo, onChangeFGTwo] = React.useState();
    const [fGTree, onChangeFGTree] = React.useState();

    const [fGFour, onChangeFGFour] = React.useState();

   
   

    return (
        <View style={style.container}>
            <View style={style.header}
            >
               
                <Text style={style.textStyleSign} >Forgot PassWord</Text>
                <Text style={style.textStyle}>Lorem ipsum dolor sit amet, consectetur adipidscing.</Text>
                <Text style={style.textStyle}>integer maxximus accumsan erat id fasilicis. </Text>
            </View>
            <View style={style.footer}>

                <View style = {style.containerInput}> 
                    <TextInput
                       ref={(input) => { this.input1 = input; }}

                        style={style.input}
                        onChangeText={(onChangeFGOne) => {
                            if (onChangeFGOne != ""){
                                this.input2.focus()
                            } 
                        }}
                        // placeholder="Your Email"
                        value={fGTwo}

                    />
                    <TextInput
                       ref={(input) => { this.input2 = input; }}

                        style={style.input}
                        onChangeText={(onChangeFGTwo) => {
                            if (onChangeFGTwo != ""){
                                this.input3.focus()
                            } 
                        }}
                        // placeholder="Your Email"
                        value={fGOne}

                    />
                    <TextInput
                      ref={(input) => { this.input3 = input; }}

                        style={style.input}
                        onChangeText={(onChangeFGOne) => {
                            if (onChangeFGTree != ""){
                                this.input4.focus()
                            } 
                        }}
                        value={fGTree}

                    />
                    <TextInput
                     ref={(input) => { this.input4 = input; }}

                        style={style.input}
                        onChangeText={onChangeFGFour}
                        // placeholder="Your Email"
                        value={fGFour}

                    />
                  
                   <Text style={style.texttitle}>
                        Code was send your email,
                        
                       
1
                    </Text>
                    <Text style={style.textsendemail}>
                        Kylye_04@gmail.com
                        
                       

                    </Text>
                    <Text style={style.textwait}>
                        This code will expire on 5 minutes
                        
                       

                    </Text>
                 


                

                   





                </View>

              
                <TouchableOpacity
                    style={style.signinbutton}
                    onPress={() => { }}
                >
                    <Text style={style.textbuttonSign} >Verify Code</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={style.googlebutton}
                    onPress={() => { }}
                >
                    
                    <Text style={style.textbuttongoogle} >Resend Code</Text>
                </TouchableOpacity>
                
            </View>

        </View>

        


    );
    
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',





    },
    textStyleSign: {
        fontSize: 30,
        top: 50,
        
        color: 'white'

    },
    textStyle: {
        top: 50,
        right: 2,
        color: 'white',
        marginTop: 10,




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
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#7BCFE9',



    },
    footer: {
        flex: 3,
        alignItems: 'center',
    },
    input: {

        height: 60,
        width: 60,
        margin: 10,
        // borderRadius: 25,
        // flexDirection: 'row',
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
        marginTop: 210,
        width: 312,
        height: 62,
        marginLeft: 12
    },
    textbuttonSign: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
       
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
        backgroundColor: "#ACBAC3",
        padding: 20,
        borderRadius: 25,
        marginTop: 15,
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
        backgroundColor: "#1877F2",
        paddingBottom: 25,
        borderRadius: 25,
        marginTop: 20,
        width: 312,
        height: 62,
        marginLeft: 12
    },
    icon: {
        width: 30,
        height: 29,
        right: 100,
        top: 20





    },
    textsendemail:{
        top:120,
        right: 400
        

    },
    texttitle: {
        top: 100,
        right: 245  

    },
    textwait:{
        top: 210,
        right: 580

    },

    containerInput:{
        flexDirection:'row',
        alignItems: 'center',
        left: 265,   
        // top: -80
    }
  




})


