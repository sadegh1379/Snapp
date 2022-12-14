import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
     {
          id: "1234",
          title: "Get a ride",
          image: require('../assets/car.png'),
          screen: "MapScreen",
     }, {
          id: "5678",
          title: "Order food",
          image: require('../assets/food.png'),
          screen: "EatsScreen",
     }
]

const NavOptions = () => {
     const navigation = useNavigation();
     return (
          <FlatList
               data={data}
               horizontal
               renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`bg-gray-200 p-5 m-1 w-40`}>
                         <View style={tw`text-center flex items-center rounded`}>
                              <Image
                                   style={{ width: 100, height: 100, resizeMode: 'contain' }}
                                   source={item.image}
                              />
                              <Text style={tw`font-bold text-lg mt-1`}>{item.title}</Text>
                              <Icon
                                   style={tw`p-2 bg-black rounded-full mt-3`}
                                   size={20}
                                   name="arrowright" color="white" type="antdesign" />
                         </View>
                    </TouchableOpacity>
               )}
          />
     )
}

export default NavOptions

const styles = StyleSheet.create({})