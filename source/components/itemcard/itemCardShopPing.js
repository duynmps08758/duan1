import React from 'react'
import Swipeout from 'react-native-swipeout';


import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'




export default function itemCardShopPing(props) {
    const { category} = props;
    const [count, setCount] = React.useState(5);
    const swipeSetting = {
        autuClose: true,
        onClose: (secId, rowId, direction) => {

        },
        onOpen: (secId, rowId, direction) => {

        },
        right: [
            {
                onPress: () => {

                },
                text: 'Delete', type: 'delete'
            }
        ],
        // rowId: this.props.index,
        sectionId: 1
    };
    return (
        <Swipeout{...swipeSetting}>
        <View style={style.container}>
            <View style={style.product}>
                <TouchableOpacity
                    style={style.buttonCheck}
                    onPress={() => { }}

                >
                    <Image
                        style={[style.btnDelete]}
                        resizeMode='contain'
                        source={require('../../ascess/image/ic_fabo.png')} />


                </TouchableOpacity>
                <Image
                    style={style.icon}
                    resizeMode='contain'
                // source={require('../../components/image/download.png')}
                />
                <View style={style.textStyle}>
                    <Text style={style.textTitle}>
                        Lavi Jeans
                </Text  >
                    <Text style={style.textColor}>
                        Color: Dark Grey
                </Text>
                    <Text style={style.textSize}>Size: L</Text>
                    <Text style={style.textMoney}>
                        $76
                </Text>
                    <View style={style.congTru}>
                        <TouchableOpacity style={style.btnTru}
                            onPress={() => setCount(Math.max(0, count - 1))}
                        >

                            <Text style={style.textTru}>
                                -
                    </Text>
                        </TouchableOpacity>

                        <Text style={style.textValue}>
                            {count}
                        </Text>
                        <TouchableOpacity style={style.btnCong}
                            onPress={() => { setCount(count + 1) }}>
                            <Text style={style.textCong}>+</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <TouchableOpacity
                    style={style.fbbutton}
                    onPress={() => { }}

                >
                    <Image
                        style={[style.btnDelete]}
                        resizeMode='contain'
                        source={require('../../ascess/image/Delete_button.png')}
                    />


                </TouchableOpacity>
            </View>
            <View style={style.total}>
                <Text style={style.textMoneyFT}>  $76</Text>
                <Text > Sub total:</Text>

            </View>
        </View>
        </Swipeout>
    )
}
const style = StyleSheet.create({
    icon: {
        width: 130,
        height: 130,
        backgroundColor: '#E4E4E4',
        borderRadius: 20
    },
    container: {
        padding: 10,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'



    },
    product: {
        flexDirection: 'row',
        paddingBottom: 10

    },
    textTitle: {
        fontWeight: 'bold',
    },
    textMoney: {
        fontSize: 25,
        color: '#126881',
    },
    textStyle: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        // alignItems:'center'

    },
    buttonCheck: {
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    textColor: {
    },
    textSize: {
    },
    btnDelete: {
        height: 25,
        width: 25,

    },
    congTru: {
        flexDirection: 'row',
    },
    btnTru: {
        width: 30,
        height: 30,


    },
    btnCong: {
        width: 30,
        height: 30,
    },
    textTru: {
        fontSize: 25,
        backgroundColor: "#E4E4E4",
        justifyContent: 'center',
        paddingLeft: 10

    },
    textCong: {
        fontSize: 25,
        backgroundColor: "#E4E4E4",
        paddingLeft: 8
    },
    textValue: {
        fontSize: 25,
        backgroundColor: "#FFFFFF",
        width: 50,
        height: 30,
        textAlign: 'center'

    },
    fbbutton: {

        height: 30,
        width: 30,

    },
    total: {
        paddingHorizontal: 1,
        paddingTop: 10,
        alignItems: 'flex-end',
        borderTopColor: '#bdbdbd',
        borderTopWidth: 1,
        flexDirection: 'row-reverse'





    },
    textMoneyFT:{
        color: '#E4126B'
    }


})