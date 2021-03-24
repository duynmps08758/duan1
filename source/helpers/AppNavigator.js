import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View, Alert, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DropdownAlert from 'react-native-dropdownalert';
import { AlertHelper } from './AlertHelper';
import Colors from '../styles/Colors'
import FontSizes from '../styles/FontSizes'
import * as utilsActions from '../store/actions/UtilsActions'
import ProgressDialog from '../components/Progress/ProgressDialog';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import ListScreen from '../features/list/ListScreen';

import DetailScreen from '../features/detail/DetailScreen';
import SignInScreen from '../features/login/SignInScreen'
import SignUpScreen from '../features/register/ReGisTer'
import EmailScreen from '../features/email/EmailSreens'
import PhoneScreen from '../features/phone/PhoneScreen'
import NewPassScreen from '../features/newpassword/NewPassScreen'
import FGScreen from '../features/fgscreen/FGScreen'
import proFileScreen from '../features/profilescreen/proFileScreen'
import HomeScreen from '../features/home/HomeScreen'
import itemCardShopPing from '../../source/components/itemcard/itemCardShopPing'
import ShopPingCardScreen from '../features/shoppingcardscreen/ShopPingCardScreen'

const MainStack = createStackNavigator()
const BottomTabs = createMaterialTopTabNavigator()

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="ShopPingCardScreen">

        <MainStack.Screen name="BottomTabs" component={NavBottomTabs} />
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen name="itemCardShopPing" component={itemCardShopPing} />
        <MainStack.Screen name="ShopPingCardScreen" component={ShopPingCardScreen} />


        <MainStack.Screen name="SignInScreen" component={SignInScreen} />
        <MainStack.Screen name="FGScreen" component={FGScreen} />

        <MainStack.Screen name="NewPassScreen" component={NewPassScreen} />
        <MainStack.Screen name="PhoneScreen" component={PhoneScreen} />
        <MainStack.Screen name="EmailScreen" component={EmailScreen} />
        <MainStack.Screen name="SignUpScreen" component={SignUpScreen} />

        <MainStack.Screen name="ListScreen" component={ListScreen} />
        <MainStack.Screen name="DetailScreen" component={DetailScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;


const NavBottomTabs = () => {
  return (
    <BottomTabs.Navigator tabBarPosition='bottom' swipeEnabled={false} backBehavior='none'
      initialRouteName="Home" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
     
      tabBar={props => <CustomTab {...props}
       />}
     
      >
      <BottomTabs.Screen  name="Home" component={proFileScreen} 
        component={proFileScreen} 
       />
      <BottomTabs.Screen  name="Payment" component={proFileScreen} />
      <BottomTabs.Screen name="About" component={proFileScreen} />
      <BottomTabs.Screen name="Setting" component={proFileScreen} />
      
      <BottomTabs.Screen name="Account" component={HomeScreen} />
    </BottomTabs.Navigator>
  );
}

function CustomTab({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50,backgroundColor: '#fff', borderRadius: 200, bottom: 10 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          console.log('----> nhan tab: ', label)
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1 }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: Colors.lightGray }}>
              <Text style={{ color: Colors.black, fontSize: FontSizes.size18, fontWeight: isFocused ? '700' : 'normal' }}>{label}</Text>
              <View style={{ position: 'absolute', bottom: 0, height: 4, width: '60%', backgroundColor: isFocused ? Colors.main_color : 'transparent', borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
            </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}
