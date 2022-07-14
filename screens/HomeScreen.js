import { View, Text,  SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import {
    AdjustmentsIcon,
    ChevronDownIcon, SearchIcon, UserIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

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
            <View className='flex-row flex-1 px-4'>
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
            <View className='flex-row items-center space-x-2 pb-2 mx-2 px-2'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center'>
                    <SearchIcon color='gray' size={20}/>
                    <TextInput placeholder='Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsIcon color='#00CCBB'/>
            </View>
            {/* Body */}
            <ScrollView className='bg-gray-100'>
                {/* Categories */}
                <View>
                    <Categories />
                </View>

                {/* Features rows */}
                    <FeaturedRow
                        id='1' 
                        title='Featured'
                        description='Paid placement from partners'
                    />

                {/* Tasty Discount */}
                    <FeaturedRow
                        id='2' 
                        title='Tasty Discount'
                        description='Everyone is being enjoying these juicy discounts!'
                    />

                {/* Offers near you */}
                    <FeaturedRow 
                        id='3'
                        title='Offers near you'
                        description='Why not support your local restaurant tonight!'
                    />
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}