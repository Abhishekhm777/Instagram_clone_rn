import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import LoginForm from '../components/login/LoginForm';

const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.conatainer}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />

            </View>
            <LoginForm navigation={navigation} />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30
    }
})
