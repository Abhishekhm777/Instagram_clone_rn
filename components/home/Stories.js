import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => {
    return (
        <View style={{ marginBottom: 13, flexDirection: 'column' }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index}>
                        <Image source={{ uri: story.Image }} style={styles.story} />
                        <Text style={{ color: 'white', alignSelf: 'center' }}>
                            {story.user.length > 8 ? story.user.slice(0, 7).toLocaleLowerCase() + '...' : story.user}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        marginLeft: 6,
        borderColor: '#ff8501'
    }
})
export default Stories
