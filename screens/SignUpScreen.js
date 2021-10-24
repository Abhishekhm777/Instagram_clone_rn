
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/signUp/SignUpForm';

const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png';

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.conatainer}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />
            </View>
            <SignUpForm navigation={navigation} />
        </View>
    )
}



const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30
    }
})


export default SignUpScreen
