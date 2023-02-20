import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../component/home/Header'
import Stories from '../component/home/Stories'
import Post from '../component/home/Post'
import {POSTS} from '../data/post'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
            <Post post={post} key={index}/>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        margin:10,
    }
})

export default HomeScreen