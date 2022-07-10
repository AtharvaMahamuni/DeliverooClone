import { View, Text,  SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import {
    AdjustmentsIcon,
    ChevronDownIcon, SearchIcon, UserIcon
} from 'react-native-heroicons/outline'

export default function HomeScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        // headerTitle: 'Testing',
        headerShown: false
    })
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5 mt-5'>
        <View>
        {/* Horizontal photo text and icons line 1 */}
        <View className='flex-row flex-1'>
            <Image 
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className='flex-1 ml-2'>
                <Text className='font-bold text-gray-400 text-xs'>
                    Deliver Now!
                </Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon size={20} color='#00CCBB'/>
                </Text>
            </View>
            <UserIcon size={35} color='#00CCBB'/>  
        </View>
          {/* Search */}
          <View>
                <View>
                    <SearchIcon color='#00CCBB'/>
                    <TextInput />
                </View>
                <AdjustmentsIcon color='#00CCBB'/>
            </View>
        </View>
    </SafeAreaView>
  )
}