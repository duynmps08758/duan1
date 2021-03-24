import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Text, Modal, Button, Dimensions } from 'react-native'
import FormButton from '../../components/buttons/FontButtonSearch'
import ButtonCategory from '../../components/buttons/ButtonCategory'
import { Data } from '../../components/buttons/Data'
import ButtonShopping from '../../components/buttons/ButtonShopping'

const { width, height } = Dimensions.get('screen')

export default HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState()
  const [isShow, setIsShow] = useState()
  const showModal = () => setIsShow(true);
  const hideModal = () => setIsShow(false);
  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <FormButton
              searchValue={searchValue}
              onChangeText={(valueCategory) => setSearchValue(valueCategory)}
              SearchText="Search"
            />
            <ButtonShopping />
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
                <Text style={styles.textCustom}>Pay</Text>
              </View>

              <View style={styles.Custom}>
                <TouchableOpacity >
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_ToUp.png')} />

                </TouchableOpacity>
                <Text style={styles.textCustom}>To up</Text>

              </View>

              <View style={styles.Custom}>

                <TouchableOpacity onPress={showModal} style={styles.viewMore} >
                  <Image
                    style={[styles.iconCustom]}
                    resizeMode='contain'
                    source={require('../../ascess/image/icon_More.png')} />
                </TouchableOpacity>

                <Text style={styles.textCustom}>More</Text>

              </View>
            </View>
          </View>
        </View>
          {isShow &&
          <Modal style={styles.modal}>
            <View>
              <Button title="Click To Close Modal" onPress={hideModal} />
            </View>
            </Modal>
          }

        <View style={styles.footer}>
        </View>
      </View>
     
    </ScrollView >
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffff',
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
    marginLeft: 23.5
  },
  textValue: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 25,
    fontWeight: 'bold',
    marginRight: 25,

  },
  viewChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,

  },
  buttonWallet: {
    marginRight: 11,
  },
  Custom: {
    alignItems: 'stretch',
    marginLeft: 28,
  },
  iconCustom: {
    width: 20,
    height: 20,
    marginBottom: 6,
    marginRight: 10,


  },
  textCustom: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'bold',
    marginRight: 38,

  },
  viewMore: {
    zIndex: 1,
  },
  modal: {
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width:width,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
 
  },

});