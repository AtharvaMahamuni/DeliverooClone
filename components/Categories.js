import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        showsHorizontalScrollIndicator={false}
    >
      {/* Category Card */}
      <CategoryCard imgUrl='https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000' title='Food 1'/>
      <CategoryCard imgUrl='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb' title='Food 2'/>
      <CategoryCard imgUrl='https://images.indianexpress.com/2021/12/food-trends_-1200.jpg' title='Food 3'/>
      <CategoryCard imgUrl='https://content3.jdmagicbox.com/comp/def_content/fast-food/22-fast-food-9-20wsq.jpg' title='Food 4'/>
      <CategoryCard imgUrl='https://www.expatica.com/app/uploads/sites/2/2016/09/spanish-food.jpg' title='Food 5'/>
      
    </ScrollView>
  )
}

export default Categories