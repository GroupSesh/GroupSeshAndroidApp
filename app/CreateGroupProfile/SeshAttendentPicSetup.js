import React, {Component} from 'react'

import { Image, Dimensions} from 'react-native'

const AttendentPic = ({source}) => {
  let windowWidth = Dimensions.get('window').width
  let newBannerWidth = (windowWidth)/5
  let newBannerHeight = (windowWidth)/5
  return(
    <Image source = {source} style={{width: newBannerWidth, height: newBannerHeight, borderWidth:5, borderRadius:(windowWidth)/5, borderColor:'lightgreen'}}/>
  )
}
export default AttendentPic
