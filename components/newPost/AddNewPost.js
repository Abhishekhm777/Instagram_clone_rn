import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormicPostUploader from './FormicPostUploader'

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormicPostUploader navigation={navigation} />
        </View>
    )
}

const Header = ({ navigation }) => (

    <View style={styles.headerConatiner}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
    </View>
)

export default AddNewPost


const styles = StyleSheet.create({
    headerConatiner: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    container: {
        marginHorizontal: 10
    },
    headerText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18,
        marginLeft: 20

    }
})