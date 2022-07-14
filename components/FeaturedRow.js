import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { ArrowCircleRightIcon, ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({id, title, description}) => {
    return (
        <View>
            <View className='mt-4 items-center justify-between px-4 flex-row'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00CCBB'/>
            </View>
            <Text className='px-4 text-xs text-gray-500'>{description}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className='pt-4'
            >
                {/* Restaurant Cards */}
                <RestaurantCard 
                    id='1'
                    imgUrl='https://lh3.googleusercontent.com/p/AF1QipMY933TjQWbbILod6dIukzSu1zcAy6vOaJEeiiK=s1600-w400'
                    title='Supraja'
                    rating={4.8}
                    genre='Indian Street Food'
                    address='Park Street'
                    short_description='Nice place to dine in'
                    dishes={[]}
                    long={20}
                    lat={10}
                />
                <RestaurantCard 
                    id='1'
                    imgUrl='https://lh3.googleusercontent.com/p/AF1QipMY933TjQWbbILod6dIukzSu1zcAy6vOaJEeiiK=s1600-w400'
                    title='Supraja'
                    rating={4.8}
                    genre='Indian Street Food'
                    address='Park Street'
                    short_description='Nice place to dine in'
                    dishes={[]}
                    long={20}
                    lat={10}
                />
                <RestaurantCard 
                    id='1'
                    imgUrl='https://lh3.googleusercontent.com/p/AF1QipMY933TjQWbbILod6dIukzSu1zcAy6vOaJEeiiK=s1600-w400'
                    title='Supraja'
                    rating={4.8}
                    genre='Indian Street Food'
                    address='Park Street'
                    short_description='Nice place to dine in'
                    dishes={[]}
                    long={20}
                    lat={10}
                />
            </ScrollView>
        </View>
    );
}


export default FeaturedRow;
