import { View, Text, Image, } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements'


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/material-rounded/256/home-page.png',
        inactive: 'https://img.icons8.com/windows/256/home-page.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/external-kmg-design-flat-kmg-design/256/external-search-ui-essentials-kmg-design-flat-kmg-design.png',
        inactive: 'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/256/external-social-social-media-basic-others-anggara-putra-20.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/clouds/256/instagram-reel.png',
        inactive: 'https://img.icons8.com/color/256/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/cotton/256/online-store.png',
        inactive: 'https://img.icons8.com/ios/256/online-store.png',
    },
    {
        name: 'Profile',
        active: 'https://img.icons8.com/ios-filled/256/user-male-circle.png',
        inactive: 'https://img.icons8.com/ios/256/user-male-circle--v1.png',
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{uri: inactive}} style={style.icon}/>
        </TouchableOpacity>
    )
  return (
    <View>
      {icons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    icon:{
        with:30,
        height:30,
    },
})

export default BottomTabs