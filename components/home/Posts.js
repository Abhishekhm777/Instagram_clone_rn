import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Posts = ({ post }) => {
    console.log("Ddds", post.imageUrl);
    return (
        <View style={{ marginBottom: 40 }}>
            <View style={{
                backgroundColor: 'gray', height: 0.5
            }}></View>
            <PostHeader posts={post} />
            <PpostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments posts={post} />

            </View>
        </View>
    )
}


const PostHeader = ({ posts }) => (

    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 6,
            alignItems: 'center',

        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: posts.imageUrl }} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 12, fontWeight: '700' }}>{posts.users}</Text>
        </View>

        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)

const PpostImage = ({ post }) => (
    <View style={{ width: '100%', height: 450 }}>
        <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }} />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '32%' }}>
            <Icon iconsStyle={styles.footerIcon} imageUrl={postFooterIcons[0].imageUrl} />
            <Icon iconsStyle={styles.footerIcon} imageUrl={postFooterIcons[1].imageUrl} />
            <Icon iconsStyle={{ ...styles.footerIcon, height: 24, width: 24, marginTop: 4 }} imageUrl={postFooterIcons[2].imageUrl} />
        </View>

        <View style={{ alignSelf: 'center' }}>
            <Icon iconsStyle={{ ...styles.footerIcon, height: 24, width: 24 }} imageUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View>
)

const Icon = ({ iconsStyle, imageUrl }) => (
    <TouchableOpacity>
        <Image source={{ uri: imageUrl }} style={iconsStyle} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ marginTop: 4, flexDirection: 'row' }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.users}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)


const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'gray' }}>
                View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
                {post.comments.length > 1 ? ' comments' : 'comment'}
            </Text>
        )}
    </View>
)

const Comments = ({ posts }) => (
    <>
        {posts.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.users} </Text>
                    {comment.comment}
                </Text>
            </View>
        ))}

    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1.6,
        marginLeft: 6,
        borderColor: '#ff8501'
    },
    footerIcon: {
        width: 31,
        height: 31
    }
})

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://i.ibb.co/JnPbjBS/4k.png'
    },
    {
        name: 'Share',
        imageUrl: 'https://i.ibb.co/wsVqQzG/4k.png'
    },
    {
        name: 'Save',
        imageUrl: 'https://i.ibb.co/7vVMYrp/4k.png'
    },
]

export default Posts
