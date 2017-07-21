import React, {Component} from 'react'

import { Image, Dimensions} from 'react-native'

const ProfilePic = ({source}) => {
  let windowWidth = Dimensions.get('window').width
  let newBannerWidth = (windowWidth)/4
  let newBannerHeight = (windowWidth)/4
  return(
    <Image source = {source} style={{width: newBannerWidth, height: newBannerHeight, borderWidth:5, borderRadius:(windowWidth)/4, borderColor:'lightgreen'}}/>
  )
}
export default ProfilePic
