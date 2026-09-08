import { View, Text } from 'react-native'
import React from 'react'
import HomePage from '@/view/Home/HomePage'
import SafeAreaWrapper from '@/components/SafeAreaWrapper'

const index = () => {
  return (
    <SafeAreaWrapper>
      <HomePage />
    </SafeAreaWrapper>
  )
}

export default index