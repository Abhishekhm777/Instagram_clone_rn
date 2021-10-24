import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Posts from '../components/home/Posts'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/post'

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.conatiner}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {
                    POSTS.map((post, index) => (
                        <Posts post={post} key={index} />
                    ))
                }
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: 'black',
        flex: 1
    }
})
