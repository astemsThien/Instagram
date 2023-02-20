import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.logo} source={require('../../assets/ig-logo.png')} />
        </TouchableOpacity>

        <View style={styles.iconContainer}>
            <TouchableOpacity>
                <Image style={styles.icon} source={{uri:'https://img.icons8.com/material-outlined/256/plus-2-math.png'}} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios-glyphs/256/hearts.png'}} />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>15</Text>
                </View>
                <Image style={styles.icon} source={{uri:'https://img.icons8.com/ios/256/facebook-messenger.png'}} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        // marginHorizontal:10,
        marginTop:30,
    },

    iconContainer:{
        flexDirection:'row',
    },

    logo:{
        width:100,
        height:50,
        resizeMode:'contain',
    },

    icon:{
        height:30,
        width:30,
        marginLeft:10,
        resizeMode:'contain',
    },

    unreadBadge:{
        backgroundColor: '#ff3250',
        position:'absolute',
        left:20,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,
        bottom:20,
    },

    unreadBadgeText:{
        color:'white',
        fontWeight:'600'
    }
})

export default Header