import React, {Component} from 'react'

import { Image, Dimensions} from 'react-native'

const ProfilePic = ({source}) => {
  let windowWidth = Dimensions.get('window').width
  let newPictureWidth = (windowWidth)/4
  let newPictureHeight = (windowWidth)/4
  return(
    <Image source = {source} style={{width: newPictureWidth, height: newPictureHeight, borderWidth:5, borderRadius:(windowWidth)/4, borderColor:'lightgreen'}}/>
  )
}
export default ProfilePic
