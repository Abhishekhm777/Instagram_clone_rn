import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://i.ibb.co/P9FXx7D/4k.png',
        inActive: 'https://i.ibb.co/P9FXx7D/4k.png'
    },
    {
        name: 'Search',
        active: 'https://i.ibb.co/qCMp0sN/4k.png',
        inActive: 'https://i.ibb.co/qCMp0sN/4k.png'
    },
    {
        name: 'Reel',
        active: 'https://i.ibb.co/GpPmB90/4k.png',
        inActive: 'https://i.ibb.co/GpPmB90/4k.png'
    },
    {
        name: 'Shopping',
        active: 'https://i.ibb.co/LQYvdbh/4k.png',
        inActive: 'https://i.ibb.co/LQYvdbh/4k.png'
    },
    {
        name: 'Profile',
        active: 'https://i.ibb.co/ZzjVswM/4k.png',
        inActive: 'https://i.ibb.co/ZzjVswM/4k.png'
    }

]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icons }) => (
        <TouchableOpacity onPress={() => setActiveTab(icons.name)}>
            <Image source={{ uri: icons.inActive }} style={[styles.icon, icons.name == 'Profile' ? styles.profilePic : null]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <View style={{ backgroundColor: 'gray', height: 0.5 }}></View>
            <View style={styles.container}>
                {
                    icons.map((icon, index) => (
                        <Icon icons={icon} key={index} />
                    ))
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 45,
        marginTop: 10
    },
    icon: {
        width: 25,
        height: 25
    },
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#000'
    },
    profilePic: {
        borderRadius: 50,
        borderColor: 'white'
    }
})

export default BottomTabs
