import {SafeAreaView,ScrollView, View, Text } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App