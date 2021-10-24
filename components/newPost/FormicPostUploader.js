import React, { isValidElement, useState } from 'react'
import * as yup from 'yup';
import { View, Text, Image, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import validUrl from 'valid-url'

const PLACE_HOLDER_IMAGE = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'

const uploadPostScheme = yup.object().shape({
    imageUrl: yup.string().url().required('A URL is required'),
    caption: yup.string().max(2200, 'Caption has reached maximum limit')
})


const FormicPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACE_HOLDER_IMAGE)

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => {
                console.log('Clicked', values)
                console.log('Your post was submitted successfully')
                navigation.goBack();
            }}
            validationSchema={uploadPostScheme}
            validateOnMount={true}
        >

            {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
                <>
                    <View style={{
                        margin: 20,
                        justifyContent: 'space-between',
                        flexDirection: 'row'
                    }}>
                        <Image source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACE_HOLDER_IMAGE }} style={{ width: 100, height: 100 }} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a captioin'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>

                    </View>
                    <View style={{ height: 0.5, backgroundColor: 'gray', }}></View>
                    <TextInput
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />

                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <View style={{ width: 90, alignSelf: 'center', borderRadius: 60 }}>
                        <Button onPress={handleSubmit} title='Share' disabled={!isValidElement} />
                    </View>
                </>
            )}

        </Formik >

    )
}

export default FormicPostUploader
