import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity,FlatList, } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler'
import itemCardShopPing from '../../components/itemcard/itemCardShopPing'

export default ShopPingCardScreen = () => {
    const [people, setPeople] = React.useState([
        {name: 'duy', key :'1'},
        {name: 'duy', key :'2'},
        {name: 'duy', key :'3'},
        {name: 'duy', key :'4'},
        {name: 'duy', key :'5'},
    ])
  
    return (
        <View style={style.container}>
            <View style={style.herder}>
                <TouchableOpacity>

                    <Image
                        style={[style.buttonImageBack]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_back.png')} />
                </TouchableOpacity>
                    <Text style={style.textheader}>
                        My Car
                    </Text>
                <TouchableOpacity>

                    <Image
                        style={[style.buttonImageSetting]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_popmenu.png')} />
                </TouchableOpacity>

            </View>
            <View style={style.content}>
               <FlatList
               data={people}
               renderItem ={({item}) => ( 
                   <Text style={style.item}>{item.name}.{item.key}</Text>
               )}>
                   
               </FlatList>
            </View>
            <View style={style.footter}>
                <View style={style.textSub}>
                    <Text>SubTotal</Text>
                    <Text style={{color:'#E4126B', fontSize:25}}> 0$</Text>
                </View>
                <TouchableOpacity
                    style={style.signinbutton}
                    onPress={() => { }}
                >
                    <Text style={style.textbuttonSign} >Check Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    herder: {
        height:60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems:'center',
       
    },
    content: {
        flex: 5,
        padding: 10,
        backgroundColor: '#F6F6F7',
    },
    footter: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        justifyContent:'space-between',
        paddingLeft: 40,
        paddingRight: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonImageBack: {  
        width: 40,
        height: 40,
        borderRadius: 30
    },
    buttonImageSetting: {
        width: 40,
        height: 40,
        alignItems: 'flex-end',
        justifyContent:'flex-end',        

        
        
    },
    textheader: {
        flex: 1,
        
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 130
        

    },
    signinbutton: {
      
        backgroundColor: "#126881",
   
        borderRadius: 25,
        // width: 310,
        
        height: 62,
        justifyContent:'center',
        alignItems: 'center',
      
        

       
        
      
    },
    textbuttonSign: {
        color: 'white',
        height: 16,
        width: 76,
    },
    textSub:{
        flexDirection: 'row',
        justifyContent:'space-between',
        // flex: 1
    }
})
