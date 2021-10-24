
import React from 'react'
import { Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import * as yup from 'yup';
import { Form, Formik } from 'formik'
import Validator from 'email-validator'

const SignUpForm = ({ navigation }) => {
    const SignUpSchema = yup.object().shape({
        email: yup.string().email().required('An Email is required'),
        userName: yup.string().required().min(6, 'A user name is required'),
        password: yup.string().required().min(8, 'Your password has to have atleast 8 character')
    })



    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', userName: '', password: '' }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={SignUpSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, isValid, values }) => (
                    <>
                        <View style={[styles.inputField,
                        {
                            borderColor: values.email.length < 1 || Validator.validate(values.email)
                                ? '#ccc' : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('emial')}
                                value={values.email}
                            />
                        </View>

                        <View style={[styles.inputField,
                        {
                            borderColor: values.userName.length < 1 || values.userName.length >= 6
                                ? '#ccc' : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='name'
                                onChangeText={handleChange('userName')}
                                onBlur={handleBlur('userName')}
                                value={values.userName}
                            />
                        </View>
                        <View style={[styles.inputField,
                        {
                            borderColor: values.password.length < 1 || values.password.length >= 8
                                ? '#ccc' : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                textContentType='password'
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <Pressable style={styles.button(isValid)}
                            onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Sign Up</Text>

                        </Pressable>

                        <View style={styles.signUpConatainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack(null)}>
                                <Text style={{ color: '#6BB0F5' }}>
                                    Log In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignUpForm

const styles = StyleSheet.create({
    inputField: {
        borderRadius: 6,
        padding: 4,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    wrapper: {
        marginTop: 80
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginTop: 30

    }),
    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20
    },
    signUpConatainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50
    }

})
