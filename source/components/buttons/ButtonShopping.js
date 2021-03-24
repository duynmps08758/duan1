import React from 'react'
import {TouchableOpacity,StyleSheet,Image} from 'react-native'

const ButtonShopping = () => {
    return (
        <TouchableOpacity style={styles.buttonShopping}>
        <Image
          style={[styles.icon]}
          resizeMode='contain'
          source={require('../../ascess/image/icon_ShoppingCart.png')} />
      </TouchableOpacity>
    )
}

export default ButtonShopping
const styles = StyleSheet.create({
    buttonShopping: {
        backgroundColor: '#7BCFE9',
        width: 36,
        height: 36,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginLeft: 6,
        marginRight: 31,
        justifyContent: 'center',
        marginTop: 3
      },
      icon: {
        width: 24,
        height: 24,
      },
    
});
