import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import FormButtonCategory from './FontButtonCategory'
const { width, height } = Dimensions.get('window')

const ButtonCategory = ({ data }) => {


    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <FormButtonCategory item={item} />
                    }}
                />
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}


export default ButtonCategory

