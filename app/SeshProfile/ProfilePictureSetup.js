import React, {Component} from 'react'

import { Image, Dimensions} from 'react-native'

const ProfilePic = ({source}) => {
  let windowWidth = Dimensions.get('window').width
  let newPictureWidth = (windowWidth)/3
  let newPictureHeight = (windowWidth)/3
  return(
    <Image source = {source} style={{width: newPictureWidth, height: newPictureHeight, borderWidth:3, borderRadius:(windowWidth)/3, borderColor:'lightgreen', paddingHorizontal:20}}/>
  )
}
export default ProfilePic
