import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Text } from 'react-native'
import FormButton from '../../components/FontButtonSearch'
import ButtonCategory from '../../components/ButtonCategory'
import { Data } from '../../components/Data'

export default HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState()
  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View style={styles.searchContainer}>
              <TextInput
                value={searchValue}
                onChangeText={(valueCategori) => setSearchValue(valueCategori)}
                style={styles.input}
                placeholder="Search"
                placeholderColor="#ACBAC3"
              />
              <FormButton />


            </View>
            <TouchableOpacity style={styles.buttonShopping}>
              <Image
                style={[styles.icon]}
                resizeMode='contain'
                source={require('../../ascess/image/icon_ShoppingCart.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textCategory}>Category</Text>
            <ButtonCategory data={Data} />
          </View>
        </View>
        <View style={styles.viewMid}>
          <View style={styles.viewMidChild}>
            <View style={styles.viewChild}>

              <TouchableOpacity style={styles.buttonWallet}>
                <Image
                  style={[styles.iconWallet]}
                  resizeMode='contain'
                  source={require('../../ascess/image/icon_Wallet.png')} />

              </TouchableOpacity>
              <Text style={styles.textValue}>$1.500</Text>

              <View style={styles.Custom}>
                <TouchableOpacity >
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_Pay.png')} />

                </TouchableOpacity>
                <Text style={styles.textValue}>Pay</Text>
              </View>

              <View style={styles.Custom}>
                <TouchableOpacity >
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_ToUp.png')} />

                </TouchableOpacity>
                <Text style={styles.textValue}>To up</Text>

              </View>
              <View style={styles.Custom}>
                <TouchableOpacity >
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_More.png')} />

                </TouchableOpacity>
                <Text style={styles.textValue}>More</Text>

              </View>


            </View>
          </View>
        </View>

        <View style={styles.footer}>
        </View>
      </View>
    </ScrollView >
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 12,
    backgroundColor: '#F6F6F7',

  },
  footer: {
    flex: 3,
  },

  searchContainer: {
    width: '100%',
    height: 38,
    borderColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginBottom: 31,

  },
  input: {
    flex: 1,
    fontSize: 12,
    color: '#ACBAC3',
    marginLeft: 13,
  },
  icon: {
    width: 24,
    height: 24,
  },
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,

  },

  textCategory: {
    fontSize: 20,
    color: '#7A8D9C',
    marginBottom: 20,
    marginLeft: 29,
  },
  viewMid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMidChild: {
    width: '87%',
    height: 65,
    backgroundColor: '#FFA771',
    borderRadius: 10,
    top: -32,
  },
  iconWallet: {
    width: 28,
    height: 28,
  },
  textValue: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 25,
    fontWeight: 'bold',
    marginRight: 38,

  },
  viewChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWallet: {

    marginRight: 11,
  },
  Custom: {
    marginTop: 15
  },
  iconCustom: {
    width: 20,
    height: 20,
  }



});